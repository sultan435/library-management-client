import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import img from '../assets/images/banner/c-banner.jpg'

const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { createUser } = useAuth()
    const navigate = useNavigate()

    const handleUserRegister = async (e) => {
        e.preventDefault()

        setRegisterError("")
        setSuccess("")

        if (password.length < 6) {
            setRegisterError('Must be 6 or more characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password should have at least one uppercase characters')
            return;
        }
        else if ((!/[$@$!%*#?&]/.test(password))) {
            setRegisterError('your password should have at least one symbols characters')
            return;
        }

        try {
            const result = await createUser(email, password)
            console.log(result.user);
            setSuccess('user created successfully')
            Swal.fire({
                title: "success!",
                text: "You clicked the button!",
                icon: "success"
            });
            updateProfile(result.user, {
                displayName: name,
                photoURL: photo,
            })
                .then(() => console.log("profile update"))
                .catch()
            navigate('/login')
        }
        catch (error) {
            console.log(error);
            setRegisterError('Email already in used')
        }
    }
    return (
        <div>
            <div className="hero h-[350px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-8 text-5xl font-bold text-black "><span className="text-[#e41f05]">Register</span> Account</h1>
                        <div className="border-2 border-[#e41f05] w-24 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 py-5 flex justify-center items-center mb-16">
                <NavLink
                    to="/"
                    className="hover:text-[#e41f05] font-medium uppercase"
                >
                    Home
                </NavLink>
            </div>
            <div className="px-3">
                <div className="md:w-3/4 lg:w-1/2 mx-auto shadow-lg bg-slate-100 py-14 px-4 md:px-10 lg:px-12 mb-16 rounded-lg">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl text-[#403F3F] font-semibold">Register</h1>
                    </div>
                    <form onSubmit={handleUserRegister} >
                        <div className="px-3 mt-8">
                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Name</span>
                                </label>
                                <input
                                    type="text"
                                    onBlur={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full"
                                    required />
                            </div>
                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    onBlur={(e) => setPhoto(e.target.value)}
                                    placeholder="Photo URL"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                            </div>
                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Email</span>
                                </label>
                                <input
                                    type="email"
                                    onBlur={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                            </div>
                            <div className="">
                                <label >
                                    <span className="text-[#403F3F] font-semibold ml-2">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        onBlur={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                                    <span className="absolute top-6 right-7" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                {
                                    registerError && <p className="text-red-600 font-medium">{registerError}</p>
                                }
                                <div className="my-5">
                                    <input className="ml-2" type="checkbox" name="terms" id="" />
                                    <label >
                                        <a href="#" className="ml-2">I agree all statements in <span>Terms of service</span></a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control">
                                <input type="submit" className="rounded-xl text-white text-xl cursor-pointer font-medium bg-[#e41f05] py-3 px-6" value="REGISTER" />
                            </div>
                            {
                                success && <p className="text-green-600 font-medium">{success}</p>
                            }
                        </div>
                    </form>
                    <p className="mt-7 text-center text-[#403F3F] font-semibold">Have already an account ? <Link className="text-[#ff3115]" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;