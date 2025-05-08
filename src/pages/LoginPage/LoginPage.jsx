import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import s from "./LoginPage.module.css";
import AuthForm from "../../components/AuthForm/AuthForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    try {
      await dispatch(loginThunk(values)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.extra}>
      <div className={s.wrapper}>
        <p className={s.header}>Sign In</p>
        <p className={s.text}>
          Welcome back to effortless expense tracking! Your financial dashboard
          awaits.
        </p>
        <AuthForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default LoginPage;
