import Header from '../Components/Header/Header'
import { render } from 'react-dom'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import '../login.css';
import bgImage from "../Assets/Img/loginPageImage.jpeg";

const Login = () => {
    var flag;
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
    const setLoginStatus = useState("");
    const navigate = useNavigate();
    const logIn = async (email, password) => {
        console.log("//localhost:8800/shows"+"/"+email+"/"+password);
        axios.post("//localhost:8800/shows/"+email+"/"+password,axiosConfig).then((response) =>
          {
             if(response.data.message)
             {
                setLoginStatus(response.data.message);
             }
             else{
                navigate(`/movies/${email}`);
             }
          }
        //   navigate('/');     
       );
      }
    return (
        <div>
            <Header/>
            {/* <div className="loginsection__left">
          <h2><div className="text1"> Sign In </div></h2>
              <div className="emaildetails">
                <div className="Email">
                   Email 
                </div>
              <div className='textField'>
                <input id="email"
                  name="email"
                  style={{height: "30px"}}
                  onChange={handleChange2}
                  value={email} size="30">

                  </input>
              </div>
             </div>
              <div className="passworddetails">
                <div className="Password">
                    Password
                </div>
                <div className='textField'>
                  <input id="password"
                  type = "password"
                  name="password"
                  style={{height: "30px"}}
                  onChange={handleChange3}
                  value={password} size="30"></input>
                </div>
              </div>
              <div classname='SubmitButton'>
              <button className="submit_button" onClick={() => logIn(email, password)}  >SIGN IN</button>
              </div>
              
           </div>*/}
           <div className="signInPage">
          <div className="signInPage__left">
          <div className="signInPage__left--headingAcc"><h2> Sign In </h2></div>
          {/* <div className="signInPage__left--nameDetails">
              <div className="signInPage__left--Name">
                Name
              </div>
            <div className='signInPage__left--nameTextField'>
              <input id="name"
                name="name"
                onChange={handleChange}
                style={{height: "30px"}}
                value={name} size="30"></input>
            </div> */}
          
          <div className="signInPage__left--emailDetails">
                <div className="signInPage__left--Email">
                   Email 
                </div>
              <div className='signInPage__left--emailTextField'>
                <input id="email"
                  name="email"
                  style={{height: "30px"}}
                  onChange={handleChange2}
                  value={email} size="30">

                  </input>
              </div>
             </div>

             <div className="signInPage__left--passwordDetails">
                <div className="signInPage__left--Password">
                    Password
                </div>
                <div className='signInPage__left--passTextField'>
                  <input id="password"
                  type = "password"
                  name="password"
                  style={{height: "30px"}}
                  onChange={handleChange3}
                  value={password} size="30"></input>
                </div>
              </div>
             
              <button className="signInPage__left--submitButton" onClick={() => logIn( email, password)} >SIGN IN</button>
              
              {/* <div className='signInPage__left--loginOption'>
                <h3 onClick={navigateToLogin}>Already a user? <u className="signInPage__left--loginText">Log in here</u></h3>
              </div> */}
           </div>
           <div className="signInPage__right">
            <img className="signInPage__right--bgImage" src={bgImage} alt="login page right section" />
           </div>
           </div>
           



          </div>
          
            
              
        
    
    )
  }
  
  export default Login;