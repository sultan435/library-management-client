import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { Link, NavLink, useParams } from "react-router-dom";
import Container from "../ui/Container";
import bannerImg from "../../assets/images/banner/c-banner.jpg"

import { BsFacebook,BsArrowRightShort, BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";




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
            const data = await fetch(`https://library-management-server-gamma.vercel.app/api/v1/book/${params.id}`)
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
                        <h1 className="mb-8 text-5xl font-bold text-black ">Single <span className="text-[#e41f05]">Book</span></h1>
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
                    to="/borrowed"
                    className="hover:text-[#e41f05] font-medium uppercase"
                >
                    Borrow Book
                </NavLink>
            </div>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    <div className="col-span-1 px-20 py-10 bg-slate-100">
                        <img className="w-full h-[500px] rounded-lg" src={data.image} alt="" />
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-semibold">{data.bookName}</h1>
                        <p className="text-2xl font-medium my-5">by <span className="text-[#e41f05]">{data.authorName}</span></p>
                        <p className="text-gray-500 font-medium mb-4">{data.bookDescription.slice(3, 200)}</p>
                        <div className="border mb-10"></div>
                        <h2 className="text-[#e41f05]">Categories: {data.bookCategory}</h2>
                        <p className="font-normal my-2 hover:text-[#e41f05]">Quantity: {data.bookQuantity}</p>
                        <p>Rating: {data.rating}</p>
                        <div className="mt-5">

                            <button disabled={data.bookQuantity === 0} className="px-3 lg:px-5 py-2 rounded-lg lg:py-7 bg-[#ff3115] hover:-translate-x-2 overflow-hidden transition duration-200 hover:bg-[#e41f05]  cursor-pointer text-2xl text-white font-medium" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrowed Book</button>
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
                            <Link to={`/book-readMore/${data._id}`}>
                            <button className="px-3 lg:px-5 py-2 rounded-lg lg:py-7 bg-[#ff3115] hover:bg-[#e41f05] hover:translate-x-2 overflow-hidden transition duration-200 text-2xl cursor-pointer text-white font-medium ml-4">Read More</button>
                            </Link>
                            <div className="border my-10"></div>
                            <div>
                                <h3 className="font-medium mb-1">Share</h3>
                                <div className='flex items-center mb-2 md:mb-0 gap-3'>
                                    <span className='cursor-pointer hover:text-[#e41f05]'><BsFacebook /></span>
                                    <span className='cursor-pointer hover:text-[#e41f05]'><AiFillTwitterCircle /></span>
                                    <span className='cursor-pointer hover:text-[#e41f05]'><BsPinterest /></span>
                                    <span className='text-xl cursor-pointer hover:text-[#e41f05]'><AiOutlineInstagram /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BookDetails;