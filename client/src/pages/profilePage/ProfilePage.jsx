import React, { useState } from 'react'
import "./profilePage.scss"
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'
import apiRequest from '../../lib/apiRequest'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
    const navigate = useNavigate()
    const [errorMessage,setErrorMessage] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const handleLogout = async()=>{
        setIsLoading(true)
        setErrorMessage("")
        try {
            const res = apiRequest.post("/auth/logout")
            localStorage.removeItem("user")
            navigate("/")
        } catch (err) {
            setErrorMessage(err)
        }finally{
            setIsLoading(false)
        }

    }
  return (
    <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User info</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>
                        Avatar : <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user-img" />
                    </span>
                    <span>Username : <b>User</b></span>
                    <span>E-mail address<b>abc@gmail.com</b></span>
                    <button disabled={isLoading} onClick={handleLogout}>Logout</button>
                    {errorMessage && <span className='errorMessage'>{errorMessage}</span>}
                </div>
                
                <div className="title">
                    <h1>My List</h1>
                    <button>New Post</button>
                </div>
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List/>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage