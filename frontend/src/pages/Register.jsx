import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Stats = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;
    if (formData.email !== "" && formData.password !== "") {
      // TODO: better form validation
      useAuth.authAction(formData, "register");
      setError("");
    } else {
      setError("You must enter an email and password.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen">
      <h1 className="text-3xl text-charcoal font-black">REGISTER</h1>
      <div className="w-full max-w-xl mx-auto rounded-xl bg-darkvanilla p-6">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 items-center m-2">
            <label htmlFor="email" className="w-1/3 text-right">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              className="p-2 bg-vanilla rounded-xl text-charcoal"
            />
          </div>
          <div className="flex gap-5 items-center m-2">
            <label htmlFor="password" className="w-1/3 text-right">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="p-2 bg-vanilla rounded-xl text-charcoal"
            />
          </div>
          <div className="flex gap-5 items-center m-2">
            <label htmlFor="password" className="w-1/3 text-right">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              onChange={handleChange}
              className="p-2 bg-vanilla rounded-xl text-charcoal"
            />
          </div>
          <button className="m-2 border border-charcoal text-charcoal py-2 px-6 rounded-xl hover:font-black cursor-pointer">
            Submit
          </button>
        </form>
        {error && <h1 className="text-raphaelred font-bold">{error}</h1>}
        <Link to="/login">Already have an account? Login here.</Link>
      </div>
    </div>
  );
};

export default Stats;
