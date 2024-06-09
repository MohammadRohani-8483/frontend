import { closePopup } from '@/functions/common';
import { isOpen } from '@/types/common';
import { motion } from 'framer-motion'
import { Dispatch, memo, SetStateAction } from 'react';



type Props = {
    setIsOpen: Dispatch<SetStateAction<isOpen>>
    isOpen: isOpen
    zIndex: number
}

const BackgroundPopup = memo((p: Props) => {
    return (
        <motion.div
            style={{ zIndex: p.zIndex }}
            animate={p.isOpen.visible ? { opacity: 1 } : { opacity: 0 }}
            initial={{ opacity: 0 }}
            className='fixed inset-0 backdrop-brightness-50 backdrop-blur-[3px]'
            onClick={() => closePopup(p.setIsOpen)}
        />
    )
})

export default BackgroundPopup