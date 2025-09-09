import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'

export function ChatMessage({ sender, message }) {
    return (
        <div className={sender === "robot" ? "chat-message-robot" : "chat-message-user"}>
            {sender === "robot" && (
                <img src={RobotProfileImage} />
            )}
            {typeof message === "string" ? (
                <p>{message}</p>
            ) : (
                message
            )}
            {sender === "user" && (
                <img src={UserProfileImage} />
            )}
        </div>
    )
}