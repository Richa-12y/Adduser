import React, { useState } from "react";

const AddUserForm = (props) => {
  //after submit the form  this  return it to the initial, empty value.
  const initialFormEmpty = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormEmpty);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    // used here validation  empty values cannot be submit
    <form
      Submit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormEmpty);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <br style={{ marginTop: "50px" }} />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Add new user
      </button>
    </form>
  );
};

export default AddUserForm;
