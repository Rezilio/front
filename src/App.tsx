import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Gouvernance from '@/pages/Gouvernance/Gouvernance'
import Risques from '@/pages/Risques/Risques'
import Incidents from '@/pages/Incidents/Incidents'
import SupplyChain from '@/pages/SupplyChain/SupplyChain'
import Conformite from '@/pages/Conformite/Conformite'
import Reporting from '@/pages/Reporting/Reporting'
import Login from '@/pages/Auth/Login'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="gouvernance" element={<Gouvernance />} />
        <Route path="risques" element={<Risques />} />
        <Route path="incidents" element={<Incidents />} />
        <Route path="supply-chain" element={<SupplyChain />} />
        <Route path="conformite" element={<Conformite />} />
        <Route path="reporting" element={<Reporting />} />
      </Route>
    </Routes>
  )
}

export default App
