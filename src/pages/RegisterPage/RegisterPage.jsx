import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations.js";
import s from "./RegisterPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(signUp(values));
  };
  return (
    <div className={s.extra} s>
      <div className={s.wrapper}>
        <p className={s.header}>Sign Up</p>
        <p className={s.text}>
          Step into a world of hassle-free expense management! Your journey
          towards financial mastery begins here.
        </p>
        <AuthForm onSubmit={onSubmit} isRegister />
      </div>
    </div>
  );
};

export default RegisterPage;
