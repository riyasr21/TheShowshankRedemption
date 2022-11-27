import React, { useEffect ,  useState } from 'react'
import Header from '../Components/Header/Header';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../style.css";
import shawshankRedemption from '../Assets/Img/moviePoster1.png'
import attackOnTitan from '../Assets/Img/animePoster1.png'
import Footer from '../Components/Footer/Footer';


const Books = () => {
    const navigate = useNavigate();
const navigateToShows = () => {
    
    navigate('/shows');
  };

    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("//localhost:8800/books")
                setBooks(res.data)
                console.log(res)
            } catch(err) {
                console.log(err)
            } 
        }
        fetchAllBooks()
    },[])
    console.log("Books")
    console.log(books)

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
                
        } catch(err) {
            console.log(err)
        }
    }

  return (
    
    <div className='landingPage'>
        <Header/>
        <div className='heroSection'>
        <div className="heroSection__left">
            <div className="heroSection__left--green">
                A SIMPLE WEBSITE
            </div>

            <div className="heroSection__left--text">
                <b>Finding movies and shows made easier.</b>
            </div>
            <div className="heroSection__left--textGrey">
                <b>Your solution to decide what to watch next.</b>
            </div>

            <button className="heroSection__left--searchButton" onClick={navigateToShows}>READY TO WATCH?</button>
            

        </div>

        <div className="heroSection__right">
            
                <div className="heroSection__right--img1">
                    <img className = "heroSection__right--images" src= {shawshankRedemption} alt='The Shawshank Redemption Poster'/>
                    <div className="heroSection__right--img1--whiteBg">
                    <div className="heroSection__right--lines">
                        
                    </div>
                   
                </div>

                </div>
                
                <div className="heroSection__right--img2">
                <img className = "heroSection__right--images" src= {attackOnTitan} alt='Attack on Titan Poster'/>
                <div className="heroSection__right--img2--whiteBg"></div>
                
                </div>
                
            
        </div>
        {/* <h1>Book Shop</h1>
    <div className="books">
        {books.map(book => (
            <div className="book" id={book.idbooks} key= {book.idbooks}>
                {book.cover && <img src={book.cover} alt={book.title}/>}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>
                    {book.price}
                </span>
                <button className="delete" onClick={()=> handleDelete(book.idbooks)}>Delete</button>
                <button className="update"><Link to={`/update/${book.idbooks}`}>Update</Link></button>
            </div>
        ))}
    </div>
    <button><Link to="/add">Add new book</Link></button> */}
    </div>
    {/* <Footer href1="/shows" href2 = "/login" text1 = "Sign Up" text2 = "Log In"/> */}
   </div>
  )
}

export default Books