import { Link } from "react-router-dom";

function Book({ book }){
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={book.image} className="card-img-top" alt={`${book.book}'s book cover`} />
            <div className="card-body">
                <h4 className="card-title">{book.book}</h4>
                <h6>{book.author}</h6>
                <div className="details-button">
                    <Link className="btn btn-primary" to={`/books/${book.id}`}>View Book Details</Link>
                    <p className="card-title">{book.has_read ? (
                        <span className="has_read-text">Read ✅</span>):(
                            null
                        )}
                    </p>
                    <p className="card-title">{book.favorite ? (
                        <span>💟</span>):(
                            null
                        )}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Book;