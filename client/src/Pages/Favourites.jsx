import axios from 'axios';
import React from 'react'
import Header from '../Components/Header/Header'
import { useState, useEffect } from 'react';

function Favourites() {
  const [favs, setFavs] = useState([]);
  const [favDetails, setFavsDetails] = useState([]);
  const url = window.location.href;
  console.log(url)
  const myArray = url.split("/");
  const email = myArray[4]
  const getFavs = async (emailId) => {
    try {
      const res = await axios.get("//localhost:8800/favourites/" + emailId );
      setFavs(res.data)
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  

  console.log(favs);

  const getFavDetails = async (emailId, id) => {
    try {
      await axios.get("//localhost:8800/fav/" + emailId + "/" + id);
      const res = await axios.get("//localhost:8800/favs/" + emailId + "/" + id);
      setFavsDetails(...favDetails,res.data)
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  
  useEffect(() => {
    getFavs(email);
  }, []);



  return (
    <div>
        <Header/>

        </div>
  )
}

export default Favourites