import React from 'react';
import Greetings from './components/Greetings'
import Random from './components/Random'
import './App.css';
import ProfileList from './components/ProfileList';

function App() {
  return (
    <div className="App">
     <ProfileList />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;
