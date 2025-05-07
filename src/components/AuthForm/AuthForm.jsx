import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./AuthForm.module.css";
import { Link, useLocation } from "react-router-dom";
import * as Yup from "yup";

const AuthForm = ({ onSubmit }) => {
  const location = useLocation();
  const formType = location.pathname;

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onSubmit(values);
  };
  const validationSchema = Yup.object({
    ...(formType === "/register" && {
      name: Yup.string().required("Name is required"),
    }),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters long")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol",
      )
      .required("Password is required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <div className={s.formWrapper}>
            {formType === "/register" && (
              <Field
                className={s.input}
                type="text"
                name="name"
                placeholder="Name"
              />
            )}
            <ErrorMessage className={s.error} component="p" name="name" />

            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage className={s.error} component="p" name="email" />

            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage className={s.error} component="p" name="password" />
          </div>
          <button className={s.button} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
      <p className={s.text}>
        Already have account?{" "}
        <Link to="/login" className={s.link}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
