import { DEFAULT_ROOMS, DEFAULT_MESSAGES } from '../constants/defaultData'

// Initialiser les salons et messages par défaut (initialisation)
export const initializeDefaultData = () => {
    if (!localStorage.getItem('chatRooms')) {
      localStorage.setItem('chatRooms', JSON.stringify(DEFAULT_ROOMS))
    }
  
    Object.entries(DEFAULT_MESSAGES).forEach(([roomId, messages]) => {
      if (!localStorage.getItem(`messages_${roomId}`)) {
        localStorage.setItem(`messages_${roomId}`, JSON.stringify(messages))
      }
    })
  }

// Lire une donnée depuis LocalStorage
export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
}

// Sauvegarder une donnée dans LocalStorage
export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

// Supprimer une donnée de LocalStorage
export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}

// Fonctions pour gérer l'utilisateur connecté //

// Récupérer l'utilisateur connecté depuis LocalStorage
export const getCurrentUser = () => {
    const user = localStorage.getItem('currentUser')
    return user ? JSON.parse(user) : null
}

// Sauvegarder l'utilisateur connecté dans LocalStorage
export const setCurrentUser = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user))
}

// Déconnecter l'utilisateur
export const clearCurrentUser = () => {
    localStorage.removeItem('currentUser')
}
