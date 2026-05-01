import { Routes as RRDRoutes, Route } from 'react-router-dom';
import Main from '../pages/Main';

const Routes = () => {
    return (
        <RRDRoutes>

            <Route path='/' element={<Main />} />

        </RRDRoutes>
    );
}

export default Routes;