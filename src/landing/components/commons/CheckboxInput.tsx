import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setUserData, UserData } from '../../../redux-state/UserDataSlice';
import { RootState } from '../../../store';

export type CheckboxInputProps = {
  id: string;
  label: string;
  options?: Array<Option>;
}

type Option = {
  id: string;
  label: string;
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
    margin-bottom: 10px;
  `,
  Input: styled.input`
    accent-color: #504437;
  `,
}

export const CheckboxInput = ({id, label, options}: CheckboxInputProps) => {
  
  const dispatch = useDispatch();
  const userData: UserData = useSelector((state: RootState) => state.userData);
  const [checked, updateCheckedState] = useState(userData[id  as keyof UserData ] as Array<string> || []);

  useEffect(() => {
    dispatch(setUserData({id, value: checked}));
  }, [checked]);
  

  const onChangeHandler = (optionId: string) => {
    if (checked.includes(optionId)) {
      updateCheckedState(checked.filter((el: string) => el !== optionId));
    } else {
      updateCheckedState((currentState) => [...currentState, optionId])
    }
  }
  
  return (
    <Components.Wrapper>
      <Components.Label htmlFor={id}>{label}</Components.Label>
      {
       options && options.map((option, index) => 
          <Components.OptionWrapper key={index} >
            <Components.Label htmlFor={option.id}>{option.label}</Components.Label>
            <Components.Input
              type="checkbox"
              value={option.id}
              checked={checked.includes(option.id)}
              onChange={() => onChangeHandler(option.id)}
            />
          </Components.OptionWrapper>)
      }
    </Components.Wrapper>
  )
}
