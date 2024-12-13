import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ChatRoomsPage from './pages/ChatRoomsPage'
import ChatRoomPage from './pages/ChatRoomPage'
import { getCurrentUser } from './utils/localStorage'
import WelcomeBanner from './components/WelcomeBanner'
import './App.css'

function App() {
  const currentUser = getCurrentUser() // Récupère l'utilisateur connecté

  // Vérifie si un utilisateur est connecté avant de permettre l'accès à certaines pages
  return (
    <Router>
      {currentUser && <WelcomeBanner />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/chat-rooms"
          element={currentUser ? <ChatRoomsPage /> : <Navigate to="/" />}
        />
        <Route
          path="/chat-room/:id"
          element={currentUser ? <ChatRoomPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}

export default App