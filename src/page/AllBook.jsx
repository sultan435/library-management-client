import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Loading from "../components/ui/Loading";
import BooksCart from "../components/booksCart/BooksCart";


const AllBook = () => {
    const axios = useAxios()
    const {isLoading} = useAuth()

    if(isLoading){
        <Loading></Loading>
    }
    const getAllBooks =async ()=>{
        const res = await axios.get('/books')
        return res
    }

    const {data: books} = useQuery({
        queryKey:["addBooks"],
        queryFn:getAllBooks,
    })
    console.log(books?.data);

    return (
        <div className="grid grid-cols-3 gap-6 py-10">
            {
                books?.data.map(book=> <BooksCart key={book._id} books={book}></BooksCart>)
            }
        </div>
    );
};

export default AllBook;