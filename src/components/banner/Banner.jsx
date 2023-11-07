import img1 from '../../assets/images/banner/slide-1-1697x605.jpg'
import img2 from '../../assets/images/banner/slide-2-1697x605.jpg'
import img3 from '../../assets/images/banner/slide-3-1697x605.jpg'

const Banner = () => {
    return (
        <div className="carousel h-[400px] lg:h-[650px] w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full bg-cover" />
            <div className="absolute h-full w-full flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white space-y-3 text-center'>
                <h2 className='text-4xl font-bold uppercase '>Welcome to <br /><span className='text-6xl py-1'>our library</span></h2>
                    <p className='text-center text-lg text-white font-semibold py-4'>The Library Is A Place For Everyone To Explore The World Of Reading</p>
                    <div>
                        <button className="bg-[#ff3115] px-8 py-3 rounded-full text-white text-lg font-medium">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full bg-cover" />
            <div className="absolute h-full w-full flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white space-y-3 text-center'>
                <h2 className='text-4xl font-bold uppercase '>Welcome to <br /><span className='text-6xl py-1'>our library</span></h2>
                <p className='text-center text-lg text-white font-semibold py-4'>The Library Is A Place For Everyone To Explore The World Of Reading</p>
                    <div>
                        <button className="bg-[#ff3115] px-8 py-3 rounded-full text-white text-lg font-medium">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full bg-cover" />
            <div className="absolute h-full w-full flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white space-y-3 text-center'>
                <h2 className='text-4xl font-bold uppercase '>Welcome to <br /><span className='text-6xl py-1'>our library</span></h2>
                <p className='text-center text-lg text-white font-semibold py-4'>The Library Is A Place For Everyone To Explore The World Of Reading</p>
                    <div>
                        <button className="bg-[#ff3115] px-8 py-3 rounded-full text-white text-lg font-medium">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Banner;