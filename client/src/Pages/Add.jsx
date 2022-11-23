import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';

export const Add = () => {
    const [bookDetails, setBookDetails] = useState({
        title: "",
        desc: "",
        price : null,
        cover: ""
    });

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBookDetails(prev => ({...prev,[e.target.name] : e.target.value}))
    }
    console.log(bookDetails)

    const handleClick = async e => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/books",bookDetails,axiosConfig)
            console.log("done");
            navigate("/")

        } catch(err) {
            console.log(err)
        }

    }

  return (
    <div className="form">
        <Header/>
        <h1>Add new book</h1>
        <input onChange={handleChange} type="text" placeholder='title' name='title' />
        <input onChange={handleChange} type="text" placeholder='desc' name='desc'/>
        <input onChange={handleChange} type="number" placeholder='price' name='price'/>
        <input onChange={handleChange} type="text" placeholder='cover' name='cover'/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
