import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Container from "../components/ui/Container";
import bannerBorrow from '../assets/images/banner/c-banner.jpg'
import { NavLink } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import Swal from "sweetalert2";

const BorrowedBook = () => {
    const axios = useAxios()
    const { user } = useAuth()

    const getBorrowBooks = async () => {
        const res = await axios.get(`/user/book-borrow?email=${user?.email}`)
        return res
    }

    const { data: borrowBooks, refetch } = useQuery({
        queryKey: ["borrowBooks"],
        queryFn: getBorrowBooks
    })

    const handleRemove = (_id, itemId) => {
        axios.delete(`/user/cancel-borrow/${_id}/${itemId}`)
            .then(res => {
                if (res?.data?.deletedCount > 0) {
                    Swal.fire({
                        title: "Return",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    refetch()
                }
            })
    }

    return (
        <div>
            <div className="hero h-[200px]" style={{ backgroundImage: `url(${bannerBorrow})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-8 text-5xl font-bold text-black ">Borrowed <span className="text-[#e41f05]">Book</span></h1>
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
            <Container>         
                    <div className="overflow-x-auto py-16 ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Category</th>
                                    <th>Email</th>
                                    <th>BorrowDate</th>
                                    <th>ReturnDate</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    borrowBooks?.data?.map((book) => <tr key={book._id}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={book.data.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{book.data.bookName}</div>
                                                    <div className="text-sm opacity-50">{book.data.authorName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{book.data.bookQuantity}</td>
                                        <td>{book.data.bookCategory}</td>
                                        <td className="text-[#ff3115]">

                                            {book.email}
                                        </td>
                                        <td>
                                            {book.date.borrowDate}
                                        </td>
                                        <td>
                                            {book.date.returnDate}
                                        </td>
                                        <td>
                                            <button onClick={() => handleRemove(book._id, book.data._id)} className="bg-[#ff3115] px-4 py-2 rounded-lg text-white text-lg font-medium">Return</button>
                                        </td>
                                    </tr>

                                    )
                                }
                            </tbody>
                        </table>
                    </div>            
            </Container>
        </div>
    );
};

export default BorrowedBook;