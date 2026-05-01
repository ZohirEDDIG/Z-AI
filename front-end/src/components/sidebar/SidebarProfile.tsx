const SidebarProfile = () => {
    return (
        <button className='w-[320px] p-4 border-t border-t-gray-500 flex items-center gap-x-3'>

            <div>

                <img src='/John Doe.jpg' alt='John Doe Profile' className='h-10 w-10 rounded-full' />

            </div>
            
            <span className='text-white'>John Doe</span>   
        
        </button>
    );
};

export default SidebarProfile;