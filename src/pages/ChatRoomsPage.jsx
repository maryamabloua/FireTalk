import '../styles/ChatRoomsPage.css'

const ChatRoomsPage = () => {
  // Données statiques pour les salons (à remplacer plus tard par Firestore)
  const chatRooms = [
    { id: 1, name: "Général", description: "Discussions générales", participants: 12 },
    { id: 2, name: "Gaming", description: "Discussions sur les jeux", participants: 15 },
    { id: 3, name: "Informatique", description: "Discussions sur l'informatique", participants: 7 },
  ]

  return (
    <div className="chat-rooms">
      <h1>Salons disponibles</h1>
      <div className="rooms-list">
        {chatRooms.map((room) => (
          <div key={room.id} className="room-card">
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <span>{room.participants} participants</span>
          </div>
        ))}
      </div><br/>
      <button className="create-room-button">Créer un salon</button>
    </div>
  )
}

export default ChatRoomsPage
