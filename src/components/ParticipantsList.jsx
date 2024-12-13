import '../styles/ParticipantsList.css'

const ParticipantsList = ({ participants }) => {
  return (
    <div className="participants-list">
      <h3>Participants</h3>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))}
      </ul>
    </div>
  )
}

export default ParticipantsList
