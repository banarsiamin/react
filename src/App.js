import { useState } from 'react';
import './App.css';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'
import Navbar from './Navbar'
import Todo from './Todo'
import Footer from './Footer'
import Hero from './Hero'
function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>

      <Navbar />
      <Hero/>
      <div>
      <Todo/>
      </div>
      <Footer/>

    </main>
  );
}

export default App;
