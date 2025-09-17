import React from 'react'
import RefactorizacionSistemaVida from './MainPlan'
import LifeRefactorDashboard from './HomeApp'
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<LifeRefactorDashboard />} />
        <Route path="/mainplan" element={<RefactorizacionSistemaVida />} />
      </Routes>  )
}
