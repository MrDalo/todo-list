import React from 'react';
import SideBar from './components/sideNavigation/SideBar';
import MainContentCointainer from './components/mainContainer/MainContentCointainer';
import {Routes, Route} from 'react-router-dom';
import Home from './components/mainContainer/Home';
import MessageWindow from './components/MessageWindow';


function App() {
  return (
    <>
      <SideBar />

      <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/:id" element={<MainContentCointainer />}/>
      </Routes>
      
      <MessageWindow />
    </>

  );
}

export default App;
