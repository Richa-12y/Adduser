import React, { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
const App = () => {
  const usersData = [
    { id: 1, name: "Richa", username: "kricha" },
    { id: 2, name: "Kyra", username: "kayrarajput" },
    { id: 3, name: "Shilpi", username: "shilpisingh" },
    { id: 4, name: "Ram" }
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }; //Adding a new user

  return (
    <div className="container">
      <h1>Crud with Hooks</h1>
      <div className="hooks">
        <div className="hookes">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="tableUser">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
