import React from 'react';
import { Home } from './components/Home/Home';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import Layout from './Layout/Layout';


function App() {
  return (
    <React.Fragment>
        <NavigationBar />
        <Home />
    </React.Fragment>
  );
}

export default App;
