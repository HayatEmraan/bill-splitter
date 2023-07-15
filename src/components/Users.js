import React from "react";

const Users = ({ users }) => {
  console.log(users);
  return (
    <div className="users-container">
      {users.map((user, index) => {
        return (
          <div key={index} className="user-container">
            <div className="img-name">
              <img src={user.image} alt="" />
              <div>
                <h4>{user.name}</h4>
                <p>You owe Clark 7€</p>
              </div>
            </div>
            <div>
              <button className="button">Select</button>
            </div>
          </div>
        );
      })}
      <div className="add-button">
        <button className="button">Add Friend</button>
      </div>
    </div>
  );
};

export default Users;
