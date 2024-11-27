import { useContext, useEffect, useRef, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../contexts/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../contexts/SocketContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Chat({ chats }) {
  const [chat, setChat] = useState(null); // Holds the active chat
  const { currentUser } = useContext(AuthContext); // Current user details
  const { socket } = useContext(SocketContext); // WebSocket context
  const messageEndRef = useRef(); // To scroll to the latest message
  const decrease = useNotificationStore((state) => state.decrease); // For updating notifications

  // Scroll to the latest message when `chat` or its messages change
  // useEffect(() => {
  //   messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chat]);

  // Fetch and open a chat
  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest(`/chats/${id}`);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease(); // Decrease notification count if chat is unread
      }
      setChat({ ...res.data, receiver }); // Set active chat with receiver details
    } catch (err) {
      console.error("Error opening chat:", err);
    }
  };

  // Handle sending a new message
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text"); // Get message text

    if (!text) return; // Prevent empty messages
    try {
      const res = await apiRequest.post(`/messages/${chat.id}`, { text });
      const newMessage = res.data;

      setChat((prev) => ({
        ...prev,
        messages: [...prev.messages, newMessage], // Add new message to state
      }));
      e.target.reset(); // Clear the input field

      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: newMessage, // Emit new message via WebSocket
      });
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  // Real-time message reception through WebSocket
  useEffect(() => {
    const readChat = async () => {
      try {
        if (chat) await apiRequest.put(`/chats/read/${chat.id}`);
      } catch (err) {
        console.error("Error marking chat as read:", err);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({
            ...prev,
            messages: [...prev.messages, data], // Add received message
          }));
          readChat(); // Mark chat as read
          messageEndRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to the latest message
        }
      });
    }

    return () => {
      socket.off("getMessage"); // Cleanup listener
    };
  }, [socket, chat]);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.length > 0 ? (
          chats.map((c, index) => (
            <div
              className="message"
              key={c.id || index} // Unique key for each chat
              style={{
                backgroundColor:
                  c.seenBy.includes(currentUser.id) || chat?.id === c.id
                    ? "white"
                    : "#fecd514e", // Highlight unread chats
              }}
              onClick={() => handleOpenChat(c.id, c.receiver)} // Open chat on click
            >
              <img src={c.receiver.avatar || "/emptyPfp.jpg"} alt="" />
              <span>{c.receiver.username}</span>
              <p>{c.lastMessage}</p>
            </div>
          ))
        ) : (
          <div className="no-chats">
            <p>No chats available. Start a new conversation!</p>
          </div>
        )}
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver.avatar || "emptyPfp.jpg"} alt="" />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>

          <div className="center">
            {chat.messages.map((message, index) => (
              <div
                className="chatMessage"
                key={message.id || `${message.createdAt}-${index}`} // Unique key for messages
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start", // Align messages based on sender
                  textAlign:
                    message.userId === currentUser.id ? "right" : "left", // Align text
                }}
              >
                <p>{message.text || "Message content unavailable"}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div> {/* Scroll to this element */}
          </div>

          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text" placeholder="Type a message"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
