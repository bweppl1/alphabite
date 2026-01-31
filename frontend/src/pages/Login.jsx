import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Stats = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState([]);

  const handleSubmit = () => {
    setFormData([email, password]);
  };

  const handleChange = (e) => {
    e.preventDefault;
  };

  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen">
      <h1 className="text-3xl text-charcoal font-black">LOGIN</h1>
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
          <button className="m-2 border-1 border-charcoal text-charcoal py-2 px-6 rounded-xl hover:font-black cursor-pointer">
            Submit
          </button>
        </form>
        <Link to="/register">No account? Register here.</Link>
      </div>
    </div>
  );
};

export default Stats;
