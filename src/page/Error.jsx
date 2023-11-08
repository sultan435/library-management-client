import { NavLink } from 'react-router-dom';
import error from '../assets/images/banner/error.jpg'

const Error = () => {
    return (
        <div className='w-full h-full relative'>
            <img className='w-full h-[100vh]' src={error} alt="" />
            <div className='absolute h-[100vh]  w-full flex justify-center items-center top-0'>
            <NavLink
                    to="/"
                    className="hover:text-[#e41f05] font-medium uppercase text-white px-4 py-2 rounded-md bg-[#e41f05]"
                >
                    Home
                </NavLink>
            </div>
        </div>
    );
};

export default Error;