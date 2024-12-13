import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, setCurrentUser } from '../utils/localStorage'
import '../styles/LoginPage.css'

const LoginPage = () => {
  const [username, setUsername] = useState('') // État pour le nom d'utilisateur
  const navigate = useNavigate() // Hook pour rediriger après connexion

  useEffect(() => {
    const currentUser = getCurrentUser();
    console.log('Utilisateur actuel dans LoginPage:', currentUser) // Log pour déboguer
    if (currentUser) {
      navigate('/chat-rooms', { replace: true }) // Redirige si déjà connecté
    }
  }, []); // Exécuté une seule fois au montage

  const handleLogin = (e) => {
    e.preventDefault()

    if (!username.trim()) {
      alert('Veuillez entrer un nom d\'utilisateur valide')
      return
    }

    setCurrentUser({ name: username }) // Enregistre l'utilisateur
    navigate('/chat-rooms', { replace: true }) // Redirige après connexion
  }

  return (
    <div className="login-container">
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          className="input-field"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" className="input-field" placeholder="Mot de passe" />
        <button type="submit" className="login-button">Se connecter</button>
      </form>
    </div>
  )
}

export default LoginPage
