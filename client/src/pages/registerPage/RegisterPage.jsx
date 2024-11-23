import "./registerPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../contexts/AuthContext";

function RegisterPage() {
  const [errorMessage,setErrorMessage] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {updateUser} = useContext(AuthContext)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setErrorMessage("")
    setIsLoading(true)
    const formData = new FormData(e.target)
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")

    try {
      console.log("try")
      const res = await apiRequest.post("auth/register",{username,email,password}) 
      updateUser(res.data)
      navigate("/login")
    } catch (error) {
      console.log(`error :${error.response.data.message}`)
      setErrorMessage(error.response.data.message)
    }finally{
      setIsLoading(false)
    }

  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input required name="username" type="text" placeholder="Username" />
          <input required name="email" type="text" placeholder="Email" />
          <input required name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {errorMessage && <span>{errorMessage}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bgThree.png" alt="" />
      </div>
    </div>
  );
}

export default RegisterPage;