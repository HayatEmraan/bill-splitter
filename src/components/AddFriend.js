import React from 'react';

const AddFriend = ({ closeFriend, hidden, addFriendList }) => {
  console.log(hidden);
  return (
    <div className={`friend-container ${hidden ? "" : "hidden"}`}>
      <form onSubmit={addFriendList}>
        <div className="input-container">
          <label htmlFor="name">👫 Friend name</label>
          <input className="your-bill" type="text" name="name" />
        </div>
        <div className="input-container">
          <label htmlFor="image">🌄 Image URL</label>
          <input
            type="text"
            name="image"
            required
            className="total-bill"
            value={"https://i.pravatar.cc/48"}
          />
        </div>
        <div className="add-friend">
          <button className="button" onClick={closeFriend}>
            Close
          </button>
          <button className="button" type='submit'>Add Friend</button>
        </div>
      </form>
    </div>
  );
};

export default AddFriend;