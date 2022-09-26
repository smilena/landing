import { Link } from "react-router-dom";
import styled from "styled-components";

const Components = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h1`
    color: #504437;
  `,
  NavLink: styled(Link)`
    font-size: 22px;
    margin-bottom: 20px;
    color: #3b9ce4;
    text-decoration: none;
  `,
}

export type HomeProps = {
  id: string;
  label: string;
}

export const HomePage = ({label}: HomeProps) => {
  return (
    <Components.Wrapper>
      <Components.Title>Bienvenido</Components.Title>
      <Components.NavLink to={'/name'}>{label}</Components.NavLink>
    </Components.Wrapper>
  )
}
