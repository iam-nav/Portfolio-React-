import React from 'react';
import Navbar from  './components/layout/navbar'
import Whatdo from './components/whatdo/whatdo'
import About from './components/AboutMe/About'
import Contact from './components/contact/contact'
import './App.css';

function App() {
  return (
    <>
<Navbar></Navbar>
<Whatdo></Whatdo>
<About></About>
<Contact></Contact>
    </>
  );
}

export default App;
