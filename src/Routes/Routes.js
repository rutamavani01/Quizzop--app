import React from 'react'
import Get_started from '../pages/Get_started'
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Start_quiz from '../pages/Start_quiz';
import Start_screen from '../pages/Start_screen';
import Category from '../pages/Category';
import Main from '../components/Main';
import Contests from '../pages/Contests';
import View_Quiztopic from '../pages/View_Quiztopic';
import Begin_quiz from '../pages/Begin_quiz';
import Join_contest from '../pages/Join_contest';
import Menu from '../pages/Menu';
import Quiz from '../pages/Quiz';
import Contest_rank from '../pages/Contest_rank';
import { Rules } from '../pages/Rules';

const Routes = () => {
    return (
        <RouterRoutes>
            <Route path='/' element={<Main />}>
                <Route path="/" element={<Get_started />} />
                <Route path='/start-quiz' element={<Start_quiz />} />
            </Route>


                <Route path='/category' element={<Category />} />
                <Route path='/start-screen' element={<Start_screen />} />
                <Route path='/contests' element={<Contests />} />
                <Route path="/view-quiztopic/:quizName" element={<View_Quiztopic />} />
                <Route path="/begin-quiz/:quizName" element={<Begin_quiz />} />
                <Route path='/join-contest' element={<Join_contest />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/contest-rank' element={<Contest_rank />} />
                <Route path='/rules' element={<Rules />} />

        </RouterRoutes>
    )
}

export default Routes;