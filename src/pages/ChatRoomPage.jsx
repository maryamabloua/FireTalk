import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Salon de discussion individuel //

const ChatRoomPage = () => {
    // Récupère l'ID du salon (à partir de l'URL)
    const { id } = useParams()

    // useState pour stocker les messages du salon
    const [messages, setMessages] = useState([
        { id: 1, text: 'Bienvenue dans le salon !', user: 'Maryam', date: '2024-12-06T14:00:00Z' },
        { id: 2, text: 'Salut tout le monde !', user: 'Victor', date: '2024-12-06T14:05:00Z' },
    ])

    // Fonction pour ajouter un message
    const handleAddMessage = (text) => {
        if (!text.trim()) { // Vérifie que le texte non vide ou composé uniquement d'espaces
            return // Ne fait rien si invalide
        }
        const newMessage = {
            id: messages.length + 1,
            text,
            user: 'Moi',
            date: new Date().toISOString(),
        }
        setMessages([...messages, newMessage]) // MaJ de la liste des messages
    }

    // Effet pour simuler le chargement des messages du salon (dans la console) -> useEffect déclenché à chaque fois que l'ID du salon change (URL)
    useEffect(() => {
        console.log(`Chargement des messages pour le salon ID: ${id}`)
        // Ici on pourra ajouter la logique pour charger les messages spécifiques à ce salon
    }, [id]) // Dépendance sur id, sinon useEffect exécuté à chaque rendu (boucles infinies)

    return (
        <div>
            <h1>Salon {id}</h1>

            {/* Liste des messages */}
            <div>
                {messages.map((message) => (
                    <div key={message.id}>
                        <span>{new Date(message.date).toLocaleString()} - <strong>{message.user}</strong>: {message.text}</span>  
                    </div>
                ))}
            </div>

            {/* Formulaire pour envoyer un message */}
            <form
                onSubmit={(e) => {
                    e.preventDefault() // Empêche de recharger la page lors de la soumission
                    handleAddMessage(e.target.elements.message.value)
                    e.target.reset()
                }}
            >
                <input type="text" name="message" placeholder="Envoyer un message" />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default ChatRoomPage
