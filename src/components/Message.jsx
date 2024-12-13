import '../styles/Message.css'

const Message = ({ date, user, text }) => {
  return (
    <div className="message">
      <span>
        {new Date(date).toLocaleString()} - <strong>{user}</strong>: {text}
      </span>
    </div>
  )
}

export default Message
