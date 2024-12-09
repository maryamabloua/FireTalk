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
    return JSON.parse(localStorage.getItem('currentUser'))
}

// Sauvegarder l'utilisateur connecté dans LocalStorage
export const setCurrentUser = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user))
}

// Déconnecter l'utilisateur
export const clearCurrentUser = () => {
    localStorage.removeItem('currentUser')
}
