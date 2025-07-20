import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Travihara.svg";

function AdminLogin({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Login Attempted", username, password);

    // Clear previous error
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);
      if (response.status === 200) {
        setIsAuthenticated(true); // Update the authentication state in parent
        // console.log("Authentication Successful");
        navigate("/dashboard"); 
      } else {
        setError(
          data && data.error
            ? data.error.message
            : "Authentication failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="h-screen bg-neutral-200 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="rounded-lg bg-white shadow-lg p-8">
          <div className="text-center mb-6">
            <img className="mx-auto w-40" src={Logo} alt="logo" />
            <h4 className="mt-4 text-lg font-semibold">
              Welcome to Admin Portal
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            {error && (
              <div className="mb-4 text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 text-white bg-gradient-to-r from-[#ee7724] to-[#b44593] rounded-md hover:opacity-90"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
