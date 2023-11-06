import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {createUser} = useAuth()
    const navigate = useNavigate()

    const handleUserRegister = async (e) =>{
        e.preventDefault()
        console.log(name,photo,email,password)

        try{
            const result = await createUser(email, password)
            console.log(result.user);
            navigate('/')
        }
         catch(error){
            console.log(error);
         }
    }
    return (
        <div>
            <div className="bg-[#f2f2f2] py-24 px-3">
                <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white px-4 md:px-10 lg:px-12 py-16 rounded-lg">
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
                                    onBlur={(e)=>setName(e.target.value)}
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
                                    onBlur={(e)=>setPhoto(e.target.value)}
                                    placeholder="Photo URL"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                            </div>
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
                                    {/* <span className="absolute top-6 right-7" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span> */}
                                </div>
                                {/* {
                                    registerError && <p className="text-red-600 font-medium">{registerError}</p>
                                } */}
                                <div className="my-5">
                                    <input className="ml-2" type="checkbox" name="terms" id="" />
                                    <label >
                                        <a href="#" className="ml-2">I agree all statements in <span>Terms of service</span></a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control">
                                <input type="submit" className="rounded-xl text-white text-xl font-medium bg-[#76bd42] py-3 px-6" value="REGISTER" />
                            </div>
                            {/* {
                                success && <p className="text-green-600 font-medium">{success}</p>
                            } */}
                        </div>
                    </form>
                    <p className="mt-7 text-center text-[#403F3F] font-semibold">Have already an account ? <Link className="text-[#76bd42]" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;