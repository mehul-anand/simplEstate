import React, { useContext } from "react";
import "./homePage.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChatIcon from "../../../public/Icons/ChatIcon";
import MoneyIcon from "../../../public/Icons/MoneyIcon";
import Typewriter from "typewriter-effect";
import { AuthContext } from "../../contexts/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Simple Estate</h1>

          <div className="desc">
            <Typewriter
              options={{
                strings: ["Buying", "Selling", "Renting"],
                autoStart: true,
                loop: true,
                cursor: "_"
              }}
            />
            <p>real estate made easy</p>
          </div>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <div className="icon">
                <MoneyIcon />
              </div>
              <h2>Price Prediction</h2>
            </div>
            <div className="box">
              <div className="icon">
                <ChatIcon />
              </div>
              <h2>Real time chat</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bgThree.png" alt="bg-image" />
      </div>
    </div>
  );
}

export default HomePage;
