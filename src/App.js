import React from 'react';
import Chatbot from './components/Chatbot'; // Step 1
import 'bootstrap/dist/css/bootstrap.min.css'; // If not already present

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark p-3">
        <span className="navbar-brand mb-0 h1">Axentra</span>
      </nav>

      <header className="text-center p-5 bg-light">
        <h1>Welcome to Axentra</h1>
        <p>Premium clothing for modern lifestyle</p>
        <button className="btn btn-primary">Shop Now</button>
      </header>

      <Chatbot />
    </div>
  );
}

export default App;
