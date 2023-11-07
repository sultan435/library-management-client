import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const {loginUser,logoutUser,googleUser} = useAuth()
    const navigate = useNavigate()
    const axios = useAxios()


    const handleUserLogin = async (e) =>{
        e.preventDefault()
        setLoginError("")

        if (password.length < 6) {
            setLoginError('Must be 6 or more characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError('your password should have at least one uppercase characters')
            return;
        }
        else if ((!/[$@$!%*#?&]/.test(password))) {
            setLoginError('your password should have at least one symbols characters')
            return;
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setLoginError('Invalid email')
            return;
        }
        const toastId = toast.loading('Loading...');
        try{
            const result = await loginUser(email, password)
            const res =await axios.post('/access-token',{email: result.user.email})
            if(res.data.success){
                toast.success('Successfully created!', {id: toastId});
                navigate('/')
            }else{
                logoutUser()
            }
        }
        catch(error){
            toast.error(error.message, {id: toastId});
        }
    }

    const handleGoogleLogin = async()=>{
        const toastId = toast.loading('Loading...');
       try{
        await googleUser(email, password)
        toast.success('Successfully created!', {id: toastId});
                navigate('/')
       }
       catch(error){
        toast.error(error.message, {id: toastId});
       }
    }
    return (
        <div>
            <div className="bg-[#f2f2f2] py-24">
                <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white px-4 md:px-10 lg:px-12 py-16 rounded-lg">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl text-[#403F3F] font-semibold">LOGIN</h1>
                    </div>
                    <form onSubmit={handleUserLogin} >
                        <div className="mt-8">

                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Email</span>
                                </label>
                                <input
                                    type="email"
                                    onBlur={(e)=>setEmail(e.target.value)}
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
                                      
                                        onBlur={(e)=>setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                                    <span className="absolute top-6 right-7" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="rounded-xl text-white text-xl font-medium bg-[#e41f05] py-3 px-6">LOGIN</button>
                            </div>
                        </div>
                    </form>
                    <div className="text-center mt-6">
                        {
                            loginError && <p className="text-red-600">{loginError}</p>
                        }
                    </div>
                    <p className="text-center">OR</p>
                    <div className="">
                        <button onClick={handleGoogleLogin}  className="btn w-full hover:bg-[#ff3115] hover:text-white font-medium border-black my-3">
                            <FaGoogle></FaGoogle>
                            Sign in with Google
                        </button>
                    </div>

                    <p className="text-center text-[#403F3F] font-semibold">Don’t Have An Account ? <Link className="text-[#e41f05]" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};


export default Login;