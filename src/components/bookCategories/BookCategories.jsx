import { Link } from "react-router-dom";

const BookCategories = ({category}) => {
    const {bookCategory, image} = category

    return (
        <div className="py-20">
            <div className="card bg-base-100 shadow-xl">
                <figure className=" pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-full h-72" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{bookCategory}</h2>
                    <div className="card-actions">
                        <Link to={`bookCart/${bookCategory}`} className="px-4 py-2 bg-[#e41f05] text-white rounded-lg">See Books</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCategories;