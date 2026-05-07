
export function LiveChatBox() {
    return( 
        <div className="live-chat">
            <div className="live-chat-header">Live Chat</div>

            <div className="live-chat-messages">
                <div className="message">
                    <p><strong>User1:</strong> Hi, how are you?</p>
                </div>
                <div className="message">
                    <p><strong>User2:</strong> I'm doing well, thanks! How about you?</p>
                </div>
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
            </div>
        </div>
    ) }

export default LiveChatBox