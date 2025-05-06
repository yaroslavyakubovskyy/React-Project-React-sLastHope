import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const RestrictedRoute = ({component, redirect}) => {
    // const isLoggedIn = useSelector(selectIsLoggedIn)
    // if(isLoggedIn) return  <Navigate to={redirect}/>
    return component
};

export default RestrictedRoute;