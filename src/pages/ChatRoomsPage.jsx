const ChatRoomsPage = () => {
    // Données statiques pour les salons (à remplacer plus tard par Firestore)
    const chatRooms = [
        { id: 1, name: "Général", description: "Discussions générales", participants: 31 },
        { id: 2, name: "Gaming", description: "Discussions sur les jeux", participants: 15 },
        { id: 3, name: "Informatique", description: "Discussions sur l'informatique", participants: 7 },
    ]

    return (
        <>
            <h1>Salons disponibles</h1>
            {chatRooms.map((room) => (
                <div key={room.id}>
                    <h2>{room.name}</h2>
                    <p>{room.description}</p>
                    <span>{room.participants} participants</span>
                </div>
            ))}
            <br />
            <button >Créer un salon</button>
        </>
    )
}

export default ChatRoomsPage
