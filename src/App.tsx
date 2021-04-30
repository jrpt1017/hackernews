import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      hello world
      <Footer />
    </div>
  );
}

export default App;
