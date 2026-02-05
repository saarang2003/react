import React from "react";
import UserCard from "./component/UserCard";

const users = [
  { id: 1, name: "Alice", role: "Admin", isOnline: true },
  { id: 2, name: "Bob", role: "User", isOnline: false },
  { id: 3, name: "Charlie", role: "Moderator", isOnline: true },
  { id: 4, name: "David", role: "User", isOnline: false },
  { id: 5, name: "Eva", role: "Admin", isOnline: true },
  { id: 6, name: "Frank", role: "User", isOnline: false },
  { id: 7, name: "Grace", role: "Moderator", isOnline: true },
  { id: 8, name: "Hannah", role: "User", isOnline: false },
  { id: 9, name: "Ian", role: "User", isOnline: true },
  { id: 10, name: "Julia", role: "Admin", isOnline: false },
];

function App() {
  if (users.length < 0) {
    return <div>Users Not found...</div>;
  }

  return (
    <>
      {users.length > 0 &&
        users.map((user) => (
          <UserCard
            name={user.name}
            key={user.id}
            role={user.role}
            isOnline={user.isOnline}
          />
        ))}
    </>
  );
}

export default App;
