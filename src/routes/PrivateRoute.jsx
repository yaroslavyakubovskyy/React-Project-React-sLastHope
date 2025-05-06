import {useSelector} from "react-redux";

import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    // const isLoggedIn = useSelector(selectIsLoggedIn)
    // if(!isLoggedIn) return <Navigate to='/login'/>
    return children;
};

export default PrivateRoute;