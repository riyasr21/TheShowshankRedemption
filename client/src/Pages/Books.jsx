import React, { useEffect ,  useState } from 'react'
import Header from '../Components/Header/Header';
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../style.css";


const Books = () => {

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
    
    <div className='heroSection'>
        <Header/>
        <div className="heroSection__left">
            <div className="heroSection__left--green">
                A SIMPLE WEBSITE
            </div>

            <div className="heroSection__left--text">
                <b>Finding movies and shows made easier</b>
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
  )
}

export default Books