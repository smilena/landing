import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setUserData, UserData } from '../../../redux-state/UserDataSlice';
import { setContinueToNavigation } from "../../../redux-state/NavigationSlice";
import { useEffect } from "react";
import { validateEmail } from "../../helpers/ValidateEmail";
import { RootState } from '../../../store';

export type EmailInputProps = {
  id: string;
  label: string;
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

export const EmailInput = ({id, label}: EmailInputProps) => {
  
  const dispatch = useDispatch();
  const userData:UserData = useSelector((state: RootState) => state.userData);
  const [value, setValue] = useState(userData[id  as keyof UserData] as string);

  useEffect(() => {
    dispatch(setContinueToNavigation(value && value.length > 0 && validateEmail(value)));
  }, [value]);

  const onChangeHandler = (e: React.FormEvent<EventTarget>) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
    dispatch(setUserData({id, value}));
  }
  
  return (
    <Components.Wrapper>
      <Components.Label htmlFor={id}>{label}</Components.Label>
      <Components.Input
        data-testid="input-email"
        type="email" 
        id={id} 
        value={value}
        onChange={onChangeHandler}
      />
    </Components.Wrapper>
  )
}
