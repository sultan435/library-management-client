import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
// import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";
import BooksCart from "../components/booksCart/BooksCart";
import { useState } from "react";
import Container from "../components/ui/Container";



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
           
        <Container>

           
            <div>
                <select name="categoryName" onChange={(e)=> setBookQuantity(e.target.value)}  className="border rounded-lg py-3 px-10 bg-white my-2">
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
       
    );
};

export default AllBook;