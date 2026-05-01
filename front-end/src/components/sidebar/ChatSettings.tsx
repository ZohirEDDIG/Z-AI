import { Pin, Pen, Trash } from '@/icons';

type ChatSettingsProps = {
    isVisible: boolean;
    chatSettingsRef: React.RefObject<null | HTMLDivElement>;
};

const ChatSettings = ({ isVisible, chatSettingsRef }: ChatSettingsProps) => {
    return (
        <div 
            ref={chatSettingsRef}
            className={`bg-gunmetal w-30 p-4 rounded-xl ${isVisible ? 'flex' : 'hidden'} flex-col gap-y-3 absolute top-0 -right-32 z-10`}>

            <button type='button' className='text-white text-sm flex items-center gap-x-3'>
                
                <Pin />

                Pin Chat
            
            </button>
                                                
            <button type='button' className='text-white text-sm flex items-center gap-x-3'>

                <Pen />
                
                Rename
            
            </button>
                                                
            <button type='button' className='text-red-500 text-sm flex items-center gap-x-3'>

                <Trash />    
            
                Delete
            
            </button>

        </div>
    );
}

export default ChatSettings;