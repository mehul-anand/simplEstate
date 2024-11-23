import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../contexts/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      console.log("try")
      const res = await apiRequest.put(`/user/${currentUser.id}`, {
        username,
        email,
        password,
        avatar:avatar[0]
      });
      console.log(`res :${res}`)
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log("catch")
      console.log(err)
      setError(err.response.data.message);
    }finally{
      console.log(`current user : ${currentUser.username}`)
      setIsLoading(false)
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button disabled={isLoading}>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || currentUser.avatar || "/emptyPfp.jpg"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "dkobquufs",
            uploadPreset: "simplEstate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;