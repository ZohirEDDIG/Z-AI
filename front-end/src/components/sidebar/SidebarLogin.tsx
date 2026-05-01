import { Link }  from 'react-router-dom';

const SidebarLogin = () => {
    return (
        <div className='bg-gunmetal w-[288px] p-4 rounded-lg'>

            <h4 className='text-white'>Login to start saving your chats</h4>

            <p className='text-gray-200 text-sm'>Once you&apos;re signed in, you can access your recent chats here.</p>

            <Link to='/login' className='text-blue-200 mt-4 block'>Login</Link>

        </div>
    );
};

export default SidebarLogin;