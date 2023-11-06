import img1 from '../../assets/images/banner/slide-1-1697x605.jpg'
import img2 from '../../assets/images/banner/slide-2-1697x605.jpg'
import img3 from '../../assets/images/banner/slide-3-1697x605.jpg'

const Banner = () => {
    return (

        <div className="carousel h-[400px] lg:h-[650px] w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full bg-cover" />
            <div className="absolute  h-full flex items-center bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white space-y-7 lg:w-1/2  pl-20'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Projects</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                <a href="#slide6" className="btn btn-circle mr-4">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
            <div className="absolute bg-gradient-to-r h-full flex items-center from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white space-y-7 lg:w-1/2  pl-20'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Projects</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
            <div className="absolute bg-gradient-to-r h-full flex items-center from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white space-y-7 lg:w-1/2  pl-20'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Projects</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        {/* <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full rounded-xl" />
            <div className="absolute bg-gradient-to-r h-full flex items-center from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className='text-white space-y-7 lg:w-1/2  pl-20'>
                <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Projects</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div> */}
    </div>
    );
};

export default Banner;