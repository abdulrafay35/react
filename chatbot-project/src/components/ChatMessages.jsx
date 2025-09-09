import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';

function ChatMessages({ chatMessages }) {

    const chatMessagesRef = useRef(null);

    useEffect(() => {
        const containerElm = chatMessagesRef.current;
        if (containerElm) {
            containerElm.scrollTop = containerElm.scrollHeight;
        }

    }, [chatMessages])

    return (
        <div
            className="chat-messages"
            ref={chatMessagesRef}
        >
            {chatMessages.length === 0 ? <p className='no-chat-messages'>Welcome to the chatbot project! Send a message using the textbox.</p> : chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                )
            })}
        </div>
    )

}

export default ChatMessages;