import { useEffect, useRef, useState } from 'react';

const ImageGeneration = () => {
    const prompts = [
        { id: 1, prompt: 'A dragon made of storm clouds attacking a medieval castle at night, lightning strike, dramatic', image: '/AI Image 1.jpg' },
        { id: 2, prompt: 'Astronaut sitting alone on Mars eating noodles, Earth visible in the sky, warm cozy lighting', image: '/AI Image 2.jpg' },
        { id: 3, prompt: 'Giant koi fish swimming through a foggy bamboo forest, mystical, soft pink and gold tones', image: '/AI Image 3.jpg' },
    ];

    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState('');
    const promptIndexRef = useRef(0);

    useEffect(() => {
        let charIndex = 0;
        let typingInterval: number | undefined;

        const typePrompt = () => {
            const current = prompts[promptIndexRef.current];
            setPrompt('');
            setImage(prompts[promptIndexRef.current].image);
            charIndex = 0;

            typingInterval = setInterval(() => {
                const nextChar = current.prompt[charIndex];

                if (nextChar !== undefined) {
                    setPrompt((prev) => prev + nextChar);
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    setImage(current.image);

                    setTimeout(() => {
                        promptIndexRef.current = (promptIndexRef.current + 1) % prompts.length;
                        typePrompt();
                    }, 1500);
                }
            }, 30);
        };

        typePrompt();

        return () => clearInterval(typingInterval);
    }, []);


    return (
        <div className='h-full col-span-2 hidden lg:flex justify-center items-center'>

            <div className='w-100'>
            
                <div className='bg-gunmetal w-74 h-74 ml-20 rounded-xl flex justify-center items-center'>
                    
                    <img src={image} alt={prompt} className='w-70 h-70 rounded-xl' /> 

                </div>

                <p className='text-gray-300 max-w-100 mt-4'>
                    
                    {prompt}
                    
                    <span>|</span>
                
                </p>

            </div>

        </div>
    );
};

export default ImageGeneration;