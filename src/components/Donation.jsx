import donation from '../assets/images/banner/donation (1).jpg'

const Donation = () => {
    return (
        <div>
            <div className='relative'>
                <img className='w-full' src={donation} alt="" />
                <div className='absolute top-0  w-full h-full flex items-center justify-center'>
                    <div className='text-center'>
                        <h1 className='text-3xl lg:text-6xl font-semibold'>Places To Study</h1>
                        <div className='border-2 w-16 mx-auto my-3 lg:my-5'></div>
                        <p className=''>There are group study rooms, individual study carrels, computers labs <br />and other spaces to study in the Libraries.
                        </p>
                        <button className="bg-[#ff3115] px-6 py-4 text-white rounded-full font-semibold mt-5 lg:mt-10">Reserve A Group Room</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center px-4 lg:px-20 py-16 bg-[#ff3115]'>
                <div>
                <h1 className='text-xl font-semibold pb-3'>Donation</h1>
                <p className='text-2xl font-semibold'>Support the Library, Give Today</p>
                </div>
                <button className="bg-gray-700 px-6 py-4 text-white rounded-full font-semibold">Make A Donation</button>
            </div>
        </div>
    );
};

export default Donation;