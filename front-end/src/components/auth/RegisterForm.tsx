import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Person, Email, Key, Eye, EyeSlash } from '@/icons';

const RegisterForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const inputContainerClassName: string = `
        text-white px-4 py-2 border-[1.5px] border-gray-200 rounded-full flex items-center gap-x-3 
        transition-all duration-300 ease-in-out focus-within:border-violet-300
    `;

    return (
        <form className='flex flex-col gap-y-3'>

            <div className={inputContainerClassName}>

                <Person />
                
                <input type='text' className='w-full' placeholder='Full Name' />

            </div>

            <div className={inputContainerClassName}>

                <Email />

                <input type='email' className='w-full' placeholder='Email' />

            </div>

            <div className={inputContainerClassName }>

                <Key />

                <input type={isPasswordVisible ? 'text' : 'password'}  className='w-full' placeholder='Password' />

                <button type='button' onClick={() => setIsPasswordVisible((prev) => !prev)} >

                    {isPasswordVisible ?  <Eye /> : <EyeSlash />}

                </button>

            </div>

            <button 
                type='submit'
                className='bg-violet-300 border-b-2 border-violet-600 mx-auto text-white px-8 py-2 rounded-md'
            >
            
                Register
            
            </button>

            <p className='text-gray-500 text-sm text-center'>
                
                Already have an account ? {' '}
                
                <Link to='/login' className='underline'>Login</Link>
             
            </p>

        </form>

    );
}

export default RegisterForm;