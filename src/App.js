import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  const [currentSelection, setCurrentSelection] = useState()
  return (
    <>
      <Header currentSelection={currentSelection}
              setCurrentSelection={setCurrentSelection}></Header>
      {currentSelection == 'About' && <About></About>}
      {currentSelection == 'Contact' && <Contact></Contact>}
      {currentSelection == 'Work' && <Work></Work>}

    </>
  );
}


export default App;
