import axios from "axios";
import { useState, useEffect } from "react";
import Book from "./Book"

const API = process.env.REACT_APP_API_URL;

function Books() {
    const [books, setBooks] = useState([]);


    useEffect(() =>{
        axios
            .get(`${API}/books`)
            .then((response) => {setBooks(response.data)})
            .catch((error) => console.warn("Error fetching books:", error))    

    }, [])

    return(
        <div>
            <h1>Total Books: {books.length}</h1>
            <tbody>
                {books.map((book)=>{
                    return <Book key={book.id} book={book} />
                })}
            </tbody>
        </div>
    )
}

export default Books;