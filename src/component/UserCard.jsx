function UserCard({ name, role, isOnline }) {
  return (
    <div>
      {name} {"  "} {role} {"  "} {isOnline ? "Online" : "Offline"}
    </div>
  );
}

export default UserCard;
