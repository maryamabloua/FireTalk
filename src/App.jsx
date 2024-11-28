import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ChatRoomsPage from './pages/ChatRoomsPage'
import ChatRoomPage from './pages/ChatRoomPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat-rooms" element={<ChatRoomsPage />} />
        <Route path="/chat-room/:id" element={<ChatRoomPage />} />
      </Routes>
    </Router>
  )
}

export default App