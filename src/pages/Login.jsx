import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { authLogin, authWithGoogle } from '../functions/dbAuth';
import '../styles/Login.css';

function Login() {
  const loginGoogle = () => {
    authWithGoogle();
  };
  const userLogin = (credentials) => {
    authLogin(credentials.email, credentials.password);
    console.log(credentials.email, credentials.password);
  };
  return (
    <div className="row">
      <div className="col-6 "></div>
      <div className="cont-card card absolute-center ">
        <div className="card-body border-secondary border-bottom">
          <h1 className="card-text text-center mb-4">Ingresar</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!values.password) {
                errors.password = 'Required';
              }
              return errors;
            }}
            onSubmit={(values) => {
              userLogin(values);
            }}
          >
            {({}) => (
              <Form className="row g-2 mb-2">
                <div className="mb-1">
                  <Field className="form-control" type="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="mb-3">
                  <Field className="form-control" type="password" name="password" placeholder="Password" />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary mb-2" type="submit">
                    Ingresar
                  </button>
                  <button className="btn btn-primary" type="button" onClick={loginGoogle}>
                    Ingresa con Google
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="text-center  pt-3">
          <Link className="text-decoration-none" to="/register">
            Crear una cuenta
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
