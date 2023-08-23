import axios from "axios";
import { useState, useEffect} from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";
const API = process.env.REACT_APP_API_URL;

function BookDetails(){
    const [book, setBook] = useState({});
    let { id } = useParams()
    let navigate = useNavigate()


    const handleDelete = () =>{
        if (window.confirm("This book with all its details will be deleted. Proceed?")){
            deleteBook()
        }
    }

    useEffect(()=>{
        axios.get(`${API}/books/${id}`).then
        ((response) => {
            setBook(response.data)
        });
    }, [id, navigate, API])

    const deleteBook = () => {
        axios
            .delete(`${API}/books/${id}`)
            .then(() => {
                navigate(`/books`);
            })
            .catch((error) => {
                console.error("Error removing book:", error)
            })
    }

    return (
        <>
            <h3>{book.book}</h3>
            <h2><small>by {book.author}</small></h2>

            <article>
                <img className="cityimage" src={book.image} alt ={`${book.book} book cover`} />
            </article>
            <div className="showNavigation">
                <div>
                    <Link to={`/books`}>
                        <button className="btn btn-success">Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/books/${id}/edit`}>
                        <button className="btn btn-warning">Edit</button>
                    </Link>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <Reviews />
        </>
    )
}

export default BookDetails;