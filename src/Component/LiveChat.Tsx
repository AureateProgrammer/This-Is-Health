
export function ChatRoom() {
    return( 
        <div className="chat-room">
            <div className="chat-room-copy">
                <h1>Chat Room</h1>
                <p>This is a chat room where you can come and chat with others.</p>
            </div>
            <div className="chat-box">
                <input type="text" placeholder="Type your message here..." />
                <button type="button">Send</button>
            </div>
        </div>
    ) }

export default ChatRoom