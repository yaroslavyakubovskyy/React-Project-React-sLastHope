import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import clsx from "clsx";
import * as Yup from "yup";

import s from "./AuthForm.module.css";
import { useState } from "react";

const AuthForm = ({ onSubmit, isRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const initialValues = isRegister
    ? {
        name: "",
        email: "",
        password: "",
      }
    : {
        email: "",
        password: "",
      };
  const handleSubmit = async (values, actions) => {
    const submitValues = isRegister
      ? values
      : {
          email: values.email,
          password: values.password,
        };

    await onSubmit(submitValues);
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    ...(isRegister && {
      name: Yup.string().required("Name is required"),
    }),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters long")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
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
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div
              className={clsx(s.formWrapper, {
                [s.formWrapperLogin]: !isRegister,
              })}
            >
              {isRegister && (
                <>
                  <Field
                    className={s.input}
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <ErrorMessage className={s.error} component="p" name="name" />
                </>
              )}

              <Field
                className={s.input}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage className={s.error} component="p" name="email" />

              <div className={s.wrapperIcon}>
                <Field
                  className={s.input}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                {showPassword ? (
                  <FiEye className={s.icon} onClick={togglePassword} />
                ) : (
                  <FiEyeOff className={s.icon} onClick={togglePassword} />
                )}
              </div>

              <ErrorMessage className={s.error} component="p" name="password" />
            </div>
            <button className={s.button} type="submit" disabled={isSubmitting}>
              {isRegister ? "Sign Up" : "Sign In"}
            </button>
          </Form>
        )}
      </Formik>
      <p className={s.text}>
        {isRegister ? (
          <>
            Already have account?{" "}
            <Link to="/login" className={s.link}>
              Sign In
            </Link>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <Link to="/register" className={s.link}>
              Sing Up
            </Link>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
