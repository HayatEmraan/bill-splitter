import { useEffect } from "react";
import "./App.css";
import { users } from "./Users";
import Users from "./components/Users";
import BillSplit from "./components/BillSplit";
import AddFriend from "./components/AddFriend";

function App() {
  useEffect(() => {
    document.title = "Bill Splitter | React JS";
  }, []);
  
  return (
    <div className="App">
      <div>
        <Users users={users} />
        <AddFriend />
      </div>
      <BillSplit />
    </div>
  );
}

export default App;
