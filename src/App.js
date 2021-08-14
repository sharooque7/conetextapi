import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";

import { context } from "./context/context";
import { useState } from "react";

function App() {
  const [Profiles, showProfile] = useState(false);
  const [userName, setUserName] = useState("");
  console.log(userName, Profiles);

  return (
    <context.Provider value={{ showProfile, userName, setUserName }}>
      {Profiles ? <Profile /> : <Login />}
    </context.Provider>
  );
}

export default App;
