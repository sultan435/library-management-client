import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
// import BorrowBookCart from "../components/BorrowBookCart/BorrowBookCart";
import useAuth from "../hooks/useAuth";
import Container from "../components/ui/Container";


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
    console.log(borrowBooks);

    const handleRemove = (_id, itemId) => {
        // console.log(_id)
        axios.delete(`/user/cancel-borrow/${_id}/${itemId}`)
            .then(res => {
                if (res?.data?.deletedCount > 0) {
                    alert("deleted success")
                    refetch()
                }
            })
    }

    return (
        <Container>
            <div className="py-20">
                <div className="overflow-x-auto">
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
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>


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
                                    <td>

                                        {book.email}
                                    </td>
                                    <td>
                                        {/* <button className="btn btn-secondary">Remove</button> */}
                                        {book.date.borrowDate}
                                    </td>
                                    <td>
                                        {book.date.returnDate}
                                    </td>
                                    <td>
                                        <button onClick={() => handleRemove(book._id, book.data._id)} className="btn btn-secondary">Remove</button>
                                    </td>
                                </tr>

                                )
                            }

                            {/* {
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
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            )
                        } */}





                        </tbody>

                    </table>
                </div>
            </div>
        </Container>
    );
};

export default BorrowedBook;