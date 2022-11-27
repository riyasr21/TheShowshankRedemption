import axios from 'axios';
import React from 'react'
import Header from '../Components/Header/Header'
import FavoriteBorderIcon from "../Assets/Img/favorite-border.svg";
import Footer from '../Components/Footer/Footer';
import DeleteIcon from "../Assets/Img/deleteIcon.svg"
import { useState, useEffect } from 'react';
import '../favourites.css'

function Favourites() {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  const [favs, setFavs] = useState([]);
  const [favDetails, setFavsDetails] = useState([]);
  const [isFavMap, setIsFavMap] = useState(new Map());
  const [imgSrc, setImgSrc] = useState(FavoriteBorderIcon);
  const setIsFav = (id) => {
    // isFavMap.set(id, !isFavMap.get(id))  
    setIsFavMap(isFavMap.set(id, isFavMap.get(id) == undefined ? true : !isFavMap.get(id)))
    console.log(isFavMap);
  }
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
  const addFav = async (email, id) => {
    // console.log("//localhost:8800/shows"+"/"+email+"/"+password);
    try {
      axios.post("//localhost:8800/fav/"+email+"/"+id,axiosConfig)
    } catch(err) {
      console.log(err)

    }
  }

  const delFave = async (email, id) => {
    console.log("here");
    try{
      await axios.delete("http://localhost:8800/delete/fav/"+email+ "/"+ id)
      // window.location.reload()
          
  } catch(err) {
      console.log(err)
  }
  }

  
console.log("Favs")
  console.log(favs);

  if (favs.length == 0) {
    
  }

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

  const divStyle = {
    color: "white",
    backgroundColor: "#CCF279",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "12px",
    justifyContent: "center",
    
  };

  const movieStyle = {
    margin: "20px",
    padding: "20px",
    width: "250px",
    minHeight: "200px",
    // display: "grid",
    gridTemplateRows: "20px 50px 1fr 50px",
    borderRadius: "10px",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.25)",
    transition: "all 0.2s",
    backgroundColor: "#F2F2F0",
  };
  const movieTitleStyle = {
    fontFamily : "'Raleway', sans-serif",
    letterSpacing: "1.8px",
    borderBottom: "1px dashed rgb(204, 242, 121)",
    paddingBottom : "10px",
    margin : "0",
    maxHeight : "115px"
    
  }
  const listStyle = {
    margin: "15px 0",
    paddingLeft: "30px",
    lineHeight: "1.5rem",
    listStyleType: "square",
  }
  const runtimeStyle = {
    fontWeight: "400",
    color: "#000000",
    fontFamily : "'Raleway', sans-serif",
    textAlign : "left",
    marginBottom : "3px"

    
  };


  function MovieCard(props) {
    
    return <div
    className="movie"
    style={movieStyle}
    id={props.id}
    key={props.id}
  >
    {/* {book.cover && <img src={book.cover} alt={book.title}/>} */}
    {/* <button onClick={() => {
      setTestMap(() => {
        // testMap[props.id] = (testMap[props.id] == undefined) ? true : !testMap[props.id]
        testMap[props.id] = true;
      })
      console.log(testMap);
    }}> click </button> */}
    <h2 style={movieTitleStyle}>{props.title}</h2>
    <ul style={listStyle}>
      <li style={runtimeStyle}><span style={{fontWeight: "bold"}}> Runtime : </span> {props.runtime} minutes</li>
      <li style={runtimeStyle}> <span style={{fontWeight: "bold"}}> Year of Release : </span> {props.release_year}</li>
      
      {/* <li style={runtimeStyle}> {(testMap[props.id] != undefined).toString()} </li> */}
    </ul>
    
    <div className="button">
<button  className="liked" id={props.id} onClick={() => {
  delFave(email, props.id)
  window.location.reload();

}

            // var temp = isFavMap.get(props.id);
            // console.log(isFavMap.get(props.id));
            // if (temp == undefined) {
            //   isFavMap.set(props.id, false)
            // }
            // console.log(isFavMap.get(props.id))
            
              
              
            }
><img 
  src={DeleteIcon} 
  // src={imgSrc}
  className = "deleteImage"/></button>{/* <label for={props.id}><span></span></label>*/}
</div>
    {/* <button className="delete" onClick={()=> handleDelete(book.idbooks)}>Delete</button>
      <button className="update"><Link to={`/update/${book.idbooks}`}>Update</Link></button> */}
  </div>;
  }



  return (
    <div>
      
        <Header/>
        
        <div className="favPage">
          <div className="favPageContainer">
          <h1 className="infoText">Your Favourites</h1>
          {favs.length === 0 && (<h2 className="infoT"> You don't have any favourites yet</h2>)}
        {favs.length != 0 && <div className="favsDiv" style={divStyle}>
        
        
        {favs.map((movie) => (
            <MovieCard 
              id = {movie.Favourite} 
              title = {movie.title} 
              runtime = {movie.runtime} 
              release_year = {movie.release_year}
              key={movie.id}
            />
            
          ))}
        </div>}

          </div>
        

          
        </div>
        {/* <Footer href1={"/"} href2 = {"/movies/" + email} text1 = "Home" text2= "Search Movies"/> */}
        </div>
  )
}

export default Favourites