import React from 'react';
import logo from './logo.svg';
import './styles/_main.scss';
import NavigationBar from "./components/NavigationBar";
import InfoContainer from "./components/InfoContainer";

function App() {
  return (
    <div className="main-container">
      <NavigationBar/>
      <InfoContainer>
        <h3>Welcome to In The Dark!</h3>
        <br/>
        <p>This is a web programming challenge with 1 simple rule, you cannot preview your website until you submit, the competition is a gauge of who can recreate a website in ONE try as close as possible.</p>
      </InfoContainer>
    </div>
  );
}

export default App;
