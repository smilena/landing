import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setUserData, UserData } from '../../../redux-state/UserDataSlice';
import { RootState } from '../../../store';

export type RadioInputProps = {
  id: string;
  label: string;
  substep?: RadioInputProps
}

const Components = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  OptionWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4px;
  `,
  Label: styled.label`
    color: #504437;
    font-size: 18px;
  `,
  Input: styled.input`
    accent-color: #504437;
  `,
}

const mapOptionValues: { [key: string]: boolean } = {
  'true': true,
  'false': false,
}

export const RadioInput = ({id, label, substep}: RadioInputProps) => {
  
  const dispatch = useDispatch();
  const userData:UserData = useSelector((state: RootState) => state.userData);
  const [value, setValue] = useState(userData[id  as keyof UserData ] || false);
  const [subStepValue, setSubStepValue] = useState(false);

  useEffect(() => {
    dispatch(setUserData({id, value}));
    substep && dispatch(setUserData({id: substep?.id, value: subStepValue}));
  }, [value, subStepValue])
  

  const onChangeHandler = (e: React.FormEvent<EventTarget>) => {
    const { value } = e.target as HTMLInputElement;
    setValue(mapOptionValues[value]);
  }

  const onSubStepChangeHandler = () => {
    setSubStepValue(!subStepValue);
  }
  
  return (
    <Components.Wrapper>
      <Components.Label htmlFor={id}>{label}</Components.Label>
      {
        <>
          <Components.OptionWrapper>
            <Components.Label>Si</Components.Label>
            <Components.Input
              type="radio"
              value="true"
              checked={mapOptionValues[`${value}`]}
              onChange={onChangeHandler} />
          </Components.OptionWrapper>
          <Components.OptionWrapper>
            <Components.Label>No</Components.Label>
            <Components.Input
              type="radio"
              value="false"
              checked={!mapOptionValues[`${value}`]}
              onChange={onChangeHandler} />
          </Components.OptionWrapper>
        </>
      }
      {
        substep && value && <Components.OptionWrapper>
          <Components.Label htmlFor={substep.id}>{substep.label}</Components.Label>
          <Components.Input
            type="checkbox"
            value={substep.id}
            checked={subStepValue}
            onChange={onSubStepChangeHandler}
          />
        </Components.OptionWrapper>
      }
    </Components.Wrapper>
  )
}