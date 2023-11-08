import Banner from "../components/banner/Banner";
import img from '../assets/images/banner/bg-index.jpg'
import { GrNext } from "react-icons/gr";
import BookCategories from "../components/bookCategories/BookCategories";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Title from "../components/ui/Title";
import Container from "../components/ui/Container";
import About from "./About";
import Services from "../components/Services";


const Home = () => {
    const axios = useAxios()

    const getCategories = async () => {
        const res = await axios.get('/categories')
        return res;
    };
    const { data: categories } = useQuery({
        queryKey: ["category"],
        queryFn: getCategories,
    })
    return (
        <div>
            <Banner></Banner>
            <Container>
                <Title>
                    <h1>Books Categories</h1>
                </Title>
                <div className="text-center text-lg text-gray-700 font-semibold py-4">
                    <p className="pb-4">The Library is a place for everyone to explore the world of reading</p>
                    <div className="border-2 border-[#e41f05] w-28 rounded-lg mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-4 py-16">

                    {
                        categories?.data?.map((items) => <BookCategories key={items._id} category={items}></BookCategories>)
                    }
                </div>

            </Container>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6">
                <div className="col-span-3">
                    <img className="h-full" src={img} alt="" />
                </div>
                <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-8 py-16 lg:ml-6">
                    <h1 className="text-4xl font-bold text-center lg:text-left">A Few Words About <br />Our Library</h1>
                    <p className="font-medium text-gray-500 text-center lg:text-left">Libumo Library was founded in 1980 to provide access to books, the world’s most valuable source of knowledge</p>
                    <div className="flex">
                        <button className="bg-[#ff3115] px-10 py-5 text-white font-semibold">READ MORE</button>
                        <button className="bg-[#aa200d] px-5 py-3">
                            <GrNext className="text-2xl text-white" />
                        </button>
                    </div>
                </div>
                <div className="hidden lg:col-span-1 bg-[#2a2a2a] lg:grid grid-rows-3">
                    <div className="flex items-center justify-center hover:bg-[#414141]">
                        <span className="text-white"><a href="">ABOUT US</a></span>
                    </div>
                    <div className=" flex items-center justify-center border border-gray-500 hover:bg-[#414141]">
                        <span className="text-white"><a href="">OUR GOALS</a></span>
                    </div>
                    <div className=" flex items-center justify-center hover:bg-[#414141]">
                        <span className="text-white"><a href="">JOIN THE LIBRARY</a></span>
                    </div>
                </div>
            </div>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;