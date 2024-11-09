import { useState } from "react";
import "./loginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("")
    setIsLoading(true)
    const formData = new FormData(e.target);
    const username = formData.get("username");
const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
    finally{
        setIsLoading(false)
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {errorMessage && <span>{errorMessage}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bgThree.png" alt="" />
      </div>
    </div>
  );
}

export default LoginPage;
