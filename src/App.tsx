import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import CreateBook from './components/Book/create';
import Book from './components/Book/index';
import Modal from './components/layout/modal';
import axios from 'axios';

const App: React.FC = () => {
  const lastName:string = ''
  
  return (
    <div className="App">
      <CreateBook />
      <button onClick={()=> alert('open modal')}>Open Modal</button>
      <Modal />
      <Book />
    </div>
  );
}

export default App;
