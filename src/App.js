
import React from 'react';
import './App.css';
import {originals,actions ,adventure,romance} from './urls'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={adventure} title='Adventure' isSmall />
      <RowPost url={romance} title='Comedy' isSmall />
    
    </div>
  );
}

export default App;
