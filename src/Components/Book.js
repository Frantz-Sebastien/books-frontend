import { Link } from "react-router-dom";

function Book({ book }){
    return (
        <div>
            <img src={book.image} />
            <div>
                <h4>{book.book}</h4>
                <h6>{book.author}</h6>
                <div>
                    <Link to={`/books/${book.id}`}>View Book Details</Link>
                    <p>{book.has_read ? (
                        <span>Read ✅</span>):(
                            null
                        )}
                    </p>
                    <p>{book.favorite ? (
                        <span>Loved!</span>):(
                            null
                        )}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Book;