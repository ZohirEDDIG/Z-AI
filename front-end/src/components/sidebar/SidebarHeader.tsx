import { LayoutSidebar } from '@/icons';

type SidebarHeaderProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen:  React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarHeader = ({ isSidebarOpen, setIsSidebarOpen }: SidebarHeaderProps) => {
    return (
        <div className={`flex ${isSidebarOpen && 'justify-between'} items-center`}>

            <div>

                <img src='/logo.svg' alt='Z-AI Logo' className={`w-10 ${!isSidebarOpen && 'hidden'}`} />

            </div>

            <button
                type='button'
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                className='text-white text-2xl flex justify-center items-center -ml-0.5'
            >
                    
                <LayoutSidebar />

            </button>

        </div>
    );
};

export default SidebarHeader;