import Container from "../ui/Container";
import img from '../../assets/images/logo.png'
import { FaRegPaperPlane } from "react-icons/fa";
import new1 from '../../assets/images/post-1.jpg'
import new2 from '../../assets/images/post-2.jpg'


const Footer = () => {
    return (
        <div className="bg-[#2a2a2a]">
            <Container>
                <div className="flex justify-center items-center flex-col md:flex-row md:items-start md:justify-between space-y-10 md:space-y-0  py-20">
                    <div>
                        <h3 className="mb-10 text-2xl text-white font-bold">Get In Touch</h3>
                        <div className="space-y-7">
                            <div>
                                <h3 className='text-gray-500 font-medium text-sm'>FREE CONSULTATION</h3>
                                <p className="text-white font-medium hover:text-[#76bd42]">+1 718-999-3939</p>
                            </div>
                            <div>
                                <h3 className='text-gray-500 font-medium text-sm'>ADDRESS</h3>
                                <p className="text-white font-medium hover:text-[#76bd42]">514 S. Magnolia St. <br /> Orlando, FL 32806</p>
                            </div>
                            <div>
                                <h3 className='text-gray-500 font-medium text-sm'>E-MAIL</h3>
                                <p className="text-white font-medium hover:text-[#76bd42]">info@demolink.org</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div>
                            <h3 className="mb-10 text-2xl text-white font-bold text-center">Popular News</h3>
                        </div>
                        <div className="">
                            <div>
                                <div className="flex items-center gap-8 mb-7">
                                    <img src={new1} alt="" />
                                    <div className="text-white space-y-2">
                                        <h3 className="hover:text-[#76bd42]">Top 10 Library Events to <br /> Visit This Month</h3>
                                        <p><span className="text-[#76bd42]">April 20, 2018</span></p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <img src={new2} alt="" />
                                    <div className="text-white space-y-2">
                                        <h3 className="hover:text-[#76bd42]">Best Books for Your Children</h3>
                                        <p><span className="text-[#76bd42]">April 20, 2018</span></p>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-10">
                                <h3 className='text-gray-500 font-medium text-sm'>Sign up today for tips and latest news</h3>
                                <div>
                                    <div className="pt-3">
                                        <div className="flex">
                                            <input type="email" name="" placeholder="Enter your E-mail" className="bg-[#4a4a4a] px-4 py-3" id="" />
                                            <button className="bg-[#76bd42] px-5 py-3">
                                                <FaRegPaperPlane className="text-2xl text-white" />
                                            </button>
                                        </div>
                                        {/* <div className="px-4 py-3 bg-[#4a4a4a]">
                                            <input type="text" placeholder="Enter your E-mail" className="" />
                                            <button className="">
                                                <FaRegPaperPlane/>
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="flex items-center mb-7">
                            <img className="w-14" src={img} alt="" />
                            <div className="flex flex-col items-start">
                                <p className="text-2xl font-bold text-white">Libuno</p>
                                <span className="text-xs text-gray-500 font-medium">PUBLIC LIBRARY</span>
                            </div>
                        </div>
                        <div>
                            <div className="mb-7">
                                <p className=" text-gray-500 font-medium text-sm">Providing access to the best <br /> books for children and adults.</p>
                            </div>
                            <div className="flex gap-10 mb-14">
                                <div className="text-white font-bold space-y-3 list-none">
                                    <li className="hover:text-[#76bd42]">ABOUT US</li>
                                    <li className="hover:text-[#76bd42]">SERVICES</li>
                                    <li className="hover:text-[#76bd42]">OUT TEAM</li>
                                    <li className="hover:text-[#76bd42]">PROJECTS</li>
                                </div>
                                <div className="text-white font-bold space-y-3 list-none">
                                    <li className="hover:text-[#76bd42]">NEWS</li>
                                    <li className="hover:text-[#76bd42]">CONTACTS</li>
                                    <li className="hover:text-[#76bd42]">FAQ</li>
                                    <li className="hover:text-[#76bd42]">SHOP</li>
                                </div>

                            </div>
                            <div className=" text-gray-500 font-medium text-sm">
                                <span><p>&copy 2023 Libumo.</p></span>
                                <p>Privacy policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;