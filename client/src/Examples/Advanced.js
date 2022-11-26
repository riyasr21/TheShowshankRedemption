import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import FavoriteBorderIcon from "../Assets/Img/favorite-border.svg";
import FavoriteFilledIcon from "../Assets/Img/favorite-filled.svg";

import image from "../Assets/Img/moviePoster1.jpeg";
import anime from "../Assets/Img/animePoster1.jpeg";

import "./Advanced.css";

function Advanced() {
  // Taking value from the card
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  const url = window.location.href;
  // console.log(url)
  const myArray = url.split("/");
  const email = myArray[4]
  const [isFavMap, setIsFavMap] = useState(new Map());
  const [testMap, setTestMap] = useState({"test": 123});
  const setIsFav = (id) => {
    // isFavMap.set(id, !isFavMap.get(id))  
    setIsFavMap(isFavMap.set(id, isFavMap.get(id) == undefined ? true : !isFavMap.get(id)))
    console.log(isFavMap);
  }

  const isFavIconMap = new Map();
  const setIsFavIcon = (id) => {
    setIsFavMap(m => m.set(id, isFavIconMap.get(id) === FavoriteBorderIcon ? FavoriteFilledIcon : FavoriteBorderIcon)  )
  }
  
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
const navigateToFav = () => {
    
            navigate(`/favourites/${email}`);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
    // console.log({message});
  };

  const [genre, setGenre] = useState("");

  const handleChangeG = (event) => {
    setGenre(event.target.value);

    console.log("value is:", event.target.value);
    // console.log({message});
  };

  const [platform, setPlatform] = useState("");

  const handleChangeP = (event) => {
    setPlatform(event.target.value);

    console.log("value is:", event.target.value);
    // console.log({message});
  };

  const [year, setYear] = useState("");

  const handleChangeY = (event) => {
    setYear(event.target.value);

    console.log("value is:", event.target.value);
    // console.log({message});
  };

  const [actor, setActor] = useState("");

  const handleChangeA = (event) => {
    setActor(event.target.value);

    console.log("value is:", event.target.value);
    // console.log({message});
  };
  const addFav = async (email, id) => {
    // console.log("//localhost:8800/shows"+"/"+email+"/"+password);
    try {
      axios.post("//localhost:8800/fav/"+email+"/"+id,axiosConfig)
    } catch(err) {
      console.log(err)

    }
  }

  const delFav = async (email, id) => {
    // console.log("//localhost:8800/shows"+"/"+email+"/"+password);
    try{
      await axios.delete("http://localhost:8800/delete/fav/"+email+ "/"+ id)
      // window.location.reload()
          
  } catch(err) {
      console.log(err)
  }
  }
  const [imgSrc, setImgSrc] = useState(FavoriteBorderIcon);
  // console.log(isFavMap)

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
      {/* <li style={runtimeStyle}> {props.id}</li> */}
      {/* <li style={runtimeStyle}> {(testMap[props.id] != undefined).toString()} </li> */}
    </ul>
    
    <div className="button">
<button  className="liked" id={props.id} onClick={() => {

            // var temp = isFavMap.get(props.id);
            // console.log(isFavMap.get(props.id));
            // if (temp == undefined) {
            //   isFavMap.set(props.id, false)
            // }
            // console.log(isFavMap.get(props.id))
            setIsFav(props.id);
            console.log(isFavMap.get(props.id));
            if (isFavMap.get(props.id) == undefined || isFavMap.get(props.id)) {
              console.log("ccalled");
              setImgSrc(FavoriteFilledIcon)
              addFav(email,props.id)
            } else{
              setImgSrc(FavoriteBorderIcon)
              delFav(email, props.id)
              
            }}}
><img 
  src={isFavMap.get(props.id) ? FavoriteFilledIcon : FavoriteBorderIcon} 
  // src={imgSrc}
  className = "likeImage"/></button>{/* <label for={props.id}><span></span></label>*/}
</div>
    {/* <button className="delete" onClick={()=> handleDelete(book.idbooks)}>Delete</button>
      <button className="update"><Link to={`/update/${book.idbooks}`}>Update</Link></button> */}
  </div>;
  }
  

  const db = [
    {
      name: "Platform of your choice?",
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      changes: handleChangeP,
      val: platform,
    },
    {
      name: "Preferred actor?",
      url: image,
      changes: handleChangeA,
      val: actor,
    },
    {
      name: "Want to watch something after any particular year?",
      url: anime,
      changes: handleChangeY,
      val: year,
    },
    {
      name: "What genre would you like to explore?",
      url: image,
      changes: handleChangeG,
      val: genre,
    },
    {
      name: "What do you want to watch?",
      url: anime,
      changes: handleChange,
      val: message,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

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

  const runtimeStyle = {
    fontWeight: "400",
    color: "#000000",
    fontFamily : "'Raleway', sans-serif",
    textAlign : "left",
    marginBottom : "3px"

    
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

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };
  const [movies, setMovies] = useState([]);
  const [divShow, setDivShow] = useState(false);

  const getMovies = async (message, genre, year, platform,actor) => {
    // console.log(
    //   "//localhost:8800/books/" +
    //     message +
    //     "/" +
    //     genre +
    //     "/" +
    //     platform +
    //     "/" +
    //     year
    // );
    console.log(actor)
    if (actor === 
      "") {
      try {
      
        const res = await axios.get(
          "//localhost:8800/books/" +
            message +
            "/" +
            genre +
            "/" +
            platform +
            "/" +
            year
        );
        // const res2 = await axios.get(
        //   "//localhost:8800/shows/" +
        //     message +
        //     "/" +
        //     platform +
        //     "/" +
        //     actor 
        // );
        // console.log(res2.data)
        setMovies(res.data);
        
        setDivShow(true);
        console.log(res);
      } catch (err) {
        console.log(err);
      }

        
      } else {
        try {
      
          // const res = await axios.get(
          //   "//localhost:8800/books/" +
          //     message +
          //     "/" +
          //     genre +
          //     "/" +
          //     platform +
          //     "/" +
          //     year
          // );
          const res2 = await axios.get(
            "//localhost:8800/shows/" +
              message +
              "/" +
              platform +
              "/" +
              actor 
          );
          console.log("here")
          console.log(res2.data)
          setMovies(res2.data);
          setDivShow(true);
          // console.log(res);
        } catch (err) {
          console.log(err);
        }
        
      }

      

      movies.map(((movie) => (
        setIsFavMap(m => m.set(movie.id, false))
        
      )))
    
  };
  // console.log("Movies");
  // console.log(movies);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1 className="infoTitle">Make your choice</h1>
      <h3 className="infoDesc">Enter your preferences and swipe the card</h3>
      
      {!divShow && currentIndexRef.current != -1 && (
        <div className="cardContainer">
          {db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div style={{ backgroundColor: "#CCF279" }} className="card">
                <h3 style={{ textAlign: "center" }}>{character.name}</h3>
                <div>
                  <input
                    type="text"
                    id={character.val}
                    name={character.val}
                    onChange={character.changes}
                    value={character.val}
                    placeholder="Enter here"
                    className="card__formField"
                  />
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
                <h1 className="card__textDisplayed">{character.val}</h1>
              </div>
            </TinderCard>
          ))}
        </div>
      )}
      {currentIndexRef.current == -1 && !divShow && (
        <button
          className="b1"
          onClick={() =>
            getMovies(
              message.toUpperCase(),
              "'".concat(genre.toLowerCase(), "'"),
              year,
              platform.charAt(0).toUpperCase() + platform.slice(1).toLowerCase(),
              actor
            )
          }
        >
          GET {message.toUpperCase()}S!
        </button>
      )}

        {/* <button
          className="b1"
          onClick={() =>
            getMovies(
              "SHOW",
              "'action'",
              2010,
              // platform.charAt(0).toUpperCase() + platform.slice(1).toLowerCase(),
              "Netflix",
              ""
            )
          }
        >
          Sample responses
        </button> */}

      {divShow && (
        <div className="moviesDiv" style={divStyle}>
          {movies.map((movie) => (
            <MovieCard 
              id = {movie.id} 
              title = {movie.title} 
              runtime = {movie.runtime} 
              release_year = {movie.release_year}
              key={movie.id}
            />
            
          ))}
        </div>
      )}
      {!divShow && currentIndexRef.current != -1 && (
        <div className="buttons">
          {/* <button
          style={{ backgroundColor: !canSwipe && "#CCF279" }}
          onClick={() => swipe("left")}
        >
          Swipe left!
        </button> */}
          <button
            style={{ backgroundColor: !canGoBack && "rgb(121 133 242 / 70%)" }}
            onClick={() => goBack()}
          >
            Undo swipe!
          </button>
          {/* <button
          style={{ backgroundColor: !canSwipe && "#CCF279" }}
          onClick={() => swipe("right")}
        >
          Swipe right!
        </button> */}
        </div>
      )}
      {/* {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <p></p>
        // <h2 className="infoText">
        //   Swipe a card or press a button to get Restore Card button visible!
        // </h2>
      )} */}
      <button className="favouritesButton" onClick={navigateToFav}>GO TO FAVOURITES</button>
    </div>
  );
}

export default Advanced;