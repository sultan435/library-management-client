import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {loginUser} = useAuth()
    const navigate = useNavigate()


    const handleUserLogin = async (e) =>{
        e.preventDefault()

        try{
            const result = await loginUser(email, password)
            console.log(result.user);
            navigate('/')
        }
        catch(error){
            console.log(error);
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
                                        // type={showPassword ? "text" : "password"}
                                        type="password"
                                        onBlur={(e)=>setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                                    {/* <span className="absolute top-6 right-7" onClick={() => setShowPassword(!showPassword)}> */}
                                        {/* {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        } */}
                                    {/* </span> */}
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
                        {/* {
                            loginError && <p className="text-red-600">{loginError}</p>
                        } */}
                    </div>
                    <p className="text-center">OR</p>
                    <div className="">
                        <button  className="btn w-full border-black my-3">
                            {/* <FaGoogle></FaGoogle> */}
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