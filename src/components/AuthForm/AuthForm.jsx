import {Field, Form, Formik} from "formik";
import s from './AuthForm.module.css'
import {Link} from "react-router-dom";
const AuthForm = ({onSubmit}) => {
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }
    const handleSubmit = (values, actions)=>{
        actions.resetForm()
        onSubmit(values)
    }
    return (
        <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                    <div className={s.form}>
                    <Field className={s.input} type='text' name='name' placeholder='Name' />

                    <Field className={s.input} type='email' name='email' placeholder='Email'/>

                    <Field className={s.input} type='password' name='password' placeholder='Password'/>

                    </div>
                <button className={s.button} type='submit'>Sign Up</button>
            </Form>
        </Formik>
            <p>Already have account?<Link to='/login'>Sign In</Link></p>
        </div>
    );
};

export default AuthForm;