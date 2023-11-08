import Title from "./ui/Title";
import image1 from '../assets/images/banner/img-1.jpg'
import image2 from '../assets/images/banner/img-2.jpg'
import image3 from '../assets/images/banner/img-3.png'
import image4 from '../assets/images/banner/img-4.png'

import Container from "./ui/Container";

const Services = () => {
    return (
        <Container>
            <div className="pt-6">
                <Title>
                    <h1>Services</h1>
                </Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 pt-10">
                    <div className=" shadow-md p-4 rounded-lg">
                        <img className=" rounded-lg w-full h-[250px] bg-cover object-cover" src={image1} alt="" />
                        <div className="text-center pt-4">
                            <h2 className="text-2xl text-gray-800 font-semibold mb-2">Silent Reading</h2>
                            <p className="text-gray-700 mb-3">One needs silence to read books or to study, our library has special arrangements for the silence zone</p>
                            <button className="py-3 px-6 text-white text-xl font-medium  border-2 shadow-lg bg-[#e41f05] rounded-full">Learn</button>
                        </div>
                    </div>
                    <div className=" shadow-md p-4 rounded-lg">
                        <img className=" rounded-lg w-full h-[250px] bg-cover object-cover" src={image3} alt="" />
                        <div className="text-center pt-4">
                            <h2 className="text-2xl text-gray-800 font-semibold mb-2">Book Rentals</h2>
                            <p className="text-gray-700 mb-3">Apart from reading inside the library, sound proof we also provide facility t rent and return the books in time</p>
                            <button className="py-3 px-6 text-white text-xl font-medium  border-2 shadow-lg bg-[#e41f05] rounded-full">Learn</button>
                        </div>
                    </div>
                    <div className=" shadow-md p-4 rounded-lg">
                        <img className=" rounded-lg w-full h-[250px] bg-cover object-cover" src={image2} alt="" />
                        <div className="text-center pt-4">
                            <h2 className="text-2xl text-gray-800 font-semibold mb-2">Infrastructure</h2>
                            <p className="text-gray-700 mb-3">Modern infrestructure,library,  sound proof, state-of-the-art,and return classrooms that foster lreaning</p>
                            <button className="py-3 px-6 text-white text-xl font-medium  border-2 shadow-lg bg-[#e41f05] rounded-full">Learn</button>
                        </div>
                    </div>
                    <div className=" shadow-md p-4 rounded-lg">
                        <img className=" rounded-lg w-full h-[250px] bg-cover object-cover" src={image4} alt="" />
                        <div className="text-center pt-4">
                            <h2 className="text-2xl text-gray-800 font-semibold mb-2">Categorized Book</h2>
                            <p className="text-gray-700 mb-3">We have excellent collection of books categorized under children, fiction cookbooks etc for easy access</p>
                            <button className="py-3 px-6 text-white text-xl font-medium  border-2 shadow-lg bg-[#e41f05] rounded-full">Learn</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Container>

    );
};

export default Services;