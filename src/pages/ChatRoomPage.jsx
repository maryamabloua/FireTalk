import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage'
import { getCurrentUser } from '../utils/localStorage'
import Message from '../components/Message'
import ParticipantsList from '../components/ParticipantsList'
import '../styles/ChatRoomPage.css'

// Salon de discussion //

const ChatRoomPage = () => {
  const { id } = useParams() // Récupère l'ID du salon (à partir de l'URL)
  const [messages, setMessages] = useState([]) // État local pour les messages
  const [participants, setParticipants] = useState([])
  const currentUser = getCurrentUser()

  // Charger les messages et les participants depuis LocalStorage
  useEffect(() => {
    const storedMessages = getFromLocalStorage(`messages_${id}`) || [] // (clé : message_ID)
    const storedRooms = getFromLocalStorage('chatRooms') || []
    const currentRoom = storedRooms.find((room) => room.id === parseInt(id))

    setMessages(storedMessages)
    setParticipants(currentRoom?.participants || [])
  }, [id]) // Dépendance sur l'ID (fonction exécutée à chaque changement de salon)

  // Fonction pour ajouter un nouveau message au salon
  const handleAddMessage = (text) => {
    if (!text.trim()) return // Ignore messages vides

    const newMessage = {
      id: messages.length + 1,
      text,
      user: currentUser?.name, // Utilisateur connecté
      date: new Date().toISOString()
    }

    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages) // Ajoute nv message à la liste existante
    saveToLocalStorage(`messages_${id}`, updatedMessages) // Sauvegarde la liste mise à jour dans LocalStorage (clé : message_ID)
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