import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {  // ✅ Accepting `onLogin` from `App.jsx`
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // ✅ Clear previous errors

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.status === 200) {
        localStorage.setItem("userId", res.data.userId); // ✅ Store user session
        onLogin(); // ✅ Call function from `App.jsx` to update login state
        navigate("/dashboard"); // ✅ Redirect to Dashboard
      }
    } catch (err) {
      if (!err.response) {
        setError("Server is not responding. Please try again later.");
      } else {
        setError(err.response.data.message || "Login failed!");
      }
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Student Portal Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
