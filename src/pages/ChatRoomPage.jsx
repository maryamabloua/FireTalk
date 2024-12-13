import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage'
import { getCurrentUser } from '../utils/localStorage'
import Message from '../components/Message'
import ParticipantsList from '../components/ParticipantsList'
import '../styles/ChatRoomPage.css'

const ChatRoomPage = () => {
  const { id } = useParams() // Récupère l'ID du salon
  const [messages, setMessages] = useState([])
  const [participants, setParticipants] = useState([])
  const currentUser = getCurrentUser()
  const navigate = useNavigate()

  // Charger les messages et les participants depuis LocalStorage
  useEffect(() => {
    const storedMessages = getFromLocalStorage(`messages_${id}`) || []
    const storedRooms = getFromLocalStorage('chatRooms') || []
    const currentRoom = storedRooms.find((room) => room.id === parseInt(id))

    setMessages(storedMessages)
    setParticipants(currentRoom?.participants || [])

    // Ajouter l'utilisateur courant aux participants
    if (currentRoom && currentUser && !currentRoom.participants.includes(currentUser.name)) { 
      currentRoom.participants.push(currentUser.name)
      saveToLocalStorage('chatRooms', storedRooms)
      setParticipants(currentRoom.participants)
    }

    // Retirer l'utilisateur courant des participants lors de la sortie
    return () => {
      if (currentRoom && currentUser) {
        currentRoom.participants = currentRoom.participants.filter(
          (participant) => participant !== currentUser.name
        )
        saveToLocalStorage('chatRooms', storedRooms)
      }
    }
  }, [id, currentUser?.name, navigate]) // Dépendance sur l'ID, l'utilisateur et la navigation
  // currentUser?.name évite boucle infini =/= currentUser (propriété plus stable)

  // Fonction pour ajouter un nouveau message
  const handleAddMessage = (text) => {
    if (!text.trim()) return // Ignore les messages vides

    const newMessage = {
      id: messages.length + 1,
      text,
      user: currentUser?.name, // Utilisateur connecté
      date: new Date().toISOString()
    }

    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages) // Ajoute le nouveau message à l'état
    saveToLocalStorage(`messages_${id}`, updatedMessages) // Sauvegarde dans le LocalStorage
  }

  return (
    <div className="chat-room-container">
      {/* Section des messages */}
      <div className="chat-section">
        <div className="messages">
          {messages.map((message) => (
            <Message
              key={message.id}
              date={message.date}
              user={message.user}
              text={message.text}
            />
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleAddMessage(e.target.elements.message.value)
            e.target.reset()
          }}
        >
          <input type="text" name="message" placeholder="Écrivez un message" />
          <button type="submit">Envoyer</button>
        </form>
      </div>

      {/* Section des participants */}
      <ParticipantsList participants={participants} />
    </div>
  )
}

export default ChatRoomPage
