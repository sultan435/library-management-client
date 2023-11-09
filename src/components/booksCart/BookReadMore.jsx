import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import Container from "../ui/Container";
import img from '../../assets/images/banner/c-banner.jpg'


const BookReadMore = () => {
    const params = useParams()
    const { data,isLoading } = useQuery({
        queryKey: ["readMore"],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/api/v1/book/${params.id}`)
            return await data.json();
        }
    })
    if(isLoading){
        return
    }
    return (
        <div>
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${img})` }}>
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
            </div>
            <Container>

                <div className="grid grid-cols-3 gap-10 mb-16">
                    <div className="col-span-1">
                        <img className="w-full mx-auto rounded-lg" src={data.image} alt="" />
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-5xl font-semibold">{data.bookName}</h1>
                        <p className="text-2xl font-medium my-5 ">by <span className="text-[#e41f05]">{data.authorName}</span></p>
                        <p className="text-3xl mb-3 font-semibold">Book Content</p>
                        <p className="text-gray-500 font-medium mb-4">{data.bookDescription}</p>
                        <div className="border mb-10"></div>
                        <div>
                            <h1 className="text-3xl font-semibold mb-3 ">Edition Details</h1>
                            <div>
                                <p className="text-gray-500 font-medium">Format:Paperback</p>
                                <p className="text-gray-500 font-medium my-1">Language:English</p>
                                <p className="text-gray-500 font-medium">Release Date:February 1997</p>
                                <p className="text-gray-500 font-medium m-1">Publisher:240 Pages</p>
                                <p className="text-gray-500 font-medium">Dimensions:0.6 x 5.6 x 8.0</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BookReadMore;