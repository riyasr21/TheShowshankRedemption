//import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer';
import { render } from 'react-dom'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import '../shows.css'
import bgImage from "../Assets/Img/loginPageImage.jpeg";
// const cards = [
//   'https://n-lightenment.com/wp-content/uploads/2015/10/movie-night11.jpg',
//   'https://n-lightenment.com/wp-content/uploads/2015/10/movie-night11.jpg',
//   'https://n-lightenment.com/wp-content/uploads/2015/10/movie-night11.jpg',
//   'https://n-lightenment.com/wp-content/uploads/2015/10/movie-night11.jpg',
//   'https://n-lightenment.com/wp-content/uploads/2015/10/movie-night11.jpg',
//   'https://n-lightenment.com/wp-content/uploads/2015/10/movie-night11.jpg'
// ]

// // These two are just helpers, they curate spring data, values that are later being interpolated into css
// const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
// const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// // This is being used down there in the view, it interpolates rotation and scale into a css transform
// const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

// function Deck() {
//   const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
//   const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
//   // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//   const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
//     const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
//     const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//     if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//     set(i => {
//       if (index !== i) return // We're only interested in changing spring-data for the current spring
//       const isGone = gone.has(index)
//       const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
//       const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//       const scale = down ? 1.1 : 1 // Active cards lift up a bit
//       return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//     })
//     if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
//   })
//   // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
//   return props.map(({ x, y, rot, scale }, i) => (
//     <animated.div  key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
//       {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
//       <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
//     </animated.div>
//   ))
// }
// render(<Deck />, document.getElementById('root'))
 
const Shows = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
      
      navigate('/login');
    };
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  
  
  const [name, setName] = useState('');
  
  const handleChange = event => {
    setName(event.target.value);

    console.log('value is:', event.target.value);
    // console.log({message});
    
  };
  const [email, setEmail] = useState('');
  

  const handleChange2 = event => {
    setEmail(event.target.value);

    console.log('value is:', event.target.value);
    // console.log({message});
    
  };
  console.log(email);
  const [password, setPassword] = useState('');

  const handleChange3 = event => {
    setPassword(event.target.value);

    console.log('value is:', event.target.value);
    // console.log({message});
    
  };
  console.log(password);
  
  const signUp = async (name, email, password) => {
    
    try {
      await axios.post("//localhost:8800/shows/"+name+"/"+email+"/"+password,axiosConfig)
      await axios.get("//localhost:8800/user/"+email)
      console.log("done");
      
      // console.log(isUser);
      navigate('/login');
      // const res = await axios.get()
      // setMovies(res.data)
      // setDivShow(true)
      // console.log(res)
  } catch(err) {
      console.log(err)
  } 
  }
  return (
    <div>
        <Header/>
        {/* <div className="shows__deck">
        <Deck/> */}
        {/* </div> */}
        <div className="loginPage">
          <div className="loginPage__left">
          <div className="loginPage__left--headingAcc"><h2> Create Account </h2></div>
          <div className="loginPage__left--nameDetails">
              <div className="loginPage__left--Name">
                Name
              </div>
            <div className='loginPage__left--nameTextField'>
              <input id="name"
                name="name"
                className='loginPage__left--nameTextInput'
                onChange={handleChange}
                style={{height: "30px"}}
                value={name} size="30"></input>
                <span class="focus-bg"></span>
            </div>
          </div>
          <div className="loginPage__left--emailDetails">
                <div className="loginPage__left--Email">
                   Email 
                </div>
              <div className='loginPage__left--emailTextField'>
                <input id="email"
                  name="email"
                  className='loginPage__left--emailTextInput'
                  style={{height: "30px"}}
                  onChange={handleChange2}
                  value={email} size="30">

                  </input>
              </div>
             </div>

             <div className="loginPage__left--passwordDetails">
                <div className="loginPage__left--Password">
                    Password
                </div>
                <div className='loginPage__left--passTextField'>
                  <input id="password"
                  type = "password"
                  name="password"
                  className='loginPage__left--passTextInput'
                  style={{height: "30px"}}
                  onChange={handleChange3}
                  value={password} size="30"></input>
                   <span class="focus-bg"></span>
                </div>
              </div>
             
              <button className="loginPage__left--submitButton" onClick={() => signUp(name, email, password)} >SIGN UP</button>
              
              <div className='loginPage__left--loginOption'>
                <h3 onClick={navigateToLogin}>Already a user? <u className="loginPage__left--loginText">Log in here</u></h3>
              </div>
           </div>
           <div className="loginPage__right">
            <img className="loginPage__right--bgImage" src={bgImage} alt="login page right section" />
           </div>



          </div>
          
            
              {/* <Footer href1="/shows" href2 = "/login" text1 = "Sign Up" text2 = "Log In"/> */}
              
              
        </div>
  )
}

export default Shows