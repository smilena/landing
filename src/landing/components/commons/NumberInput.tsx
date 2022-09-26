import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setUserData, UserData } from '../../../redux-state/UserDataSlice';
import { setContinueToNavigation } from "../../../redux-state/NavigationSlice";
import { useEffect } from "react";
import { RootState } from '../../../store';

export type NumberInputProps = {
  id: string;
  label: string;
  max?: number;
}

const Components = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Label: styled.label`
    color: #504437;
    font-size: 18px;
  `,
  Input: styled.input`
    color: #504437;
    font-size: 18px;
    height: 30px;
    border: 1px solid #504437;
    border-radius: 3px;
  `,
}

export const NumberInput = ({id, label, max = 50}: NumberInputProps) => {
  
  const dispatch = useDispatch();
  const userData:UserData = useSelector((state:RootState) => state.userData);
  const [value, setValue] = useState(userData[id  as keyof UserData ]);

  useEffect(() => {
    dispatch(setContinueToNavigation(value > 0));
  }, [value]);

  const onChangeHandler = (e: React.FormEvent<EventTarget>) => {
    const { value }  = e.target as HTMLInputElement;
    setValue(Number(value));
    dispatch(setUserData({id, value}));
  }
  
  return (
    <Components.Wrapper>
      <Components.Label htmlFor={id}>{label}</Components.Label>
      <Components.Input
        data-testid="input-number"
        type="number" 
        id={id} 
        max={max}
        value={Number(value)}
        onChange={onChangeHandler}
      />
    </Components.Wrapper>
  )
}
