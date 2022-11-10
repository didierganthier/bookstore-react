import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import Navbar from './components/Navbar';
import configureStore from './redux/configureStore';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <Router>
        <Navbar />
        <App />
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
);
