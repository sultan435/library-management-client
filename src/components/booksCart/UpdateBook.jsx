import { NavLink, useLoaderData } from "react-router-dom";
// import Title from "../ui/Title";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { BsArrowRightShort } from "react-icons/bs";
import bannerImage from '../../assets/images/banner/c-banner.jpg'

const UpdateBook = () => {

    const axios = useAxios()

    const getCategories = async () => {
        const res = await axios.get('/categories')
        return res;
    };

    const { data: categories } = useQuery({
        queryKey: ["category"],
        queryFn: getCategories,
    })
    console.log(categories);

    const loaderData = useLoaderData()
    const {bookName, authorName, bookCategory, bookDescription, bookQuantity, image, rating, _id} =loaderData;

    const handleUpdateBook =async (e) =>{
        e.preventDefault(e)
        const form = e.target;
        const book = {      
            bookName: form.name?.value || "not-Given",
            bookCategory: form.bookCategory?.value || "not-Given",
            authorName: form.authorName?.value || "not-Given",
            bookQuantity: form.bookQuantity?.value || "not-Given",
            image: form.image?.value || "not-Given",
            rating: form.rating?.value || "not-Given",
            bookDescription: form.bookDescription?.value || "not-Given",    
        }
        console.log(book)

        axios.put(`/books/book-update/${_id}`, book)
        .then(res => console.log(res.data))
    }

    return (
        <div>
          <div className="hero h-[350px]" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-8 text-5xl font-bold text-black ">Update <span className="text-[#e41f05]">Book</span></h1>
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
                    to="/borrowed"
                    className="hover:text-[#e41f05] font-medium uppercase"
                >
                    Borrow Book
                </NavLink>
            </div>
            <div className="">
                <div className=' py-16 px-4 lg:px-28 max-w-screen-xl mx-auto '>
                    <h1 className='text-5xl text-[#374151] mb-8 text-center font-semibold'>Update <span className="text-[#e41f05]">Book</span></h1>
                    <form onSubmit={handleUpdateBook} className='mt-10'>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Name</span>
                                </label>
                                <label>
                                    <input type="text" defaultValue={bookName} name='name' className="border rounded-lg shadow-md py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Category Name</span>
                                </label>
                                <select name="bookCategory" className="border rounded-lg shadow-md py-3 px-4 bg-white my-2 w-full">
                                    
                                    {
                                        categories?.data?.map((items) => <option key={items._id} defaultValue={items.bookCategory}>{bookCategory}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Author Name</span>
                                </label>
                                <label>
                                    <input type="text" name='authorName' defaultValue={authorName} className="border shadow-md rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Quantity</span>
                                </label>
                                <label>
                                    <input type="text" name='bookQuantity' defaultValue={bookQuantity}  className="border shadow-md rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Book Image</span>
                                </label>
                                <label>
                                    <input type="text" name='image' defaultValue={image} className="border rounded-lg shadow-md py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Rating</span>
                                </label>
                                <label>
                                    <input type="text"  name='rating' defaultValue={rating} className="border rounded-lg shadow-md py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className=''>
                            <div className='w-full'>
                                <label >
                                    <span className="text-lg pl-1">Short Description</span>
                                </label>
                                <textarea className="w-full border shadow-md rounded-lg py-3 px-4 bg-white my-2" defaultValue={bookDescription} name="bookDescription" id="" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Update Book" className='py-3 mt-4 cursor-pointer rounded-md shadow-md w-full border bg-[#e41f05]  text-white text-lg font-semibold' />
                    </form>
                </div>
            </div>
        
        </div>
    );
};

export default UpdateBook;