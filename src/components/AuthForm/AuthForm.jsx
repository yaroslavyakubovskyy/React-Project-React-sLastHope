import {Field, Form, Formik} from "formik";

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
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <label>
                    Name
                    <Field type='text' name='name'/>
                </label>
                <label>
                    Email
                    <Field type='email' name='email'/>
                </label>
                <label>
                    Password
                    <Field type='password' name='password'/>
                </label>

                <button type='submit'>Sign Up</button>
            </Form>
        </Formik>
    );
};

export default AuthForm;