import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=54bdd17d9e05bc8ea6827bbff8315183`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => { //.then kyu ke yaha pa api promise return karta hai re
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    
      <div className="app">
        <div className="search">
          <input type="text"
            value={location} // aur yaha pa jo value setLocation ma the wo location ma chala jaya ga phir api call hogi us location sa  
            onChange={event => setLocation(event.target.value)} //yaha pa ham us textfield sa value nikal ka setlocation ma set kar raha hai
            onKeyPress={searchLocation}
            placeholder="Enter Location" />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{(data.main.temp - 273.15).toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          {data.name !== undefined && 
             <div className="bottom">
             <div className="feels">
               {data.main ? <p className="bold">{(data.main.feels_like-273.15).toFixed()}°C</p> : null}
               <p>Feels Like</p>
             </div>
             <div className="humidity">
               {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
               <p>Humidity</p>
             </div>
             <div className="wind">
               {data.wind ? <p className="bold">{(data.wind.speed *  1.60934).toFixed()} KPH</p> : null}
               <p>Winds</p>
             </div>
           </div>
          }
        </div>
      </div>
  
  );
}

export default App;
