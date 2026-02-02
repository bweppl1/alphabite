import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Stats = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      // TODO: better form validation
      auth.authAction(formData, "login");
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
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen gap-5 pt-16">
      <h1 className="text-3xl md:text-5xl text-charcoal font-black">LOGIN</h1>
      <div className="w-full max-w-md mx-auto rounded-xl bg-darkvanilla p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="text-left p-2 font-bold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            className="p-2 bg-vanilla rounded-xl text-charcoal"
          />
          <label htmlFor="password" className="text-left p-2 font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="p-2 bg-vanilla rounded-xl text-charcoal"
          />
          <button className="m-2 bg-lgreen text-charcoal py-2 px-6 rounded-xl hover:font-black cursor-pointer">
            Submit
          </button>
        </form>
        {error && <h1 className="text-raphaelred font-bold">{error}</h1>}
        No account?{" "}
        <Link to="/register" className="text-raphaelred hover:font-bold">
          Register here.
        </Link>
      </div>
    </div>
  );
};

export default Stats;
