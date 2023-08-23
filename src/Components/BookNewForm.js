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
        price: 0,
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
        event.preventDefault()
        addBook(book)
    }

    return(
        <div className="New form-group row text-box">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="inputBook3" className="col-sm-2 col-form-label">Book</label>
                    <div className="col-sm-10">
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

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Author</label>
                    <div className="col-sm-10">
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

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Book Cover</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className=""
                            id="image"
                            value={book.image} 
                            placeholder="Book Cover URL"
                            onChange={handleTextChange}
                            />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Genre</label>
                    <div className="col-sm-10">
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

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Release Year</label>
                    <div className="col-sm-10">
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

                <div className="form-group row">
                    <label >Read</label>
                    <div className="col-sm-10">
                        <input
                            type="checkbox" 
                            className=""
                            id="has_read"
                            onChange={handleReadChange}
                            value={book.has_read}
                            />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input
                            type="number" 
                            className=""
                            id="price"
                            placeholder="What's the Price?"
                            onChange={handleTextChange}
                            value={book.price}
                            />
                    </div>
                </div>

                <div className="form-group row">
                    <label>Favorite</label>
                    <div className="col-sm-10">
                        <input
                            type="checkbox" 
                            className=""
                            id="favorite"
                            onChange={handleFavoriteChange}
                            value={book.favorite}
                            />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default BookNewForm;