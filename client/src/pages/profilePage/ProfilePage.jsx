import React, { useCallback, useContext, useEffect, useState } from "react";
import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser, currentUser } = useContext(AuthContext);
  const handleLogout = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User info</h1>
            <Link to={"/profile/update"}>
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar :{" "}
              <img
                src={currentUser.avatar || "./emptyPfp.jpg"}
                alt="user-img"
              />
            </span>
            <span>
              Username : <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail address<b>{currentUser.email}</b>
            </span>
            <button disabled={isLoading} onClick={handleLogout}>
              Logout
            </button>
            {errorMessage && (
              <span className="errorMessage">{errorMessage}</span>
            )}
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>New Post</button>
          </div>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
