import Header from '../Components/Header/Header'
import React from 'react'
import Footer from '../Components/Footer/Footer'
import '../movies.css'
import Switch from 'react-ios-switch'
import axios from 'axios';
import { useState, useEffect } from 'react';

import Advanced from '../Examples/Advanced'
import Simple from '../Examples/Simple'

function Movies() {
  const [showAdvanced, setShowAdvanced] = useState(true)
  const url = window.location.href;
  console.log(url)
  const myArray = url.split("/");
  const email = myArray[4]
  const makeTrigger = async (emailId) => {
    try {
      const res = await axios.get("//localhost:8800/favt/" + emailId );
      //setFavs(res.data)
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    makeTrigger(email);
  }, []);


  return (

    <div className='app'>
      <Header/>
      <Advanced /> 
      {/* <div className='row'>
        <p style={{ color: '#fff' }}>Show advanced example</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
      </div> */}
      {/* <Footer href1={"/favourites/" + email} href2 = {"/movies/" + email} text1 = "Favourites" text2= "Search Movies"/> */}
    </div>
  )
}

export default Movies