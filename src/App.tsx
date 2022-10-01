import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import {Routes, Link, Route} from 'react-router-dom';
import SideBar from './components/SideBar';
import ToDoList from './components/ToDoList';



function App() {
  return (
    <>
      <SideBar />

      <Routes>
        <Route  path="/" element={<></>}/>
        <Route  path="/:id" element={<ToDoList />}/>
      </Routes>
    
    </>

  );
}

export default App;
