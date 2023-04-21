import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import FriendsPage from '../pages/FriendsPage';
import ReimbursementsPage from '../pages/ReimbursementsPage';
import ReimbursementPage from '../pages/ReimbursementPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import NewReimbursementPage from '../pages/NewReimbursementPage';
import { useContext } from 'react';
import { AuthContext, SetAuthContext } from '../context/AuthProvider';

export default function Router() {
    const auth = useContext(AuthContext);
    const setAuth = useContext(SetAuthContext);
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignupPage setAuth={setAuth} navigate={navigate} />} />
            <Route path='/login' element={<LoginPage setAuth={setAuth} navigate={navigate} />} />
            <Route path='/friends' element={<FriendsPage auth={auth} />} />
            <Route path='/reimbursements' element={<ReimbursementsPage auth={auth} />} />
            <Route path='/reimbursements/new' element={<NewReimbursementPage auth={auth} navigate={navigate} />} />
            <Route path='/reimbursements/:reimb_id' element={<ReimbursementPage auth={auth} />} />

            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}
