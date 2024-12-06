// Fonction pour lire une donnée depuis LocalStorage
export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
}

// Fonction pour sauvegarder une donnée dans LocalStorage
export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

// Fonction pour supprimer une donnée de LocalStorage
export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}
