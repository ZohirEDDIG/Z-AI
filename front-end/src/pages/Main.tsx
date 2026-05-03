import { useState } from 'react';
import { useWindowWidth } from '@/hooks';
import { MessageCircleDashed, Add, Microphone } from '@/icons';
import Sidebar from '@/components/Sidebar';

const Main = () => {
    const windowWidth: number = useWindowWidth();
    const isSidebarOpenInitialState: boolean = windowWidth > 1024 ? true : false;

    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(isSidebarOpenInitialState);

    return  (
        <div className='flex'>

            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <main className={`bg-dark-charcoal h-screen min-w-0 flex-1 max-lg:ml-14`}>
                
                <div className='h-full w-full p-4 flex flex-col gap-y-12'>

                    <div className='flex justify-between items-center'>
                        
                        <h1 className='text-white text-2xl font-bold'>Z-AI</h1>
                        
                        <button 
                            type='button'
                            title='Turn on temporary chat'
                            className='text-white text-2xl'
                        >
                            
                            <MessageCircleDashed />
                        
                        </button>

                    </div>

                    <div className='w-full flex-1 flex flex-col justify-center items-center gap-y-6'>

                        <h1 className='w-full md:w-160 2xl:w-200 text-white text-4xl flex flex-col'>
                            
                            <span className='text-2xl'>Hi John</span>

                            Where should we start ?
                            
                        </h1>

                        <div className='bg-gunmetal text-white w-full md:w-160 2xl:w-200 p-4 rounded-2xl'>

                            <textarea 
                                className='w-full p-4 resize-none'
                                placeholder='Ask Z-AI'
                            />

                            <div className='bg-gunmetal flex justify-between items-center'>

                                <button 
                                    type='button'
                                    className='text-gray-200 text-3xl'
                                >

                                    <Add />

                                </button>

                                <button 
                                    type='button'
                                    className='text-gray-200 text-2xl'
                                >

                                    <Microphone />

                                </button>

                            </div>

                        </div>

                    </div>
                
                </div>

            </main>

        </div>
    );
};

export default Main;