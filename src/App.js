import { useEffect, useState } from "react";
import "./App.css";
import { users } from "./Users";
import Users from "./components/Users";
import BillSplit from "./components/BillSplit";
import AddFriend from "./components/AddFriend";

function App() {
  useEffect(() => {
    document.title = "Bill Splitter | React JS";
  }, []);

  const [hidden, setHidden] = useState(false);
  const [billSplit, setBillSplit] = useState(null);
  const [friendUsers, setFriendUsers] = useState(users);

  // add friend condition
  const addFriend = () => {
    setHidden(true);
  };
  console.log(hidden);
  const closeFriend = () => {
    setHidden(false);
  };
  const individualFriend = (pr) => {
    setBillSplit(pr);
  };
  const addFriendList = (e) => {
    e.preventDefault();
    const middle = e.target;
    const name = middle.name.value;
    const image = middle.image.value;
    console.log(name, image);
    const newFriend = {
      name,
      image,
      own_value: 0,
      owes: 0,
    };
    users.push(newFriend);
    setFriendUsers([...users]);
    setHidden(false);
  }
  return (
    <div className="App">
      <div>
        <Users
          users={friendUsers}
          addFriend={addFriend}
          individualFriend={individualFriend}
          hidden={hidden}
        />
        <AddFriend
          closeFriend={closeFriend}
          hidden={hidden}
          addFriendList={addFriendList}
        />
      </div>
      <BillSplit billSplit={billSplit} />
    </div>
  );
}

export default App;
