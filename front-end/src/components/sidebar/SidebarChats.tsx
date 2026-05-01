import { Link } from 'react-router-dom';
import { ThreeDotsVertical } from '@/icons';
import type { ChatSettings as ChatSettingsType } from '../Sidebar';
import ChatSettings from './ChatSettings';

type SidebarChatsProps = {
    chatSettingsRef: React.RefObject<null | HTMLDivElement>;
    chatSettings: ChatSettingsType;
    setChatSettings: React.Dispatch<React.SetStateAction<ChatSettingsType>>;
};

const SidebarChats = ({ chatSettingsRef, chatSettings, setChatSettings }: SidebarChatsProps) => {
    const chats = [
        { id: 1, title: 'What is best LLM in world right now ?' },
        { id: 2, title: 'Top 10 places to visit in 2026' },
        { id: 3, title: 'Is Python the best choice for AI and what about data analysis ?' }
    ];

    const toggleChatSettings = (chatId: number) => {
        setChatSettings((prev) => ({
            ...prev,
            chatId: prev.chatId === chatId ? null : chatId,
            isVisible: (prev.chatId === chatId  && prev.isVisible) ? false : true
        }));
    };

    return (
        <ul className='flex flex-col gap-y-3'>

            {chats.map((chat) => (

                <li key={chat.id} className='flex justify-between gap-x-3 items-center relative'>
                    
                    <Link to={`/chats/${chat.id}`} className='text-white max-h-8 text-sm line-clamp-1 leading-6 px-2 py-1.5 -ml-2 rounded-xl flex-1'>

                        {chat.title}
                    
                    </Link>

                    <button 
                        type='button' 
                        className='text-gray-300 flex justify-center items-center hover:text-white'
                        onClick={() => toggleChatSettings(chat.id)}
                        data-chat-toggler={chat.id}
                    >

                        <ThreeDotsVertical />

                    </button>
                        
                    <ChatSettings chatSettingsRef={chatSettingsRef} isVisible={chatSettings.chatId === chat.id && chatSettings.isVisible} />
                
                </li>

            ))}

        </ul>
    );
};

export default SidebarChats;