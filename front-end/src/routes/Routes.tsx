import { Routes as RRDRoutes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Register from '@/pages/Register';

const Routes = () => {
    return (
        <RRDRoutes>

            <Route path='/' element={<Main />} />

            <Route path='/register' element={<Register />} />

        </RRDRoutes>
    );
}

export default Routes;