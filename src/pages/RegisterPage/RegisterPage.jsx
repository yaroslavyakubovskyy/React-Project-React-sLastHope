import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import {useDispatch} from "react-redux";
import {singUp} from "../../redux/auth/operations.js";

const RegisterPage = () => {
    const dispatch = useDispatch()
    const onSubmit = (values)=>{
        dispatch(singUp(values))
    }
    return (
        <div>
            <p>Sign Up</p>
            <p>Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.</p>
            <AuthForm onSubmit={onSubmit}/>
        </div>
    );
};

export default RegisterPage;