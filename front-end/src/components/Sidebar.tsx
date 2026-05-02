import { useEffect, useRef, useState } from 'react';
import { SidebarHeader, SidebarActions, SidebarChats, SidebarLogin, SidebarProfile } from '@/components/sidebar/index';

export type ChatSettings = {
    chatId: null | number;
    isVisible: boolean;
};

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [chatSettings, setChatSettings] = useState<ChatSettings>({ chatId : null, isVisible: false });

    const chatSettingsRef = useRef<HTMLDivElement>(null);
    
    const isLoggedIn = true;

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (target.closest('[data-chat-toggler]')) return;

            if (chatSettingsRef.current && !chatSettingsRef.current.contains(target)) {
                setChatSettings((prev) => ({
                    ...prev,
                    chatId: null,
                    isVisible: false
                }));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, [chatSettingsRef, setChatSettings]);

    return (
        <aside className={`bg-rich-black  ${isSidebarOpen ? 'w-80' : 'w-14'} h-screen shrink-0 transition-all duration-300`}>

            <div className='h-full flex flex-col justify-between gap-y-6'>

                <div className='p-4 flex flex-col gap-y-6'>

                    <SidebarHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                    
                    <SidebarActions isSidebarOpen={isSidebarOpen} />

                    {isSidebarOpen && <h3 className='text-gray-400 text-xl'>Chats</h3>}

                    {isSidebarOpen && (
        
                        isLoggedIn 

                        ? <SidebarChats chatSettingsRef={chatSettingsRef} chatSettings={chatSettings} setChatSettings={setChatSettings} /> 
                        
                        : <SidebarLogin />
                    )}

                </div>


                {isSidebarOpen && isLoggedIn && <SidebarProfile />}

            </div>

        </aside>
    );
};

export default Sidebar;