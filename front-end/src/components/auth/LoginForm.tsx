import { useState } from "react";
import { IoKeyOutline  } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <form className="flex flex-col gap-y-3">

            <div className='text-white px-4 py-2 border-[1.5px] border-gray-200 rounded-full flex items-center gap-x-3 
            transition-all duration-300 ease-in-out focus-within:border-violet-300'>

                <MdOutlineEmail />

                <input 
                    type='email' 
                    className='w-full' 
                    placeholder='Email' 
                />

            </div>

            <div className='text-white px-4 py-2 border-[1.5px] border-gray-200 rounded-full flex items-center gap-x-3 
            transition-all duration-300 ease-in-out focus-within:border-violet-300'>

                <IoKeyOutline />

                <input 
                    className='w-full' 
                    type={isPasswordVisible ? 'text' : 'password'} 
                    placeholder='Password'
                />

                <button 
                    type='button' 
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    className='flex text-white transition-colors duration-300 ease-in-out' 
                >

                    {isPasswordVisible ?  <FaEye /> : <FaEyeSlash />}

                </button>

            </div>

            <button 
                type='submit'
                className='bg-violet-300 border-b-2 border-violet-600 mx-auto text-white px-8 py-2 rounded-md'
            >
            
                Login
            
            </button>

            <p className='text-gray-500 text-sm text-center'>
                
                You don't have an account? {" "}
                
                <Link to='/register' className='underline'>register</Link>
             
            </p>

        </form>

    );
}

export default LoginForm;