import { Title, LoginWithGoogle, Or, RegisterForm, ImageGeneration } from '@/components/auth';

const Register = () => {
    return (
        <main className='bg-rich-black h-screen w-screen'>

            <div className='h-full w-full flex max-lg:justify-center lg:grid lg:grid-cols-3 items-center'>

                <div className='h-full w-100 p-4 flex justify-center flex-col gap-y-6'>

                    <Title heading='Create your account' paragraph='Welcome! Please fill int the details to get started' />

                    <LoginWithGoogle />

                    <Or />

                    <RegisterForm />
                    
                </div>

                <ImageGeneration />

            </div>

        </main>
    );
}

export default Register;