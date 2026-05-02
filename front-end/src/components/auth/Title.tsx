import { Link } from 'react-router-dom';

type TitleProps = {
    heading: string;
    paragraph: string;
};

const Title = ({ heading, paragraph }: TitleProps) => {
    return (
        <div className='flex flex-col items-center gap-y-1.5'>

            <Link to='/'>

                <img className='w-15' src='/logo.svg' alt='Z-AI Logo' />

            </Link>

            <h1 className='text-white text-xl font-medium text-center'>{heading}</h1>

            <p className='text-gray-300 text-sm text-center'>{paragraph}</p>

        </div>
    );
};

export default Title;