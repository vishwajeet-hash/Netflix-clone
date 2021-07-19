
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
      <h1>Hey clever programmer! lets build netflix clone front-end today welcome </h1>
      <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );  
}

export default App; 
