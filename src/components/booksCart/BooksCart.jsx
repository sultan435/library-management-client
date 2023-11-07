import { Link } from "react-router-dom";

const BooksCart = ({ books }) => {
 
  const { image, bookName, bookCategory, bookQuantity, rating, _id } = books

  return (
    <>
      <div className="bg-slate-100 shadow-xl p-8 rounded-lg hover:-translate-y-2 overflow-hidden transition duration-200">
        <figure><img className="h-72 w-full object-cover rounded-lg shadow-lg " src={image} alt="Shoes" /></figure>
        <div className="">
          <h2 className="text-2xl font-bold mt-2">{bookName}</h2>
          <p className="text-xl font-semibold">{bookCategory}</p>
          <p className="font-medium">Quantity: {bookQuantity}</p>
          <div className="flex justify-between items-center">
            <p>rating:{rating}</p>
            <div className="">
              <Link to={`/book-update/${_id}`} className="bg-[#ff3115] px-4 py-2 rounded-full text-white text-lg font-medium">Update Book</Link >
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksCart;