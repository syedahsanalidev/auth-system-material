import React from 'react';
import './App.css';
import Header from './shared/modules/header';
import Footer from './shared/modules/footer';
import Gravatar from 'react-gravatar';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{padding: '50px'}}>
      <Gravatar email="adilfarooq.it@gmail.com" rating='pg' /> <span>Adil Farooq</span>
      <blockquote>I went to the site gravatar.com and created my Gravatar and 
        it shows here automatically</blockquote>
      </div>
      <Footer />
    </div>
  );
}

export default App;
