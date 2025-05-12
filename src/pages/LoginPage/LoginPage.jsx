import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import s from "./LoginPage.module.css";
import AuthForm from "../../components/AuthForm/AuthForm";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    await dispatch(loginThunk(values)).unwrap();
    toast.success("Login successful");
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
