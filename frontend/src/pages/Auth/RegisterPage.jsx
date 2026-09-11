import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}