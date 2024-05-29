import { Dispatch, Fragment, memo, SetStateAction, useEffect, useRef, useState } from 'react'
import Icon from '@/components/common/Icon'
import { motion } from 'framer-motion'

type props = {
    options: { id: string, value: string }[]
    activeOption: { id: string, value: string } | null
    setActiveOption: Dispatch<SetStateAction<{ id: string, value: string } | null>>
    defaultValue: string
    disabled?: boolean
}

const Dropdown = memo(({ options, activeOption, setActiveOption, defaultValue, disabled }: props) => {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: any) => {
        if (!dropdownRef.current?.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);


    const handleOptionsClick = (vlaue: { id: string, value: string }) => {
        setActiveOption(vlaue)
        setIsOpen(false)
    }

    const toggling = () => !disabled && setIsOpen(!isOpen)

    return (
        <div ref={dropdownRef} className='relative flex flex-col w-full justify-center items-center'>
            <div
                onClick={toggling}
                className={`flex justify-between items-center pl-2 pr-3 py-2.5 w-full h-10 bg-white border border-gray-400 rounded-lg ${disabled ? "cursor-not-allowed" : "hover:border-gray-700 cursor-pointer"} ${activeOption ? "text-black" : "text-gray-400"}`}
            >
                {activeOption?.value || defaultValue}
                <motion.div
                    animate={isOpen ? { rotateZ: 180 } : { rotateZ: 0 }}
                    style={disabled ? { opacity: 0.5 } : {}}
                >
                    <Icon nameIcon='arrow-down' size={20} />
                </motion.div>
            </div>
            {isOpen &&
                <div className='absolute top-11 left-0 right-0 bg-white w-full rounded-lg border border-gray-300 flex flex-col items-start justify-center z-10 max-h-[180px] overflow-hidden'>
                    <div className='w-full overflow-auto ltr' id='scroll'>
                        {options.map((option, i) => (
                            <Fragment key={i}>
                                {option === activeOption ?
                                    <div
                                        onClick={() => handleOptionsClick(option)}
                                        className='w-full bg-gray-200 px-4 py-1'
                                    >
                                        {option.value}
                                    </div>
                                    :
                                    <div
                                        onClick={() => handleOptionsClick(option)}
                                        className='w-full hover:bg-gray-200 px-4 py-1'
                                    >
                                        {option.value}
                                    </div>
                                }
                            </Fragment>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
})

export default Dropdown