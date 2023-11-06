import useAuth from '../../hooks/useAuth';
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { BsFacebook, BsPinterest, BsPhone, BsTelephone } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";


const Navbar = () => {
    const { user, logoutUser } = useAuth();
    // console.log(user);
    return (
        <div>
            <div className='bg-[#212121] py-3 px-3 text-white'>
                <div className='flex justify-between flex-col md:flex-row items-center  w-full max-w-screen-xl px-6 mx-auto'>
                    <div className='flex gap-6'>
                        <div className='flex items-center gap-2'>
                            <span><BsPhone className='text-[#e41f05]' /></span>
                            <p><span className='cursor-pointer hover:text-[#e41f05]'>(+123)4567890</span></p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span><AiOutlineMail className='text-[#e41f05]' /></span>
                            <p><span className='cursor-pointer hover:text-[#e41f05]'>sultan@email.com</span></p>
                        </div>
                    </div>
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center text-[#e41f05]'>
                            <span className='mr-1 '><BiLogIn /></span>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? '' : ''
                                }
                            >
                                Login
                            </NavLink>
                            <span>/</span>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    isActive ? '' : ''
                                }
                            >
                                Register
                            </NavLink>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='cursor-pointer hover:text-[#e41f05]'><BsFacebook /></span>
                            <span className='cursor-pointer hover:text-[#e41f05]'><AiFillTwitterCircle /></span>
                            <span className='cursor-pointer hover:text-[#e41f05]'><BsPinterest /></span>
                            <span className='text-xl cursor-pointer hover:text-[#e41f05]'><AiOutlineInstagram /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className=" w-full max-w-screen-xl  py-4 mx-auto">
                    <div className="navbar ">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li>
                                        <a>Parent</a>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Item 3</a></li>
                                </ul>
                            </div>
                            <NavLink to="/">
                                <div className="flex items-center">
                                    <img className="w-14" src={logo} alt="" />
                                    <div className="flex flex-col items-start">
                                        <p className="text-xl font-bold">Libuno</p>
                                        <span className="text-xs">PUBLIC LIBRARY</span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 gap-5">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'text-[#e41f05] font-semibold underline' : ''
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/addBook"
                                    className={({ isActive }) =>
                                        isActive ? 'text-[#e41f05] font-semibold underline' : ''
                                    }
                                >
                                    Add Book
                                </NavLink>
                                <NavLink
                                    to="/allBook"
                                    className={({ isActive }) =>
                                        isActive ? 'text-[#e41f05] font-semibold underline' : ''
                                    }
                                >
                                    All Book
                                </NavLink>
                                <NavLink
                                    to="/borrowed"
                                    className={({ isActive }) =>
                                        isActive ? 'text-[#e41f05] font-semibold underline' : ''
                                    }
                                >
                                    Borrowed Book
                                </NavLink>
                            </ul>
                        </div>
                        <div className="navbar-end">

                            <div className='lg:flex flex-row hidden '>
                            <span className='p-3 border mr-3 cursor-pointer'><BsTelephone /></span>
                                <span className='p-3 border mr-3 cursor-pointer'><AiOutlineMail /></span>
                                <span className='p-3 border mr-3 cursor-pointer'><FaLocationDot /></span>
                            </div>

                            <div>
                                {user?.email ? (
                                    <div className="dropdown dropdown-end ">
                                        <label tabIndex={0} className="cursor-pointer">
                                            <div className="avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                                </div>
                                            </div>
                                        </label>
                                        <div
                                            tabIndex={0}
                                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                        >
                                            <NavLink
                                                to="/user"
                                                className="px-4 py-2 hover:bg-base-300 rounded-lg"
                                            >
                                                Profile
                                            </NavLink>
                                            <NavLink
                                                to="/user/orders"
                                                className="px-4 py-2 hover:bg-base-300 rounded-lg"
                                            >
                                                Orders
                                            </NavLink>

                                            <div
                                                onClick={logoutUser}
                                                className="cursor-pointer text-[#76bd42] px-4 py-2 hover:bg-base-300 rounded-lg"
                                            >
                                                Logout
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <NavLink to="/login" className='px-6 py-[10px] bg-[#e41f05] text-white rounded-lg font-medium'>login</NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;







