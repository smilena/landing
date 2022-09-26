import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FormNavigation } from './FormNavigation';
import { ModalSummary } from './ModalSummary';
import { Steps } from './Steps';
import { Summary } from './Summary';
import { RootState } from '../../../store';

const Components = {
  Wrapper: styled.div`
    background-color: rgba(255, 255, 255, 0.85);
    width: 80vw;
    padding: 24px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70vh;

    @media (max-width: 767px){
      flex-direction: column;
      align-items: none;
    }
  `,
  MainContent: styled.div`
    margin: 0 auto;
    padding: 24px;
  `,
  SummaryContainer: styled.div`
    margin: 0 auto;
    padding: 24px;
    overflow-y: scroll;

    @media (max-width: 767px){
      display: none;
    }
  `,
  ModalSummary: styled.div`
    margin: 0 auto;

    @media (min-width: 767px){
      display: none;
    }
  `,
}

export type FormContainerProps = {
  children: React.ReactElement;
}

export const FormContainer = ({children}: FormContainerProps) => {

  const location = useLocation();
  const { navigation } = useSelector((state: RootState) => state.navigation);
  const currentStep = navigation.find((navigationItem: { path: string; }) => navigationItem.path === location.pathname);
  const showNavigation =  currentStep && currentStep.step > 1;

  return (
    <Components.Wrapper>
      <Components.MainContent>
        {showNavigation && <Steps />}
        {children}
        {showNavigation && <FormNavigation /> }
      </Components.MainContent>
      { showNavigation &&
        <Components.SummaryContainer>
          <Summary />
        </Components.SummaryContainer> 
      }
      { showNavigation &&
        <Components.ModalSummary>
          <ModalSummary />
        </Components.ModalSummary>
      }
    </Components.Wrapper>
  )
}
