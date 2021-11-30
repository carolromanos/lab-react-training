import React from 'react';
//import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
//import logo from './logo.svg';
import './App.css';
import ProfileList from './components/ProfileList';

function App() {
  return (
    <div className="App">
     <ProfileList />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
