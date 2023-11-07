import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Loading from "../components/ui/Loading";
import BooksCart from "../components/booksCart/BooksCart";
import {  useState } from "react";
import Container from "../components/ui/Container";
import banner from '../assets/images/banner/c-banner.jpg'
import { NavLink } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const AllBook = () => {
    const axios = useAxios()
    const [bookQuantity, setBookQuantity] = useState('')
    const [quantity, setQuantity] = useState('')
   
    const getAllBooks = async () => {
        const res = await axios.get(`/books?sortField=bookQuantity&sortOrder=${bookQuantity}&quantity=${quantity}`)
        return res
    }

    const { data: books, isLoading } = useQuery({
        queryKey: ["addBooks", bookQuantity,quantity],
        queryFn: getAllBooks,
    })
    
    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-8 text-5xl font-bold text-black ">ALL Category <span className="text-[#e41f05]">Book</span></h1>
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
                    to="/allBook"
                    className="hover:text-[#e41f05] font-medium uppercase"
                >
                    All Book
                </NavLink>
            </div>
            <Container>
                <div className="flex flex-col  items-center justify-end gap-4 pt-10">
                    <div className="">
                        <div><h1 className="text-xl font-semibold mr-3 text-center">SORT</h1></div>
                        <select name="categoryName" onChange={(e) => setBookQuantity(e.target.value)} className="border rounded-lg py-3 px-10 bg-white my-2">
                            <option disabled selected>Choose one</option>
                            <option value="asc">From low to high</option>
                            <option value="desc">From high to low</option>
                        </select>
                    </div>
                    <div>
                        <button type="button" onClick={()=>setQuantity("bookQuantity")} className="py-2 px-5 text-white text-lg font-semibold shadow-lg bg-[#e41f05] rounded-lg border border-[#e41f05]">Available book</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 py-10">

                    {
                        books?.data?.result?.map(book => <BooksCart key={book._id} books={book}></BooksCart>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllBook;