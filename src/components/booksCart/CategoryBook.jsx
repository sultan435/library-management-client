import { Link, NavLink, useLoaderData } from "react-router-dom";
import Container from "../ui/Container";
import banner from '../../assets/images/banner/c-banner.jpg'
import { BsArrowRightShort } from "react-icons/bs";



const CategoryBook = () => {
    const book = useLoaderData()

    return (
        <div>
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-8 text-5xl font-bold text-black ">Category <span className="text-[#e41f05]">Books</span></h1>
                        <div className="border-2 border-[#e41f05] w-24 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 py-5 flex justify-center items-center mb-16">
                <NavLink
                    to="/"
                    className="hover:text-[#e41f05] font-medium uppercase"
                >
                    Home
                </NavLink>
                <BsArrowRightShort className="text-2xl mx-1" />
                <NavLink
                    to="/addBook"
                    className="hover:text-[#e41f05] font-medium uppercase"
                >
                    Add Book
                </NavLink>
            </div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 mb-20">
                    {
                        book.map(items => <div key={items._id} className="bg-slate-100 shadow-xl p-8 rounded-lg hover:-translate-y-2 overflow-hidden transition duration-200">
                            <figure><img className="h-72 w-full object-cover rounded-lg shadow-lg " src={items.image} alt="Shoes" /></figure>
                            <div className="">
                                <h2 className="text-2xl font-bold mt-2">{items.bookName}</h2>
                                <p className="text-xl font-semibold">{items.bookCategory}</p>
                                <p className="font-medium">Quantity: {items.bookQuantity}</p>
                                <div className="flex justify-between items-center">
                                    <p>rating:{items.rating}</p>
                                    <div className="">
                                        <Link to={`/book-details/${items._id}`} className="bg-[#ff3115] px-4 py-2 rounded-full text-white text-lg font-medium">Books Details</Link >
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </div>

    );
};

export default CategoryBook;