import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Main from './components/Profile/Main'
import Dialogs from './components/Dialogs/Dialogs'

const App = () => {
  return (
    <div className="App app-wrapper">
      <Header />
      <Nav />
      {/*<Main/> */}
      <Dialogs />
    </div>
  );
}




export default App;
