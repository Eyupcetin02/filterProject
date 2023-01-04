import React, { useState } from "react";
import './App.css';
import Data from './Data.json';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='container'>
      
      <br/>
      <br/>
      <br/>
      <div className='inputContainer'>
        <input className='search' type="text" placeholder="padişah ara..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
      <div className='dataContainer'>
        {
          Data.filter((val) =>{
              if (searchTerm === "") {
                return val;
              } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val;
              }
            }).map((val) => {
              return (
                <div className="data" key={val.id}>

                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>

                </div>
              )
            })
        }
      </div>
    </div>
  );
}

export default App;