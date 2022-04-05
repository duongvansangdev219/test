import logo from './logo.svg';
import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Loader from './components/Loader'
import TheContent from './containers/content';

function App() {

  return (
    <Suspense fallback={<Loader />}>
    <Router>
      <TheContent />
    </Router>
  </Suspense>
  );
}

export default App;
