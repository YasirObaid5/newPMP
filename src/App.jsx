
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import PrinciplesView from './pages/PrinciplesView';
import DomainsView from './pages/DomainsView';
import ModelsMethodsView from './pages/ModelsMethodsView';
import ProcessGridView from './pages/ProcessGridView';
import AgileView from './pages/AgileView';
import ExamPrepView from './pages/ExamPrepView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="principles" element={<PrinciplesView />} />
          <Route path="domains" element={<DomainsView />} />
          <Route path="models-methods" element={<ModelsMethodsView />} />
          <Route path="process-grid" element={<ProcessGridView />} />
          <Route path="agile" element={<AgileView />} />
          <Route path="exam-prep" element={<ExamPrepView />} />
          <Route path="artifacts" element={<Navigate to="/models-methods" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
