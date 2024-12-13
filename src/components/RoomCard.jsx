import '../styles/RoomCard.css'

const RoomCard = ({ id, name, description, participants, onClick }) => {
  return (
    <div className="room-card" onClick={() => onClick(id)} style={{ cursor: 'pointer' }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{participants} participants</span>
    </div>
  )
}

export default RoomCard
