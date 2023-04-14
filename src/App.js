import React, {useState} from 'react';
import axios from 'axios';

function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=54bdd17d9e05bc8ea6827bbff8315183`;

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="top">
            <div className="location">
              <p>dallas</p>
            </div>
            <div className="temp">
              <h1>45C</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>65C</p>
            </div>
            <div className="humidity">
              <p>20%</p>
            </div>
            <div className="wind">
              <p>12 MPH</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
