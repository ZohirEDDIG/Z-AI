import { Title, LoginWithGoogle, Or, LoginForm, ImageGeneration } from '@/components/auth';

const Login = () => {
    return (
        <main className='bg-rich-black h-screen w-screen'>

            <div className='h-full w-full flex max-lg:justify-center lg:grid lg:grid-cols-3 items-center'>

                <div className='h-full w-100 p-4 flex justify-center flex-col gap-y-6'>

                    <Title heading='Login to Z-AI' paragraph='Welcome back! Please login to continue' />

                    <LoginWithGoogle />

                    <Or />

                    <LoginForm />
                    
                </div>

                <ImageGeneration />

            </div>

        </main>
    );
}

export default Login;