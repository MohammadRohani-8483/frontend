import LoginIputs from '@/components/login/LoginIputs'
import Image from 'next/image'

const LoginPage = () => {
    return (
        <main className='flex justify-center items-center h-screen gap-8 flex-col w-4/5 max-w-96 mx-auto'>
            <div className='relative aspect-[16/13] w-24 sm:w-32 md:w-40'>
                <Image
                    src='/images/png/icon.png'
                    alt='Icon'
                    fill
                />
            </div>
            <LoginIputs />
        </main>
    )
}

export default LoginPage