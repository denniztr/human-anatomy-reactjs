import { Route, Routes } from 'react-router-dom';

import Layout from '../layout/desktop/layout';

import MainPage from '../pages/Main/MainPage';
import QuizPage from '../pages/Quiz/QuizPage';
import AddQuiz from '../pages/AddQuiz/AddQuiz';


const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<QuizPage />} path="/quiz" />
        <Route element={<AddQuiz/>} path="/add" />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
