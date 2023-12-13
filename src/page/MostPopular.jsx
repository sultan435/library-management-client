import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import img1 from "../assets/images/banner/page1_pic1.jpg"
import img2 from "../assets/images/banner/page1_pic2.jpg"
import img3 from "../assets/images/banner/page1_pic3.jpg"
import img4 from "../assets/images/banner/page1_pic4.jpg"

const MostPopular = () => {
    return (
        <Container>
            <div>
                <Title>
                    <h1 ><span className="text-[#e41f05]">Most</span> Popular</h1>
                </Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    <div>
                        <img className=" rounded-lg w-full bg-cover object-cover" src={img1} alt="" />
                        <h1 className="text-xl text-gray-800 font-semibold mb-2 pt-4 uppercase">the road</h1>
                        <p className="text-gray-700 mb-3 uppercase">by cormac mccarthy</p>
                    </div>
                    <div>
                        <img className=" rounded-lg w-full bg-cover object-cover" src={img2} alt="" />
                        <h1 className="text-xl text-gray-800 font-semibold mb-2 pt-4 uppercase">INTERPRETER OF MALADIE</h1>
                        <p className="text-gray-700 mb-3 uppercase">BY JHUMPA LAHIRI</p>
                    </div>
                    <div>
                        <img className=" rounded-lg w-full bg-cover object-cover" src={img3} alt="" />
                        <h1 className="text-xl text-gray-800 font-semibold mb-2 pt-4 uppercase">the road</h1>
                        <p className="text-gray-700 mb-3 uppercase">by cormac mccarthy</p>
                    </div>
                    <div>
                        <img className=" rounded-lg w-full bg-cover object-cover" src={img4} alt="" />
                        <h1 className="text-xl text-gray-800 font-semibold mb-2 pt-4 uppercase">INTERPRETER OF MALADIE</h1>
                        <p className="text-gray-700 mb-3 uppercase">BY JHUMPA LAHIRI</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MostPopular;