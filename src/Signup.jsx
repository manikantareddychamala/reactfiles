import React from "react";
import { useForm } from "react-hook-form";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { register as registerUser } from "./store"; 
import { useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    console.log("Signup Data:", data);
    alert("🎉 Signup Successful!");
    navigate("/Signin");
  };

  return (
    <div className="signup-page">
      <div className="signup-box fade-in">
        
        {/* ✅ Fresh Mart Logo */}
        <img
          src="Images/picks/Supermarket logo template _ Premium Vector (1).jpg"   // put your logo inside public/Images
          alt="Fresh Mart Logo"
          className="signup-logo"
        />

        <h2>Create Account</h2>
        <p className="subtitle">Join Fresh Mart and enjoy exclusive offers 🌿</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <input
            type="text"
            placeholder="👤 Username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && <span className="error">{errors.username.message}</span>}

          {/* Email */}
          <input
            type="email"
            placeholder="📧 Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}

          {/* Password */}
          <input
            type="password"
            placeholder="🔒 Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="✅ Confirm Password"
            {...register("confirmPassword", {
              validate: (value) => value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}

          {/* Submit */}
          <button type="submit">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
