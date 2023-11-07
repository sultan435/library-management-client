import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
// import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";
import BooksCart from "../components/booksCart/BooksCart";
import { useState } from "react";
import Container from "../components/ui/Container";
import banner from '../assets/images/banner/c-banner.jpg'
import { NavLink } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";



const AllBook = () => {
    const axios = useAxios()
    const [bookQuantity, setBookQuantity] = useState('')
    console.log(bookQuantity)


    const getAllBooks = async () => {
        const res = await axios.get(`/books?sortField=bookQuantity&sortOrder=${bookQuantity}`)
        return res
    }

    const { data: books, isLoading } = useQuery({
        queryKey: ["addBooks", bookQuantity],
        queryFn: getAllBooks,
    })
    // console.log(books?.data);
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
                <div>
                    <select name="categoryName" onChange={(e) => setBookQuantity(e.target.value)} className="border rounded-lg py-3 px-10 bg-white my-2">
                        <option disabled selected>Choose one</option>
                        <option value="asc">From low to high</option>
                        <option value="desc">From high to low</option>
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-6 py-10">

                    {
                        books?.data?.result.map(book => <BooksCart key={book._id} books={book}></BooksCart>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllBook;