import React from "react";

const UserTable = (props) => (
  <table style={{ border: "2px solid black" }}>
    <thead>
      <tr>
        <th style={{ border: "2px solid red" }}>Name</th>
        <th style={{ border: "2px solid red" }}>Username</th>
        <th style={{ border: "2px solid red" }}>Plan</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td style={{ border: "2px solid blue" }}>{user.name}</td>
            <td style={{ border: "2px solid blue" }}>{user.username}</td>
            <td style={{ border: "2px solid blue" }}>
              <button className="Editbutton">Edit</button>
              <button className="Deletebutton">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
