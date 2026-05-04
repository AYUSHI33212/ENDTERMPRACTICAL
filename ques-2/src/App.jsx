// App.jsx

import React, { createContext, useContext } from "react";
import "./App.css";

const UserContext = createContext();

function UserProvider({ children }) {
  const userData = {
    name: "Ayushi",
    course: "React JS",
    city: "Delhi",
  };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);

  return (
    <div className="card">
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Course: {user.course}</p>
      <p>City: {user.city}</p>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Profile />
      </div>
    </UserProvider>
  );
}

export default App;