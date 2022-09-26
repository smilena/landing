import { useEffect } from "react";
import styled from "styled-components";
import { Summary } from "../shared/Summary";

const Components = {
  Wrapper: styled.div`
    background-color: rgba(255,255,255,0.85);
    max-height: 70vh;
    overflow: auto;
  `,
}

export const SummaryPage = () => {

  useEffect(() => {
    window.localStorage.clear();
  }, [])
  
  return (
    <Components.Wrapper>
      <Summary/>
    </Components.Wrapper>
  )
}
