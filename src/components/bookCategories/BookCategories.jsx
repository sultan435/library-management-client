import { Link } from "react-router-dom";

const BookCategories = ({ category }) => {
    const { bookCategory, image } = category

    return (
      
            <div className=" bg-base-100 shadow-xl rounded-lg hover:-translate-y-2 overflow-hidden transition duration-200">

                <div className="shadow-xl rounded-lg relative ">
                    <img className="h-80 hover:-mt-2 rounded-t-lg w-full transition-all z-10 hover:-z-10 duration-300" src={image} alt="" />
                    <div className="absolute flex flex-col justify-center items-center w-full h-full bg-opacity-60 bg-black opacity-0 hover:opacity-100 duration-75 inset-0 p-2">

                        <Link to={`bookCart/${bookCategory}`}>
                            <button className="py-3 px-4 text-white text-xl  border-2 shadow-lg border-[#e41f05] rounded-full">See Books</button>
                        </Link>
                    </div>
                </div>              
                <p className="text-black font-semibold text-xl my-4 text-center hover:text-[#e41f05]">{bookCategory}</p>            
            </div>
      
    );
};

export default BookCategories;