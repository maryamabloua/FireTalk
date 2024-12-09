import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import WelcomeBanner from '../components/WelcomeBanner'
import '../styles/ChatRoomsPage.css'

// Liste des salons de discussion //

const ChatRoomsPage = () => {
  const [chatRooms, setChatRooms] = useState([]) // État local pour les salons
  const [newRoomName, setNewRoomName] = useState('')
  const [newRoomDescription, setNewRoomDescription] = useState('')
  const navigate = useNavigate() // Hook pour naviguer entre les pages

  // Initialiser les salons dans LocalStorage si nécessaire
  const initializeChatRooms = () => {

    // Définir des salons par défaut : seront ajoutés si aucune donnée présente dans LocalStorage
    const defaultRooms = [
      { id: 1, name: "Général", description: "Discussions générales", participants: 12 },
      { id: 2, name: "Gaming", description: "Discussions sur les jeux", participants: 15 },
      { id: 3, name: "Informatique", description: "Discussions sur l'informatique", participants: 7 },
    ]

    // Vérifier si des salons existent déjà dans LocalStorage
    const storedRooms = JSON.parse(localStorage.getItem('chatRooms')) || defaultRooms // (clé : chatRooms pour récupérer salons stockés)

    const defaultMessagesForGeneral = [
      { id: 1, text: 'Bienvenue dans le salon Général !', user: 'Maryam', date: '2024-12-06T10:00:00Z' },
      { id: 2, text: 'Salut tout le monde !', user: 'Victor', date: '2024-12-06T10:05:00Z' },
    ]

    // Vérifie si des messages existent déjà pour le salon "Général" (ID 1)
    if (!localStorage.getItem('messages_1')) {
      localStorage.setItem('messages_1', JSON.stringify(defaultMessagesForGeneral))
    }

    // Sauvegarder les salons par défaut dans LocalStorage si aucune donnée n'existe
    if (!localStorage.getItem('chatRooms')) {
      localStorage.setItem('chatRooms', JSON.stringify(defaultRooms))
    }

    // Mettre à jour l'état local des salons avec les données récupérées (ou par défaut)
    setChatRooms(storedRooms)
  }

  // Charger les salons depuis LocalStorage au montage
  useEffect(() => {
    initializeChatRooms()
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
      participants: 0, // Pas de participants pour le moment
    }

    const updatedRooms = [...chatRooms, newRoom]
    setChatRooms(updatedRooms)
    localStorage.setItem('chatRooms', JSON.stringify(updatedRooms)) // Sauvegarde les salons

    setNewRoomName('')
    setNewRoomDescription('')
  }

  // Naviguer vers la page du salon avec l'ID spécifié
  const handleRoomClick = (id) => {
    navigate(`/chat-room/${id}`)
  }

  return (
    <div className="chat-rooms">
      <div className="chat-rooms">
        <WelcomeBanner />

        {/* Liste des salons */}
        <h1>Salons disponibles</h1>
        <div className="rooms-list">
          {chatRooms.map((room) => (
            <div
              key={room.id}
              className="room-card"
              onClick={() => handleRoomClick(room.id)}
              style={{ cursor: 'pointer' }}
            >
              <h2>{room.name}</h2>
              <p>{room.description}</p>
              <span>{room.participants} participants</span>
            </div>
          ))}
        </div>
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
