import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RootState } from '../../../store';

type ButtonProps = {
  disabled?: boolean;
}

const Components = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  `,
  Button: styled.button<ButtonProps>`
    background: #a8a189;
    color: white;
    border: none;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
  `,
}

const Button = ({disabled=false, label, onClick}: {disabled: boolean, label: string, onClick: () => void}) => {
  return <Components.Button disabled={disabled} onClick={()=>onClick()}>{label}</Components.Button>;
};

export const FormNavigation = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const {navigation, continueToNavigation} = useSelector((state: RootState) => state.navigation);
  const userData = useSelector((state: RootState) => state.userData);
  
  
  const getNextPath = (currentStep:number, goBack: boolean): string => {
    const nextStep = goBack ? currentStep-1 : currentStep+1;
    if (nextStep < 2) return '/home';
    const step = navigation.find((navigationItem: { step: number; }) => navigationItem.step === nextStep);
    return step ? step.path : '/summary';
  }

  const onChangeStepHandler = (goBack: boolean) => {
    const currentStep = navigation.find((navigationItem: { path: string; }) => navigationItem.path === location.pathname);

    currentStep && navigate(getNextPath(currentStep.step, goBack));
    window.localStorage.setItem('USER_DATA', JSON.stringify(userData));

  }

  return (
    <Components.Wrapper>
      <Button onClick={() => onChangeStepHandler(true)} label="Anteror" disabled={false} />
      <Button onClick={() => onChangeStepHandler(false)} label="Siguiente" disabled={!continueToNavigation} />
    </Components.Wrapper>
  )
}
