import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Sidebar from "../components/Sidebar";

const AddStudent = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "darkMode"
  );

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(undefined);
  const [payment, setPayment] = useState("");

  const inputDivCss = "flex items-end my-8 text-lg";

  const clearForm = () => {
    setName("");
    setCourse("");
    setNumber("");
    setEmail("");
    setDateOfBirth("");
    setPayment("");
  };


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "darkMode");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log("It works");
  }, [darkMode]);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!course) {
      errors.course = "Course is required";
    }

    if (!number) {
      errors.number = "Number is required";
    } else if (!/^[0-9]+$/.test(number)) {
      errors.number = "Number must contain only digits";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      clearForm();
      // Submit Logic
      console.log("Form submitted successfully");
    } else {
      console.log("Form has errors");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "darkMode");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log("It works");
  }, [darkMode]);

  return (
    <div
      className={
        darkMode
          ? "bg-slate-800 flex flex-col grow"
          : "bg-blue-700 flex flex-col grow"
      }
    >
      <AdminHeader setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="flex min-h-screen">
        <div className="flex justify-between w-full">
          <Sidebar mode={darkMode} />
          <main
            className={
              darkMode
                ? "bg-slate-700 text-white grow p-4 lg:p-6 flex justify-center items-center"
                : "bg-white text-white grow p-4 lg:p-6 flex justify-center items-center"
            }
          >
            <form
              onSubmit={handleSubmit}
              className= { darkMode ? "space-y-4 bg-slate-800 rounded-2xl grow max-w-[360px] py-4 px-5 md:max-w-[560px]" : "space-y-4 bg-blue-700 text-white rounded-2xl grow max-w-[360px] py-4 px-5 md:max-w-[560px]"}
            >
              <h3 className="text-2xl text-center admin">Register Student</h3>
              <div className={inputDivCss}>
                <label
                  htmlFor="name"
                  className="block font-medium mr-3"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-slate-100 px-2 py-1 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter name"
                />
              </div>
              {errors.name && <p className="text-red-500">{errors.name}</p>}
              <div className={inputDivCss}>
                <label
                  htmlFor="course"
                  className="block font-medium mr-3"
                >
                  Course:
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-slate-100 px-2 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter course"
                />
              </div>
              {errors.course && <p className="text-red-500">{errors.course}</p>}
              <div className={inputDivCss}>
                <label
                  htmlFor="number"
                  className="block font-medium mr-3"
                >
                  Number:
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-slate-100 px-2 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter number"
                />
              </div>
              {errors.number && <p className="text-red-500">{errors.number}</p>}
              <div className={inputDivCss}>
                <label
                  htmlFor="email"
                  className="block font-medium mr-3"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-slate-100 px-2 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter email"
                />
              </div>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <div className={inputDivCss}>
                <label htmlFor="dob" className="block font-medium mr-3 min-w-[120px] text-left">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={dateOfBirth}
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-slate-100 px-2 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              {errors.dateOfBirth && (
                <p className="text-red-500">{errors.dateOfBirth}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payment"
                  name="payment"
                  value={payment}
                  onChange={(e) => {
                    setPayment(e.target.value);
                  }}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="payment"
                  className="ml-2 block font-medium"
                >
                  Payment Completed
                </label>
              </div>
              {/* <button onClick={clearForm}>Clear form</button> */}
              <button
                type="submit"
                className={darkMode ? "mt-4 w-full bg-slate-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" : "mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}
              >
                Submit
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
