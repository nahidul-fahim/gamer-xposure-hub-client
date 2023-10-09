import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';




const PrivateRoute = ({children}) => {

    const {currentUser, authLoading} = useContext(AuthContext);
    const location = useLocation();

    if (authLoading) {
        return <span className="loading loading-dots loading-lg container mx-auto flex justify-center items-center h-[100vh]"></span>
    }

    if(currentUser) {
        return children;
    }

    return ( <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}