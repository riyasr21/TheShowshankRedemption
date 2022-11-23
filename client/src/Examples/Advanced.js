import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import axios from 'axios'
import image from '../Assets/Img/moviePoster1.jpeg'
import anime from '../Assets/Img/animePoster1.jpeg'


function Advanced () {

  

  // Taking value from the card
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
    // console.log({message});
    
  };

  const [genre, setGenre] = useState('');

  const handleChangeG = event => {
    setGenre(event.target.value);

    console.log('value is:', event.target.value);
    // console.log({message});
    
  };

  const [platform, setPlatform] = useState('');

  const handleChangeP = event => {
    setPlatform(event.target.value);

    console.log('value is:', event.target.value);
    // console.log({message});
    
  };

  const [year, setYear] = useState('');

  const handleChangeY = event => {
    setYear(event.target.value);

    console.log('value is:', event.target.value);
    // console.log({message});
    
  };


  


  const db = [
  {
    name: 'Platform of your choice?',
    url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    changes: handleChangeP,
    val: platform
  },
  // {
  //   name: 'Preferred actor?',
  //   url: image,
    
  // },
  {
    name: 'Movies after any particular year?',
    url: anime,
    changes: handleChangeY,
    val: year

  },
  {
    name: 'What genre would you like to explore?',
    url: image,
    changes: handleChangeG,
    val: genre
  },
  {
    name: 'What do you want to watch?',
    url: anime,
    changes: handleChange,
    val: message
  }
]

const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  const divStyle = {
    color: "white",
    backgroundColor: "#CCF279",
    padding: "10px",
    display: "flex", 
    flexDirection : "row",
    flexWrap : "wrap", 
    gap : "12px",
    justifyContent : "center"

  };

  const movieStyle = {
    margin: "20px",
    padding: "20px",
    width: "500px",
    minHeight: "200px",
    // display: "grid",
    gridTemplateRows: "20px 50px 1fr 50px",
    borderRadius: "10px",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.25)",
    transition: "all 0.2s",
    backgroundColor: "#F2F2F0"

  }

  const runtimeStyle = {
    fontWeight: "400",
  color: "#000000"
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }
  const [movies, setMovies] = useState([])
  const [divShow, setDivShow] = useState(false)

  const getMovies = async (message, genre, year, platform) => {
    console.log("//localhost:8800/books/"+message+"/"+genre+"/"+platform+"/"+year)
    try {
      const res = await axios.get("//localhost:8800/books/"+message+"/"+genre+"/"+platform+"/"+year)
      setMovies(res.data)
      setDivShow(true)
      console.log(res)
  } catch(err) {
      console.log(err)
  } 
  }
  console.log("Movies")
    console.log(movies)

  return (
    <div>
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      <h1>Make your choice</h1>
      {(!divShow) && <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundColor:  '#CCF279' }}
              className='card'
            >
              <h3>{character.name}</h3>
              <input
        type="text"
        id={character.val}
        name={character.val}
        onChange={character.changes}
        value={character.val}
      />
      <h1>{character.val}</h1>
            </div>
          </TinderCard>
        ))}
      </div>}
      { (currentIndexRef.current == -1 && !divShow) &&
        <button onClick={() => getMovies(message, genre, year, platform)}>READY TO WATCH?</button>
      }

      { (divShow) && <div className='moviesDiv' style={divStyle}>{movies.map(movie => (
            <div className="movie" style={movieStyle} id={movie.id} key= {movie.id}>
                {/* {book.cover && <img src={book.cover} alt={book.title}/>} */}
                <h2>{movie.title}</h2>
                <p style={runtimeStyle}>{movie.runtime}</p>
                <p style={runtimeStyle}>

                    {movie.release_year}
                </p>
                {/* <button className="delete" onClick={()=> handleDelete(book.idbooks)}>Delete</button>
                <button className="update"><Link to={`/update/${book.idbooks}`}>Update</Link></button> */}
            </div>
        ))}</div>}
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#CCF279' }} onClick={() => swipe('left')}>Swipe left!</button>
        <button style={{ backgroundColor: !canGoBack && '#CCF279' }} onClick={() => goBack()}>Undo swipe!</button>
        <button style={{ backgroundColor: !canSwipe && '#CCF279' }} onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  )
}

export default Advanced
