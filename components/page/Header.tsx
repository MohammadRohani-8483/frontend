import Icon from '../common/Icon'

const Header = () => {
    return (
        <div className='flex w-full items-center justify-between p-6 border-b border-gray-100'>
            <div className='flex gap-2 sm:gap-3 md:gap-4 items-center justify-center'>
                <p className='font-bold text-lg md:text-xl'>
                    پیام ها
                </p>
                <p className='px-2 py-0.5 bg-[#EDF2F7] rounded-full'>{12}</p>
            </div>
            <Icon nameIcon='add-circle' size={40} />
        </div>
    )
}

export default Header