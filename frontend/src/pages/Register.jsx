import { useState, useEffect } from "react";

const Stats = () => {
  const [username, setUsernae] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState([]);

  const handleSubmit = () => {
    setFormData([username, password]);
  };

  const handleChange = (e) => {
    e.preventDefault;
  };

  return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen">
      <h1 className="text-3xl text-charcoal font-black">REGISTER</h1>
      <div className="w-full max-w-xl mx-auto rounded-xl bg-darkvanilla p-6">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 items-center m-2">
            <label htmlFor="username" className="w-1/3 text-right">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              className="p-2 bg-vanilla rounded-xl text-charcoal"
            />
          </div>
          <div className="flex gap-5 items-center m-2">
            <label htmlFor="password" className="w-1/3 text-right">
              Password:
            </label>
            <input
              type="text"
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
              type="text"
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
      </div>
    </div>
  );
};

export default Stats;
