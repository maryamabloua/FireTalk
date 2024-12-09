import { useNavigate } from 'react-router-dom'
import { getCurrentUser, clearCurrentUser } from '../utils/localStorage'
import '../styles/WelcomeBanner.css'

const WelcomeBanner = () => {
  const navigate = useNavigate() // Hook pour la navigation
  const currentUser = getCurrentUser() // Récupère l'utilisateur connecté

  const handleLogout = () => {
    clearCurrentUser() // Supprime l'utilisateur connecté du LocalStorage
    navigate('/') // Redirige vers la page de connexion
  }

  // Si aucun utilisateur connecté, ne rien afficher
  if (!currentUser) return null

  return (
    <div className="welcome-banner">
      <p>Bienvenue, <strong>{currentUser.name}</strong> !</p>
      <button onClick={handleLogout} className="logout-button">Se déconnecter</button>
    </div>
  )
}

export default WelcomeBanner
