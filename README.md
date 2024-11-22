# FireTalk

> **⚠️ Ce projet est actuellement en cours de développement.**  
> Les fonctionnalités décrites dans ce fichier README sont prévues mais peuvent évoluer ou être modifiées.

FireTalk est une application de chat en temps réel développée avec **React** et **Firebase**, permettant aux utilisateurs de communiquer instantanément dans des salons de discussion ou en privé.

## 🛠️ Fonctionnalités principales

- **Écran de connexion et d'inscription** :
  Les utilisateurs peuvent s'inscrire ou se connecter via Firebase Authentication.

- **Liste des salons de discussion** :
  Affiche les salons publics disponibles et permet de rejoindre ou créer un nouveau salon.

- **Chat en temps réel** :
  Messages instantanés avec mises à jour en temps réel grâce à Firebase Firestore.

- **Messages privés** :
  Envoi de messages directs entre utilisateurs.

- **Notifications** :
  Réception de notifications pour les nouveaux messages ou messages privés.

- **Statut de connexion des utilisateurs** :
  Affichage du statut en ligne/hors ligne des utilisateurs.

- ( **Gestion des profils utilisateurs** :
  Personnalisation des profils avec une photo, un pseudo et un statut. )

---

## 📂 Structure du projet

```plaintext
src/
├── components/      # Composants réutilisables (boutons, formulaires, etc.)
├── pages/           # Pages principales (Login, ChatRooms, ChatBox, etc.)
├── styles/          # Fichiers CSS pour le design
├── firebase.js      # Configuration Firebase
├── App.jsx          # Composant principal
└── main.jsx         # Point d'entrée
```

---

## 🚀 Installation et exécution

### Étape 1 : Clonez le projet
Téléchargez le projet depuis GitHub sur votre machine locale :
```bash
git clone https://github.com/maryamabloua/FireTalk.git
cd FireTalk
```

### Étape 2 :  Installez les dépendances
Exécutez la commande suivante pour installer toutes les dépendances nécessaires :
```bash
npm install
```
### Étape 3 :  Lancez le serveur de développement
Exécutez la commande suivante pour installer toutes les dépendances nécessaires :
```bash
npm run dev
```
Ouvrez votre navigateur et accédez à http://localhost:5173/ pour voir l'application.

## 🌐 Technologies utilisées

- **React.js** : Framework JavaScript pour le frontend.
- **Firebase** :
  - **Authentication** : Gestion des utilisateurs.
  - **Firestore** : Stockage des messages et des salons en temps réel.
  - **Realtime Database** : Gestion du statut des utilisateurs (en ligne/hors ligne).
- **Vite** : Outil de build rapide pour React.
- **CSS** : Pour le design et le style.

---

## 📝 Auteurs

- **Maryam Abloua** : Développeuse.
- **Victor Hüni** : Développeur.

---