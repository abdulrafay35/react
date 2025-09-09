import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif'




export function ChatInput({ chatMessages, setChatMessages }) {

      const [inputText, setInputText] = useState("");


      function saveInputText(event) {
        setInputText(event.target.value);
      }

      function sendMessage() {

        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
          }
        ]

        setChatMessages(newChatMessages);



        const response = Chatbot.getResponse(inputText);

        const tempId = crypto.randomUUID();

        const intervals = [100,200,300,400];
        const randomInterval = intervals[Math.floor(Math.random() * intervals.length)];

        const tempChatMessages = [
          ...newChatMessages,
          {
            message: <img src={LoadingSpinner} className="loader" />,
            sender: "robot",
            id: tempId
          }
        ]

        setChatMessages(tempChatMessages);

        setTimeout(() => {
          const updatedMessages = tempChatMessages.map(msg =>
            msg.id === tempId
              ? { ...msg, message: response } // replace loading with response
              : msg
          );
          setChatMessages(updatedMessages);
        }, randomInterval)

        setInputText("");
        
      }

      return (
        <div className="chat-input-container">
          <input
            placeholder="Send a message to Chatbot"
            onChange={saveInputText}
            value={inputText}
            onKeyDown={(e) => {e.key==="Enter" && sendMessage() }}
            className="chat-input"
          />
          <button
            onClick={sendMessage}
            className="send-button">Send</button>
        </div>
      )
    }
