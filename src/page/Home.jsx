import Banner from "../components/banner/Banner";
import img from '../assets/images/banner/bg-index.jpg'
import { GrNext } from "react-icons/gr";
import BookCategories from "../components/bookCategories/BookCategories";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Title from "../components/ui/Title";
import Container from "../components/ui/Container";


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
    // console.log(categories);

    // if (isLoading) {
    //     <p>loading...</p>
    // }
    return (
        <div>
            <Banner></Banner>
            <Container>
                <Title>
                    <h1>Books Categories</h1>
                </Title>
                <div className="text-center text-lg text-gray-700 font-semibold py-4">
                    <p className="pb-4">Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed nec molestie justo.</p>
                    <div className="border-2 border-[#e41f05] w-28 rounded-lg mx-auto"></div>
                </div>
                <div className="grid grid-cols-4 gap-4 px-4 py-16">

                    {
                        categories?.data?.map((items) => <BookCategories key={items._id} category={items}></BookCategories>)
                    }
                </div>

            </Container>
            <div className="grid lg:grid-cols-12 grid-cols-1">
                <div className="lg:col-span-6">
                    <img src={img} alt="" />
                </div>
                <div className="lg:col-span-4 flex flex-col justify-center px-8 space-y-8">
                    <h1 className="text-4xl font-bold ">Join Our Readership Community</h1>
                    <p className="font-medium text-gray-500">We are always glad to welcome new library members to our community, which unites writers, poets, readers, and book enthusiasts.</p>
                    <div className="flex">
                        <button className="bg-[#76bd42] hover:bg-[#80c74c] px-10 py-5 text-white font-semibold">READ MORE</button>
                        <button className="bg-[#80c74c] hover:bg-[#76bd42] px-5 py-3">
                            <GrNext className="text-2xl text-white" />
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-2 bg-[#2a2a2a] grid grid-rows-3">
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
        </div>
    );
};

export default Home;