import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock signup logic
    localStorage.setItem("user", JSON.stringify({ name, email }));
    alert("Signup successful! Please login.");
    navigate("/"); // Redirect to Login Page
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-700">
      <form onSubmit={handleSignup} className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded bg-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded bg-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-3 px-4 w-full rounded-lg">
          Sign Up
        </button>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account? <a href="/" className="text-blue-500">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
