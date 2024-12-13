import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ChatRoomsPage from './pages/ChatRoomsPage';
import ChatRoomPage from './pages/ChatRoomPage';
import WelcomeBanner from './components/WelcomeBanner';
import { getCurrentUser } from './utils/localStorage';
import './App.css';

function App() {
  const currentUser = getCurrentUser();

  console.log('Utilisateur actuel dans App:', currentUser); // Log pour déboguer

  return (
    <Router>
      {currentUser && <WelcomeBanner />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/chat-rooms"
          element={currentUser ? <ChatRoomsPage /> : <Navigate to="/" replace />}
        />
        <Route
          path="/chat-room/:id"
          element={currentUser ? <ChatRoomPage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
