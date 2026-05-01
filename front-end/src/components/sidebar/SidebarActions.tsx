import { Link } from 'react-router-dom';
import { Edit, Search, Images } from '@/icons';

type SidebarActionsProps = {
    isSidebarOpen: boolean;
};

const SidebarActions = ({ isSidebarOpen }: SidebarActionsProps) => {
    return (
        <div className='flex flex-col gap-y-6'>

            {/* New Chat */}
            <Link to='/' className={`text-white text-sm flex ${isSidebarOpen ? 'w-[288px]' : 'w-5'} items-center gap-x-3`}>

                <Edit className='text-xl' />

                {isSidebarOpen && 'New Chat'}
                
            </Link>

            {/* Search Chats */}
            <Link to='/search-chats' className={`text-white text-sm flex ${isSidebarOpen ? 'w-[288px]' : 'w-5'} items-center gap-x-3`}>

                <Search className='text-xl' />
                
                {isSidebarOpen && 'Search Chats'}

            </Link>

            {/* Generate Images */}
            <Link to='/generate-images' className={`text-white text-sm flex ${isSidebarOpen ? 'w-[288px]' : 'w-5'} items-center gap-x-3`}>

                <Images className='text-xl' />
                
                {isSidebarOpen && 'Generate Images'}

            </Link>

        </div>
    );
};

export default SidebarActions;