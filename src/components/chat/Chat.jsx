import React, { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chatOpen, setChatOpen] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user-img"
          />
          <span>Sender</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
        </div>{" "}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user-img"
          />
          <span>Sender</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
        </div>{" "}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user-img"
          />
          <span>Sender</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
        </div>{" "}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user-img"
          />
          <span>Sender</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user-img"
          />
          <span>Sender</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user-img"
          />
          <span>Sender</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user-img"
          />
          <span>Sender</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user-img"
          />
          <span>Sender</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
        </div>
      </div>
      {chatOpen && (
        <div className="chatSection">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="user-img"
              />
              <p>Username</p>
            </div>
            <span className="closeBtn" onClick={()=>setChatOpen(false)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <span>1 Hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="user-message"></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
