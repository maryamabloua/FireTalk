export const DEFAULT_ROOMS = [
    {
      id: 1,
      name: "Général",
      description: "Discussions générales",
      participants: [
        "Maryam", "Victor", "Alice", "Bob", "Charlie", "Eve", "Mallory",
        "John", "Jane", "David", "Sophia", "Emma", "Lucas", "Olivia", "Liam"
      ],
    },
    {
      id: 2,
      name: "Gaming",
      description: "Discussions sur les jeux",
      participants: [
        "Alice", "Bob", "Charlie", "David", "Emma", "Sophia", "Olivia",
        "Liam", "Noah", "Ethan", "Aiden", "Mason", "Isabella", "Lucas",
        "Emily", "Harper", "Elijah", "James", "Ella", "Scarlett"
      ],
    },
    {
      id: 3,
      name: "Informatique",
      description: "Discussions sur l'informatique",
      participants: [
        "Eve", "Mallory", "Alice", "Bob", "Charlie", "David", "Olivia",
        "Sophia", "Mason", "Liam", "Isabella", "Emma", "James", "Lucas",
        "Emily", "Harper", "Benjamin"
      ],
    },
  ];
  
  export const DEFAULT_MESSAGES = {
    1: [
      { id: 1, text: "Bienvenue dans le salon Général !", user: "Admin", date: "2024-12-06T10:00:00Z" },
      { id: 2, text: "Salut tout le monde !", user: "Victor", date: "2024-12-06T10:05:00Z" },
      { id: 3, text: "Comment allez-vous ?", user: "Alice", date: "2024-12-06T10:10:00Z" },
      { id: 4, text: "Prêt pour discuter ?", user: "Charlie", date: "2024-12-06T10:15:00Z" },
    ],
    2: [
      { id: 1, text: "Bienvenue dans le salon Gaming !", user: "Admin", date: "2024-12-06T11:00:00Z" },
      { id: 2, text: "Quel est votre jeu préféré ?", user: "Bob", date: "2024-12-06T11:05:00Z" },
      { id: 3, text: "J'adore les jeux d'action.", user: "Charlie", date: "2024-12-06T11:10:00Z" },
      { id: 4, text: "Quelqu'un pour jouer ce soir ?", user: "David", date: "2024-12-06T11:15:00Z" },
    ],
    3: [
      { id: 1, text: "Bienvenue dans le salon Informatique !", user: "Admin", date: "2024-12-06T12:00:00Z" },
      { id: 2, text: "Quels sont vos langages favoris ?", user: "Mallory", date: "2024-12-06T12:05:00Z" },
      { id: 3, text: "JavaScript et Python.", user: "Alice", date: "2024-12-06T12:10:00Z" },
      { id: 4, text: "Quelqu'un pour discuter d'algorithmes ?", user: "Bob", date: "2024-12-06T12:15:00Z" },
    ],
  };
  