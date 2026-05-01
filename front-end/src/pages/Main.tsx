import Sidebar from '@/components/Sidebar';

const Main = () => {
    return  (
        <div className='flex'>

            <Sidebar />

            <main className='bg-dark-charcoal h-screen min-w-0 flex-1'>

            </main>

        </div>
    );
};

export default Main;