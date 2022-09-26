import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Components } from "../landing/helpers/ComponentMapping";
import { FormContainer } from "../landing/components/shared/FormContainer";
import navigationData from '../data/navigationData.json';
import { SummaryPage } from '../landing/components/pages/SummaryPage';

export type Step = {
  component: string;
  id: string;
  path: string;
  label: string;
  step: number;
  complete?: boolean;
}

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {navigationData.map((step: Step, index: number) => {
          const Component = Components[step.component];
          return <Route key={index} path={step.path} element={<FormContainer><Component {...step}/></FormContainer>}
        />})}
        <Route path="/summary" element={<SummaryPage />}/>
        <Route path="/*" element={<Navigate to="home"/>}/>
      </Routes>
    </BrowserRouter>
  )
}
