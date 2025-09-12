import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";

function Signin() {
  const usernameref = useRef();
  const passwordref = useRef();
  const [usernameerror, setUsernameError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const navigate = useNavigate();

  const loginsuccess = (e) => {
    e.preventDefault();
    const username = usernameref.current.value.trim();
    const password = passwordref.current.value.trim();

    if (!username) {
      setUsernameError("Please enter your username");
      return;
    } else setUsernameError("");

    if (!password) {
      setPasswordError("Please enter your password");
      return;
    } else setPasswordError("");

    if (username === "Mani" && password === "mani") {
      alert("Login Success ✅");
      navigate("/cart");
    } else {
      alert("Invalid username or password ❌");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Glassmorphism Card */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "16px",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          color: "white",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>Login</h2>
        <p style={{ marginBottom: "20px", color: "#e5e5e5" }}>
          Welcome back! Please login to your account
        </p>

        <form onSubmit={loginsuccess} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Username */}
          <div style={{ position: "relative" }}>
            <User style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "#ccc" }} />
            <input
              type="text"
              ref={usernameref}
              placeholder="User Name"
              style={{
                width: "100%",
                padding: "12px 12px 12px 36px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.1)",
                color: "white",
                outline: "none",
              }}
            />
            {usernameerror && <p style={{ color: "red", fontSize: "12px" }}>{usernameerror}</p>}
          </div>

          {/* Password */}
          <div style={{ position: "relative" }}>
            <Lock style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "#ccc" }} />
            <input
              type="password"
              ref={passwordref}
              placeholder="Password"
              style={{
                width: "100%",
                padding: "12px 12px 12px 36px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.1)",
                color: "white",
                outline: "none",
              }}
            />
            {passworderror && <p style={{ color: "red", fontSize: "12px" }}>{passworderror}</p>}
          </div>

          {/* Remember Me */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#e5e5e5" }}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              background: "linear-gradient(to right, #16a34a, #15803d)",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p style={{ marginTop: "20px", textAlign: "center", color: "#e5e5e5", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <a href="/signup" style={{ fontWeight: "bold", color: "white" }}>
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signin;
