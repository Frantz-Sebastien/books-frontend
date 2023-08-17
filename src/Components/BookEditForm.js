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
        release_year: null,
        has_read: false,
        pages: null,
        favorite: false,
    })

    const updateBook = (updatedBook) => {
        axios
            .put(`${API}/books/${id}`, updatedBook)
            .then(
                () => {navigate(`/books/${id}`)},
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
        <div>
            <form>
                <div>
                    <label></label>
                    <input
                        type="text"
                        value={book.book}
                        className=""
                        id="book"
                        onChange={handleTextChange}
                        placeholder="Book Title?"
                        required
                        />
                </div>

                <div>
                    <label></label>
                    <input
                        type="text"
                        value={book.author}
                        className=""
                        id="author"
                        onChange={handleTextChange}
                        placeholder="Author's Name"
                        required
                        />
                </div>

                <div>
                    <label></label>
                    <input
                        type="text"
                        value={book.image}
                        className=""
                        id="cover-image"
                        onChange={handleTextChange}
                        placeholder="Add a Book Cover Image"
                        />
                </div>

                <div>
                    <label></label>
                    <input
                        type="text"
                        value={book.genre}
                        className=""
                        id="genre"
                        onChange={handleTextChange}
                        placeholder="Genre?"
                        />
                </div>

                <div>
                    <label></label>
                    <input
                        type="number"
                        value={book.release_year}
                        className=""
                        id="release-year"
                        onChange={handleTextChange}
                        placeholder="Release Year?" 
                        />
                </div>

                <div>
                    <input
                        id="has_read"
                        type="checkbox"
                        onChange={handleReadChange}
                        checked={book.has_read} 
                        />
                    <label>Read</label>
                </div>

                <div>
                    <label></label>
                    <input
                        id="pages"
                        type="number"
                        value={book.pages}
                        onChange={handleTextChange}
                        placeholder="How many Pages?" 
                        />
                </div>

                <div>
                    <label>Favorite?</label>
                    <input
                        id="favorite"
                        type="checkbox"
                        onChange={handleFavoriteChange} 
                        checked={book.favorite}
                        />
                </div>

                <div>
                    <button type="submit">Submit</button>
                    <Link>
                        <button className="">Cancel</button>
                    </Link>
                </div>


            </form>
        </div>
    )

}

export default BookEditForm;