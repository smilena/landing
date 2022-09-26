import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from '../../../store';
import { Step } from '../../../routes/Navigation';

const Components = {
  Wrapper: styled.div`
    padding: 24px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    max-height: 64vh;
    overflow: auto;
  `,
  Row: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #504437;
  `,
  Text: styled.p`
    color: #504437;
    font-size: 18px;
    margin: 5px;

    @media (max-width: 1120px){
      font-size: 14px;
    }
  `,
  Input: styled.input`
    color: #504437;
    font-size: 18px;
    height: 30px;
    border: 1px solid #504437;
    border-radius: 3px;
  `,
  Title: styled.h2`
    color: #504437;
    margin: 5px;
  `,
}

export const Summary = () => {

  const userData = useSelector((state:RootState) => state.userData);
  const {navigation} = useSelector((state:RootState) => state.navigation);
  const keys = Object.keys(userData);
  const values = Object.values(userData);

  const step = (key: string) => navigation.find(((step) => step.id === key)) || navigation.map((step) => step.substep?.id === key);

  const toBoolean = (value: string) => value === 'true' ? 'Si' : (value === 'false' ? 'No' : value)

  return (
    <Components.Wrapper>
      <Components.Title>Resumen</Components.Title>
      {
        values.map((value, index) => {
          const tempStep = step(keys[index]) as Step
          const label = tempStep && tempStep.label;
          return <Components.Row key={index}>
            <Components.Text>{label}</Components.Text>
            <Components.Text>{toBoolean(String(value))}</Components.Text>
          </Components.Row>
        })
      }
    </Components.Wrapper>
  )
}
