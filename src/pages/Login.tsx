import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FramerMotion } from "../components/page-wrapper";

interface InputElement {
  name: string;
  value: string;
}

interface FormLogin {
  username: string; 
  password: string;
}

const Login:React.FC = () => {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState<FormLogin>({ username: "", password: "" });

  async function handleLogin(event: React.SyntheticEvent): Promise<void> {
    event.preventDefault();
    await Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/overview");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>):void {
    const { name, value }:InputElement = event.target;
    setFormLogin({ ...formLogin, [name]: value });
  }

  return (
    <>
      <FramerMotion>
        <div className="login-page">
          <div className="login-form">
            <div className="login-logo">
              <b className="fs-2 text-danger">SMART</b> Industry 4.0
            </div>
            <small className="d-block text-center text-light mt-3">
              Sign in with your session
            </small>
            <form onSubmit={handleLogin} className="mt-5">
              <div className="input-box w-100 mb-3">
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  required
                />
                <span>Username</span>
              </div>
              <div className="input-box mb-3">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <span>Password</span>
              </div>
              <button type="submit" className="w-100 btn-login py-2 mt-2">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </FramerMotion>
    </>
  );
}

export default Login;
