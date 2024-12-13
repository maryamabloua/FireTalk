import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, setCurrentUser } from '../utils/localStorage'
import '../styles/LoginPage.css'

const LoginPage = () => {
  const [username, setUsername] = useState('') // État pour stocker le nom d'utilisateur
  const navigate = useNavigate() // Hook pour rediriger après connexion

  // Vérifie si l'utilisateur est déjà connecté
  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      navigate('/chat-rooms') // Redirige vers les salons
    }
  }, [navigate])

  // Soumission du formulaire
  const handleLogin = (e) => {
    e.preventDefault()

    if (!username.trim()) {
      alert('Veuillez entrer un nom d\'utilisateur valide')
      return
    }

    // Sauvegarde l'utilisateur dans LocalStorage
    setCurrentUser({ name: username })

    // Redirige vers la liste des salons
    navigate('/chat-rooms')
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
