import { useState } from "react";
import useAxios from "../hooks/useAxios";


const AddBook = () => {
    const [bookName, setBookName] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [bookImage, setBookImage] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    

    const axios = useAxios()

    const handleAddBook = (e) =>{
        e.preventDefault()
        const book = {bookName,categoryName,authorName,quantity,bookImage,rating,description};

        axios.post('/books/create-book',book)
        .then(res => console.log(res.data))
    }

    return (
        <div>
            <div className="bg-[#f2f2f2]">
                <div className=' py-16 px-4 lg:px-28 max-w-screen-xl mx-auto '>
                    <h1 className='text-5xl text-[#374151] mb-8 text-center font-semibold'>Add New <span className="text-[#e41f05]">Book</span></h1>
                    <form onSubmit={handleAddBook} className='mt-10'>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Name</span>
                                </label>
                                <label>
                                    <input type="text" onBlur={(e)=>setBookName(e.target.value)} name='name' placeholder="Enter Name" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Category Name</span>
                                </label>
                                <select name="categoryName" onBlur={(e)=>setCategoryName(e.target.value)} className="border rounded-lg py-3 px-4 bg-white my-2 w-full">
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
                                    <input type="text" onBlur={(e)=>setAuthorName(e.target.value)} name='authorName' placeholder="Enter Author Name" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className="text-lg pl-1">Quantity</span>
                                </label>
                                <label>
                                    <input type="text" onBlur={(e)=>setQuantity(e.target.value)} name='quantity' placeholder="Enter Quantity" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='lg:flex md:flex gap-6'>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Book Image</span>
                                </label>
                                <label>
                                    <input type="text" onBlur={(e)=>setBookImage(e.target.value)} name='bookImage' placeholder="Enter Image Url" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                            <div className='md:w-1/2 lg:w-1/2'>
                                <label >
                                    <span className=" text-lg pl-1">Rating</span>
                                </label>
                                <label>
                                    <input type="text" onBlur={(e)=>setRating(e.target.value)} name='rating' placeholder="Enter Rating" className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                </label>
                            </div>
                        </div>
                        <div className=''>
                            <div className='w-full'>
                                <label >
                                    <span className="text-lg pl-1">Short Description</span>
                                </label>
                                <textarea onBlur={(e)=>setDescription(e.target.value)} className="w-full border rounded-lg py-3 px-4 bg-white my-2" name="description" id="" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Add Book" className='py-3 mt-4 cursor-pointer rounded-md w-full border bg-[#e41f05]  text-white text-lg font-semibold' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;