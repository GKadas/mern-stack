import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


import React from 'react';
import UserForm from "./components/UserForm"

function App() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
