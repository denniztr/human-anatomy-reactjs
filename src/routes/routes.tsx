import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/Main/MainPage';
import HumanPage from '../pages/Human/HumanPage';

import Layout from '../layout/desktop/layout';

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<HumanPage />} path="/human" />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
