const LoginWithGoogle = () => {
    return (
        <button 
            type='button' 
            className='py-2 border-[1.5px] border-gray-300 rounded-full flex justify-center items-center gap-x-3' 
        >

            <div>

                <img className='w-6' src='/Google.svg' alt='Google logo' />

            </div>

            <span className="text-gray-300">Login with Google</span>

        </button>
    );
};

export default LoginWithGoogle;