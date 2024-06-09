import Menu from "@/components/menu/Menu"

const Header = () => {
    return (
        <div className='flex gap-2 sm:gap-3 md:gap-4 w-full items-center justify-start p-6 border-b border-gray-100'>
            <Menu />
            <p className='font-bold text-lg md:text-xl'>
                پیام ها
            </p>
            <p className='px-2 py-0.5 bg-[#EDF2F7] rounded-full text-xs flex items-center justify-center'>
                {12}
            </p>
        </div>
    )
}

export default Header