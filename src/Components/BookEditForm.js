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

        <div className="New form-group row text-box new-book-form">
            <form onSubmit={handleSubmit}>

                <div className="form-group row">
                    <label htmlFor="book" className="col-sm-2 col-form-label">Book</label>
                    <div className="col-sm-10">
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
                </div>

                <div className="form-group row">
                    <label htmlFor="author" className="col-sm-2 col-form-label">Author</label>
                    <div className="col-sm-10">                        
                        <input
                            type="text"
                            value={book.author}
                            className="form-control shorter-input"
                            id="author"
                            onChange={handleTextChange}
                            placeholder="Author's Name"
                            required
                            />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="image" className="col-sm-2 col-form-label">Book Cover</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            value={book.image}
                            className="form-control shorter-input"
                            id="image"
                            onChange={handleTextChange}
                            placeholder="Add a Book Cover Image"
                            />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="genre" className="col-sm-2 col-form-label">Genre</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            value={book.genre}
                            className="form-control"
                            id="genre"
                            onChange={handleTextChange}
                            placeholder="Genre?"
                            />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="year" className="col-sm-2 col-form-label">Release Year</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            value={book.release_year}
                            className="form-control"
                            id="release_year"
                            onChange={handleTextChange}
                            placeholder="Release Year?" 
                            />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            value={book.price}
                            className="form-control"
                            id="price"
                            onChange={handleTextChange}
                            placeholder="What's the price?" 
                            />
                    </div>
                </div>

                <div className="form-group row">
                     <div className="col-sm-2">Read?</div>
                     <div className="col-sm-10">
                     <div className="form-check">
                         <input 
                             type="checkbox" 
                             className="form-check-input" 
                             id="has_read"
                             onChange={handleReadChange}
                             checked={book.has_read}
                             />
                         <label className="form-check-label" for="gridCheck1">
                         Yes!
                         </label>
                     </div>
                     </div>
                 </div>

                <div className="form-group row">
                    <div className="col-sm-2">Love?</div>
                    <div className="col-sm-10">
                    <div className="form-check">
                        <input
                            id="favorite"
                            type="checkbox"
                            className="form-check-input"
                            onChange={handleFavoriteChange} 
                            checked={book.favorite}
                            />
                        <label className="form-check-label" for="gridCheck1">
                        Yes!
                        </label>
                    </div>
                    </div>
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