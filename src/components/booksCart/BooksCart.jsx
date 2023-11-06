import { Link } from "react-router-dom";


const BooksCart = ({books}) => {
  console.log(books);
  const {image,bookName,bookCategory,bookQuantity,rating,_id} = books
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-80 w-full" src={image } alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>{bookCategory}</p>
                <p>rating:{rating}</p>
                <p>Quantity: {bookQuantity}</p>
                <div className="card-actions justify-end">
                    <Link to={`/book-update/${_id}`} className="btn btn-primary">Update Book</Link >
                </div>
            </div>
        </div>
    </div>
  );
};

export default BooksCart;