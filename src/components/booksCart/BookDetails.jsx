import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { NavLink, useParams } from "react-router-dom";
import Container from "../ui/Container";
import bannerImg from "../../assets/images/banner/c-banner.jpg"
import { BsArrowRightShort } from "react-icons/bs";



const BookDetails = () => {
    // const data = useLoaderData()
    // const [state, setState] = useState(data)
    const { user } = useAuth()
    const axios = useAxios()
    const { email } = user;
    const params = useParams()
    console.log(params)

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["book"],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/api/v1/book/${params.id}`)
            return await data.json();
        }

    })
    if (isLoading) {
        return
    }

    console.log(data);

    const handleBorrow = async (event) => {
        event.preventDefault();
        const borrowDate = event.target.borrowDate.value;
        const returnDate = event.target.returnDate.value;
        const date = { borrowDate, returnDate }

        axios.post('/user/book-borrow', {
            email,
            date,
            data,
        })
            .then(res => {
                if (res) {
                    refetch()
                }
            })



    };
    return (
        <div>
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-8 text-5xl font-bold text-black ">Single Books</h1>
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
                <div className="flex gap-10">
                    <img src={data.image} alt="" />
                    <div>
                        <h1>Book Name: {data.bookName}</h1>
                        <h2>Category: {data.bookCategory}</h2>
                        <p>Author Name: {data.authorName}</p>
                        <p>Quantity: {data.bookQuantity}</p>
                        <p>Rating: {data.rating}</p>
                        <div className="mt-5">
                            <button className="px-4 py-3 bg-[#e41f05] text-white rounded-lg font-medium mr-4">Read More</button>
                            <button disabled={data.bookQuantity === 0} className="px-4 py-3 bg-[#e41f05] text-white rounded-lg font-medium" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <form onSubmit={handleBorrow}>
                                        <div className="flex flex-col mb-3">
                                            <label htmlFor="" className="text-gray-700 font-medium mb-2 pl-1">Borrow Date</label>
                                            <input className="border px-2 py-2 rounded-lg" type="date" name="borrowDate" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="" className="text-gray-700 font-medium mb-2 pl-1">Return Date</label>
                                            <input className="border px-2 py-2 rounded-lg" type="date" name="returnDate" />
                                        </div>

                                        <input method="dialog" className=" px-4 py-3 cursor-pointer bg-[#e41f05] text-white rounded-lg font-medium mt-4 w-full" type="submit" value="Submit" onClick={() => document.getElementById('my_modal_5').close()} />
                                    </form>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BookDetails;