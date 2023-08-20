import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BookNewForm(){
    let navigate = useNavigate();

    const addBook = (newBook) => {
        axios   
            .post(`${API}/books`, newBook)
            .then(
                () => {navigate(`/books`)},
                (error) => console.error(error)
            )
            .catch((error) => {console.warn("Error adding new book:", error)})
    }

    const [book, setBook] = useState({
        book: "",
        author: "",
        image: "",
        genre: "",
        release_year: 0,
        has_read: false,
        pages: 0,
        favorite: false
    });

    const handleTextChange = (event) =>{
        setBook({ ...book, [event.target.id]: event.target.value })
    }

    const handleReadChange = (event) =>{
        setBook({ ...book, has_read: !book.has_read })
    }

    const handleFavoriteChange = (event) =>{
        setBook({ ...book, favorite: !book.favorite })
    }

    const handleSubmit = (event) =>{
        event.prevenDefault()
        addBook(book)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="inputBook3">Book</label>
                    <div>
                        <input
                            type="text"
                            className=""
                            id="book"
                            value={book.book}
                            placeholder="Book Title"
                            onChange={handleTextChange}
                            required
                            />
                    </div>
                </div>

                <div>
                    <label>Author</label>
                    <div>
                        <input
                            type="text"
                            className=""
                            id="author"
                            value={book.author}
                            placeholder="Author's Name"
                            onChange={handleTextChange}
                            required
                             />
                    </div>
                </div>

                <div>
                    <label>Book Cover</label>
                    <div>
                        <input
                            type="text"
                            className=""
                            id="book-cover"
                            value={book.image} 
                            placeholder="Book Cover URL"
                            onChange={handleTextChange}
                            />
                    </div>
                </div>

                <div>
                    <label>Genre</label>
                    <div>
                        <input
                            type="text"
                            className=""
                            id="genre"
                            value={book.genre}
                            placeholder="Choose Book Genre"
                            onChange={handleTextChange}
                            />
                    </div>
                </div>

                <div>
                    <label>Release Year</label>
                    <div>
                        <input 
                            type="number"
                            className=""
                            id="release_year"
                            placeholder="Enter Release Year, if you know it"
                            onChange={handleTextChange}
                            value={book.release_year}
                            />
                    </div>
                </div>

                <div>
                    <label>Read</label>
                    <div>
                        <input
                            type="checkbox" 
                            className=""
                            id="has_read"
                            onChange={handleReadChange}
                            value={book.has_read}
                            />
                    </div>
                </div>

                <div>
                    <label>Pages</label>
                    <div>
                        <input
                            type="number" 
                            className=""
                            id=""
                            placeholder="How many Pages?"
                            onChange={handleTextChange}
                            value={book.pages}
                            />
                    </div>
                </div>

                <div>
                    <label>Favorite</label>
                    <div>
                        <input
                            type="checkbox" 
                            className=""
                            id="favorite"
                            onChange={handleFavoriteChange}
                            value={book.favorite}
                            />
                    </div>
                </div>
            </form>
        </div>
    )

}

export default BookNewForm;