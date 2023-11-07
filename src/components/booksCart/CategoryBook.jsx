import { Link, useLoaderData } from "react-router-dom";
import Container from "../ui/Container";


const CategoryBook = () => {
    const book = useLoaderData()
   
    return (
      <Container>
          <div className="grid grid-cols-3 gap-6 py-10">

          {
            book.map(items => <div key={items._id} className="card bg-base-100 shadow-xl">
            <figure><img className="80" src={items.image } alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{items.bookName}</h2>
                <p>{items.bookCategory}</p>
                <p>rating:{items.rating}</p>
                <p>Quantity: {items.bookQuantity}</p>
                <div className="card-actions justify-end">
                    <Link to={`/book-details/${items._id}`} className="btn btn-primary">Books Details</Link >
                </div>
            </div>
        </div>)
        }
      </div>
        </Container>
        
    );
};

export default CategoryBook;