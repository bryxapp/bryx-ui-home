import React from 'react';
import { Home } from './components/Home/Home';
import { NoMatch } from './components/NoMatch/NoMatch';
import { PastEstimates } from './components/PastEstimates/PastEstimates';
import {Templates} from './components/Templates/Templates';
import { Forms} from './components/Forms/Forms';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from './Layout/Layout';


function App() {
  return (
    <Layout>
      <NavigationBar />
      {/*Use React router to set up routes*/}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='/forms' element={<Forms />} />
          <Route path='/past-estimates' element={<PastEstimates />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
