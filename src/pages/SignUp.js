import React, { useState } from "react";
import firebase from "../config/Firebase";
import {useHistory} from "react-router-dom"
export default function Login() {
  const [isLoading, seTisLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const history = useHistory();
  function handleForm(e) {
    if (isLoading) return;

    seTisLoading(true);
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(form.email,form.password)
      .then((res) => {
        
        seTisLoading(false);
        setError("");
        // history.push("/")
        history.replace("/")
        // setIsLoggedIn(true);
      })
      .catch((e) => {
        seTisLoading(false);
        setError(e.message);
        // alert(e.message)
      });
  }
  function handleInput(e) {
   setForm({...form,[e.target.name]:e.target.value})
  }
  // if (isLoggedIn ) {
  //   return <Redirect to="/" />
  // }
  return (
    <section className="flex justify-center">
      <div className="flex h-screen w-1/2 bg-gray-100">
        <div className="m-auto w-full text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-400">
          <form className="m-2 w-10/12" onClick={handleForm}>
            {error !== "" && <p className="text-center">{error}</p>}
            <h1 className="w-full text-4xl tracking-widest text-center my-6">
             Sign Up Here
            </h1>
            <div className="w-full my-6">
              <input
                type="email"
                className="p-2 rounded shadow w-full text-black"
                placeholder="Email or Username"
                name="email"
                value={form.email}
                onChange={handleInput}
              />
            </div>
            <div className="w-full my-6">
              <input
                type="password"
                className="p-2 rounded shadow w-full text-black"
                placeholder="password"
                name="password"
                value={form.password}
                onChange={handleInput}
              />
            </div>
            <div className="w-full my-8">
              <button
                type="submit"
                className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-200 text-black"
              >
                {isLoading ? (
                  <i className="fas fa-circle-notch fa-spin"></i>
                ) : (
                  "login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
