import image from "../assets/images/banner/side-pic.jpg"
import Container from "../components/ui/Container";
import { BsCheck } from "react-icons/bs";
import img from '../assets/images/banner/ct5.jpg'

const About = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-16  gap-5">
                <div className="col-span-1">
                    <img className="rounded-lg w-full h-full" src={image} alt="" />
                </div>
                <div className="col-span-2">
                    <h1 className="text-[#e41f05] font-bold pb-1">About Us</h1>
                    <p className="text-3xl font-bold uppercase">WELCOME TO Libumo library</p>
                    <p className="text-left text-gray-700 pt-8">
                        Learning is a lifetime journey. To make this journey enjoyable, we, Noble Library, situated at Malad West, Mumbai, Maharashtra, provide an extensive list of books that you will find informative and mind-changing all ata once.Reading is the best way to pass time and what better way than to borrow/purchase books from our library and liberate your mind altogether. we provide a safe, comfortable and friendly environment that enables learning and advancement of knowledge.
                    </p>
                    <div className="grid grid-cols-2 w-1/2 mt-5">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 ">
                                <div >
                                    <div className="text-[#e41f05] border rounded-full border-[#e41f05] text-sm"><BsCheck /></div>
                                </div>
                                <p className="cursor-pointer  hover:text-[#e41f05] text-sm">Silent Reading</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="text-[#e41f05] border rounded-full border-[#e41f05] text-sm"><BsCheck /></div>
                                </div>
                                <p className="cursor-pointer hover:text-[#e41f05] text-sm">Book Rentals</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="text-[#e41f05] border rounded-full border-[#e41f05] text-sm"><BsCheck /></div>
                                </div>
                                <p className="cursor-pointer hover:text-[#e41f05] text-sm">Books & Libraries</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="text-[#e41f05] border rounded-full border-[#e41f05] text-sm"><BsCheck /></div>
                                </div>
                                <p className="cursor-pointer hover:text-[#e41f05] text-sm">Certified Teaches</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="text-[#e41f05] border rounded-full border-[#e41f05] text-sm"><BsCheck /></div>
                                </div>
                                <p className="cursor-pointer hover:text-[#e41f05] text-sm">Online Course</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <div className="text-[#e41f05] border rounded-full border-[#e41f05] text-sm"><BsCheck /></div>
                                </div>
                                <p className="cursor-pointer hover:text-[#e41f05] text-sm">Lab Facilities</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-10">
                        <img className="rounded-full w-16 h-16" src={img} alt="" />
                        <div>
                            <h1 className="text-xl font-semibold">Rashid Mahabub</h1>
                            <p className="text-sm">Chairman and founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;