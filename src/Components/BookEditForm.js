import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BookEditForm(){
    let { id } = useParams();
    let navigate = useNavigate()

    const [book, setBook] = useState({
        book: "",
        author: "",
        image: "",
        genre: "",
        release_year: 0,
        has_read: false,
        price: 0,
        favorite: false,
    })

    const updateBook = (updatedBook) => {
        axios
            .put(`${API}/books/${id}`, updatedBook)
            .then(
                () => {
                    navigate(`/books/${id}`)
                },
                (error) => console.error(error)
            )
            .catch((error) => {
                console.warn("Error when updating book:", error)
            })      
    }

    const handleTextChange = (event) => {
        setBook({...book, [event.target.id]: event.target.value})
    }

    const handleReadChange = () => {
        setBook({...book, has_read: !book.has_read})
    };

    const handleFavoriteChange = () => {
        setBook({...book, favorite: !book.favorite})
    };

    useEffect(() =>{
        axios.get(`${API}/books/${id}`).then(
            (response) => setBook(response.data),
            (error) => navigate (`/not-found`)
        );
    }, [id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBook(book, id)
    };

    return (
        <div className="text-box">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="book"></label>
                    <input
                        type="text"
                        value={book.book}
                        className="form-control shorter-input"
                        id="book"
                        onChange={handleTextChange}
                        placeholder="Book Title?"
                        required
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="author"></label>
                    <input
                        type="text"
                        value={book.author}
                        className="form-control"
                        id="author"
                        onChange={handleTextChange}
                        placeholder="Author's Name"
                        required
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="image"></label>
                    <input
                        type="text"
                        value={book.image}
                        className="form-control"
                        id="book-cover"
                        onChange={handleTextChange}
                        placeholder="Add a Book Cover Image"
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="genre"></label>
                    <input
                        type="text"
                        value={book.genre}
                        className="form-control"
                        id="genre"
                        onChange={handleTextChange}
                        placeholder="Genre?"
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="year"></label>
                    <input
                        type="number"
                        value={book.release_year}
                        className="form-control"
                        id="release-year"
                        onChange={handleTextChange}
                        placeholder="Release Year?" 
                        />
                </div>

                <div className="form-check">
                    <input
                        id="has_read"
                        type="checkbox"
                        onChange={handleReadChange}
                        checked={book.has_read} 
                        />
                    <label>Read</label>
                </div>

                <div>
                    <label htmlFor="price"></label>
                    <input
                        id="price"
                        type="number"
                        value={book.price}
                        onChange={handleTextChange}
                        placeholder="What's the price?" 
                        />
                </div>

                <div className="form-check">
                    <label>Favorite?</label>
                    <input
                        id="favorite"
                        type="checkbox"
                        onChange={handleFavoriteChange} 
                        checked={book.favorite}
                        />
                </div>

                <div className="button-container">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={`/books/${id}`}>
                        <button className="btn btn-outline-secondary">Cancel</button>
                    </Link>
                </div>


            </form>
        </div>
    )

}

export default BookEditForm;