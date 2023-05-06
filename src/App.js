import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy} from './urls'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/> 
        <RowPost  url={originals} title="Netflix originals "/> 
        <RowPost  url={action}  title="Action " isSmall />
        <RowPost  url={comedy}  title="ComedyMovies " isSmall />
       
 
    </div>
  );
}
 
export default App;
