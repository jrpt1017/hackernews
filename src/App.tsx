import React from 'react';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
