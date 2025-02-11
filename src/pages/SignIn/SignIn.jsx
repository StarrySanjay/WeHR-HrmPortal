import BannerImg from "../../assets/RightBanner.svg";
import Logo from "../../assets/Logo.svg";
import breifcase from "../../assets/briefcase.svg";
import lock from "../../assets/lock.svg";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (id === "admin" && password === "admin@hrm") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credintials");
      alert("Use :  admin & admin@hrm");
    }
  };

  return (
    <div className="signIn-page">
      <div className="left-wrapper">
        <div className="logo-wrapper">
          <img src={Logo} alt="" />
          <h2>Your Logo</h2>
        </div>
        <div className="signIn-wrapper">
          <h1>Sign Into</h1>
          <h2>Your Account</h2>
          <div className="input-container">
            <img src={breifcase} alt="briefcase" className="input-icon" />
            <input
              type="text"
              placeholder="Company ID"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="input-container">
            <img src={lock} alt="lock" className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <button className="signIn-btn" onClick={handleClick}>
            Sign in
          </button>
        </div>
      </div>
      <div className="right-wrapper">
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default SignIn;
