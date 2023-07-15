import React from 'react';

const AddFriend = () => {
    return (
      <div className='friend-container'>
        <form action="">
          <div className="input-container">
            <label htmlFor="bill">👫 Friend name</label>
            <input className="your-bill" type="text" name="bill" />
          </div>
          <div className="input-container">
            <label htmlFor="bill">🌄 Image URL</label>
            <input
              type="text"
              name="bill"
              className="total-bill"
              value={"https://i.pravatar.cc/48"}
            />
          </div>
          <div className="add-friend">
            <button className="button">Add Friend</button>
          </div>
        </form>
      </div>
    );
};

export default AddFriend;