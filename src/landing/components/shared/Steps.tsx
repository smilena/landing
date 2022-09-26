import { useSelector } from "react-redux";
import styled from "styled-components";
import { Step } from "../../../routes/Navigation";
import { RootState } from '../../../store';

type StepProps = {
  complete: boolean
}

const Components = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
  `,
  Step: styled.span<StepProps>`
    background-color: #afa492;
    margin: 2px;
    padding: 2px 8px;
    border-radius: 50%;
    color: #504437;
    font-size: 18px;

    ${({complete}) => complete && `
      background-color: #504437;
      color: #afa492;
    `}
  `,
}

export const Steps = () => {

  const {navigation} = useSelector((state: RootState) => state.navigation);
  const userData = Object.keys(useSelector((state: RootState) => state.userData));
  
  return (
    <Components.Wrapper>
      {navigation.map((step: Step, index: number) => 
      <Components.Step key={index} complete={userData.includes(step.id) || step.id === 'home' }>
        {step.step}
      </Components.Step>)}
    </Components.Wrapper>
  )
}
