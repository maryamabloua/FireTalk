import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFromLocalStorage, saveToLocalStorage, initializeDefaultData } from '../utils/localStorage'
import RoomCard from '../components/RoomCard'
import '../styles/ChatRoomsPage.css'

// Liste des salons de discussion //

const ChatRoomsPage = () => {
  const [chatRooms, setChatRooms] = useState([]) // État local pour les salons
  const [newRoomName, setNewRoomName] = useState('')
  const [newRoomDescription, setNewRoomDescription] = useState('')
  const navigate = useNavigate() // Hook pour naviguer entre les pages

  // Charger les salons depuis LocalStorage
  useEffect(() => {
    initializeDefaultData() // Initialise les données par défaut si nécessaire
    const storedRooms = getFromLocalStorage('chatRooms') || []
    setChatRooms(storedRooms)
  }, [])

  // Fonction pour ajouter un nouveau salon
  const handleCreateRoom = () => {
    if (!newRoomName.trim() || !newRoomDescription.trim()) {
      alert('Veuillez remplir le nom et la description du salon')
      return
    }

    const newRoom = {
      id: chatRooms.length + 1,
      name: newRoomName,
      description: newRoomDescription,
      participants: [],
    }

    const updatedRooms = [...chatRooms, newRoom]
    setChatRooms(updatedRooms)
    saveToLocalStorage('chatRooms', updatedRooms)

    setNewRoomName('')
    setNewRoomDescription('')
  }

  // Naviguer vers la page du salon avec l'ID spécifié
  const handleRoomClick = (id) => {
    navigate(`/chat-room/${id}`)
  }

  return (
    <div className="chat-rooms">
      {/* Liste des salons */}
      <h1>Salons disponibles</h1>
      <div className="rooms-list">
        {chatRooms.map((room) => (
          <RoomCard
            key={room.id}
            id={room.id}
            name={room.name}
            description={room.description}
            participants={room.participants.length}
            onClick={handleRoomClick}
          />
        ))}
      </div>

      <br />

      {/* Formulaire de création de salon */}
      <div className="create-room-form">
        <h2>Créer un nouveau salon</h2>
        <input
          type="text"
          placeholder="Nom du salon"
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
        />
        <textarea
          placeholder="Description du salon"
          value={newRoomDescription}
          onChange={(e) => setNewRoomDescription(e.target.value)}
        ></textarea>
        <button className="create-room-button" onClick={handleCreateRoom}>
          Créer un salon
        </button>
      </div>
    </div>
  )
}

export default ChatRoomsPage
