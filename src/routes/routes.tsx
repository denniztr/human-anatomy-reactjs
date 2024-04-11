import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/Main/MainPage';
import HumanPage from '../pages/Human/HumanPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<HumanPage />} path="/human" />
    </Routes>
  );
};

export default AppRouter;
