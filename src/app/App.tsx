import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DormDraftPage from './pages/DormDraftPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/dormdraft" element={<DormDraftPage />} />
      </Routes>
    </BrowserRouter>
  );
}