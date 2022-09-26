import { useState } from 'react';
import styled from "styled-components";
import { Summary } from './Summary';

const Components = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Button: styled.button`
    background-color: #504437;
    border: none;
    padding: 10px 20px;
    color: white;
    width: 100%;
    font-size: 16px;
  `,
  ModalContainer: styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 12%;
    background-color: rgba(255,255,255,0.95);
    z-index: 2;
    padding: 10px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 70vw;
  `,
  ModalBackground: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  `,
}

export const ModalSummary = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  return (
    <Components.Wrapper>
      
      <Components.Button onClick={() => setIsOpenModal(true)}>Ver resumen</Components.Button>
      {
        isOpenModal && <>
          <Components.ModalBackground></Components.ModalBackground>
          <Components.ModalContainer>
            <Summary />
            <div className="actions">
              <div className="actions-container">
                <Components.Button onClick={() => setIsOpenModal(false)} >
                  Cerrar
                </Components.Button>
              </div>
            </div>
          </Components.ModalContainer>
        </>
        
      }
    </Components.Wrapper>
  );
}
