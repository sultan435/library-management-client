import Title from "../components/ui/Title";
import image from "../assets/images/banner/side-pic.jpg"
import Container from "../components/ui/Container";

const About = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-16 lg:mb-0 lg:py-16  gap-5">
                <div >
                    <Title>
                        <h1>About Us</h1>
                    </Title>
                    <p className="pt-6 text-center text-gray-700">
                        Learning is a lifetime journey. To make this journey enjoyable, we, Noble Library, situated at Malad West, Mumbai, Maharashtra, provide an extensive list of books that you will find informative and mind-changing all ata once.Reading is the best way to pass time and what better way than to borrow/purchase books from our library and liberate your mind altogether. we provide a safe, comfortable and friendly environment that enables learning and advancement of knowledge, and promotes discovery and scholarship. Sit down with a cup of coffee and unwind at our book store with a book of your choice!
                    </p>
                </div>
                <div>
                    <img className="rounded-lg" src={image} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default About;