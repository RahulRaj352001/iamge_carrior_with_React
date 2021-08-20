import React from "react";
import firebase from "../config/Firebase";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
export default function SignUp() {
  const history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(value,formikBag) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(value.email, value.password)
          .then((res) => {
            history.replace("/")
          })
          .catch((e) => {
            formikBag.setFieldError("email",e.message)
          });
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("must be required").email(),
        password: Yup.string().required("must be required").min(6),
      })}
    >
      {(formik) => (
        <section className="flex justify-center">
          <div className="flex h-screen w-1/2 bg-gray-100">
            <div className="m-auto w-full text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-400">
              <Form className="m-2 w-10/12">
                <h1 className="w-full text-4xl tracking-widest text-center my-6">
                  Sign Up Here
                </h1>
                <div className="w-full my-6">
                  <Field
                    name="email"
                    type="email"
                    className="p-2 rounded shadow w-full text-black"
                    placeholder="Email or Username"
                  />

                  <ErrorMessage name="email" />
                </div>
                <div className="w-full my-6">
                  <Field
                    name="password"
                    type="password"
                    className="p-2 rounded shadow w-full text-black"
                    placeholder="password"
                  />
                  <ErrorMessage name="password" />
                </div>
                <div className="w-full my-8">
                  <button
                    type="submit"
                    className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-200 text-black"
                  >
                    {/* {isLoading ? (
                  <i className="fas fa-circle-notch fa-spin"></i>
                ) : ( */}
                    signup
                    {/* )} */}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
}
