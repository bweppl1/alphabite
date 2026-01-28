import { useState, useEffect } from "react";

const Stats = () => {
	const [username, setUsernae] = useState("")
	const [password, setPassword] = useState("")
	const [formData, setFormData] = useState([])

 const handleSubmit = () > {
	setFormData([username, password])
}

 return (
    <div className="flex flex-col bg-vanilla p-2 text-center min-h-screen">
      <h1 className="text-3xl text-charcoal font-black">LOGIN</h1>
      <div className="w-full max-w-xl mx-auto rounded-xl bg-darkvanilla p-6 flex flex-col">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <inut
              type="text"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Stats;
