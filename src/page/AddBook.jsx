import useAxios from "../hooks/useAxios";
import bannerBook from '../assets/images/banner/c-banner.jpg'
import { NavLink } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import Swal from "sweetalert2";


const AddBook = () => {
    const axios = useAxios()

    const handleAddBook = (e) => {
        e.preventDefault()
        const form = e.target;
        const book = {      
            bookName: form.name?.value || "not-Given",
            bookCategory: form.bookCategory?.value || "not-Given",
            authorName: form.authorName?.value || "not-Given",
            bookQuantity: form.bookQuantity?.value || "not-Given",
            image: form.bookImage?.value || "not-Given",
            rating: form.rating?.value || "not-Given",
            bookDescription: form.bookDescription?.value || "not-Given",    
        }
        // console.log(book)
        // const newlyBook = { bookName, categoryName, authorName, quantity, bookImage, rating, description };
        axios.post('/books/create-book', book)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    title: "Book Add",
                    text: "New Book Added Successfully",
                    icon: "success"
                });
            })
    }


    return (
        <div>
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${bannerBook})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-8 text-5xl font-bold text-black ">New <span className="text-[#e41f05]">Book</span></h1>
                        <div className="border-2 border-[#e41f05] w-24 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 py-5 flex justify-center items-center">
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
            <div className="">
                <div className=' py-16 px-4 lg:px-28 max-w-screen-xl mx-auto '>
                    <h1 className='text-5xl text-[#374151] mb-8 text-center font-semibold'>Add New <span className="text-[#e41f05]">Book</span></h1>
                    <form onSubmit={handleAddBook} className='mt-10'>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Name</span>
                                </label>
                                <label>
                                    <input type="text" name='name' placeholder="Enter Name" className="border rounded-lg py-3 px-4 bg-white my-2 w-full shadow-md" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Category Name</span>
                                </label>
                                <select name="bookCategory"  className="border rounded-lg py-3 px-4 shadow-md bg-white my-2 w-full">
                                    <option disabled selected>Choose one</option>
                                    <option defaultValue="Novel">Novel</option>
                                    <option defaultValue="Travel">Travel</option>
                                    <option defaultValue="Drama">Drama</option>
                                    <option defaultValue="History">History</option>
                                </select>
                            </div>
                        </div>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Author Name</span>
                                </label>
                                <label>
                                    <input type="text" name='authorName' placeholder="Enter Author Name" className="border shadow-md rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Quantity</span>
                                </label>
                                <label>
                                    <input type="text"  name='bookQuantity' placeholder="Enter Quantity" className="border shadow-md rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Book Image</span>
                                </label>
                                <label>
                                    <input type="text" name='bookImage' placeholder="Enter Image Url" className="border shadow-md rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Rating</span>
                                </label>
                                <label>
                                    <input type="text"  name='rating' placeholder="Enter Rating" className="border shadow-md rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className=''>
                            <div className='w-full'>
                                <label >
                                    <span className="text-lg pl-1">Short Description</span>
                                </label>
                                <textarea  className="w-full border shadow-md rounded-lg py-3 px-4 bg-white my-2" name="bookDescription" id="" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Add Book" className='py-3 mt-4 cursor-pointer shadow-md rounded-md w-full border bg-[#e41f05]  text-white text-lg font-semibold' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;