import { Routes as RRDRoutes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Register from '@/pages/Register';
import Login from '@/pages/Login';

const Routes = () => {
    return (
        <RRDRoutes>

            <Route path='/' element={<Main />} />

            <Route path='/register' element={<Register />} />

            <Route path='/login' element={<Login />} />

        </RRDRoutes>
    );
}

export default Routes;