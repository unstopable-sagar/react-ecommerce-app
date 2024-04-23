import React from 'react'
import { useFormik,Form,Field,ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <>
    <Helmet>
        <title>Login</title>
    </Helmet>
    <Formik
    initialValues={{email:'',password:''}}
    validationSchema={Yup.object({
        email:Yup.string()
        .email('invalid email format')
        .required('email is mandatory'),

        password:Yup.string()
        .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$?!])[A-Za-z\d@#$?!]{8,100}$/,'must contain one uppercase, one lowercase, one numeric and one special character and must contain at least 8 characters')
        .required('password is mandatory'),
    })}
    >{/*names in initialvalues must be same as in form below */}
        <div className="container my-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 shadow">
                    <Form>                       
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email" id="email" className="form-control"/>
                            <ErrorMessage name="email"> 
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" id="password" className="form-control"/>
                            <ErrorMessage name="password"> 
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>                     
                        <div className="mb-2">
                            <button className='btn btn-primary'>Login</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </Formik>
    </>
  )
}

export default Register