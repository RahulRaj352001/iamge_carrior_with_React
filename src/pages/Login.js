import React from "react";

export default function Login() {
    function handleForm(e) {
        e.preventDefault();
        console.log("done");
    }
  return (
    <section className="flex justify-center">
      <div className="flex h-screen w-1/2 bg-gray-100">
        <div className="m-auto w-full text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-400">
          <form className="m-2 w-10/12" onClick={handleForm}>
            <h1 className="w-full text-4xl tracking-widest text-center my-6">
              Login
            </h1>
            <div className="w-full my-6">
              <input
                type="email"
                className="p-2 rounded shadow w-full text-black"
                placeholder="Email or Username"
                name="email"
              />
            </div>
            <div className="w-full my-6">
              <input
                type="password"
                className="p-2 rounded shadow w-full text-black"
                placeholder="password"
                name="password"
              />
            </div>
            <div className="w-full my-8">
              <button
                type="submit"
                className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-200 text-black"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
