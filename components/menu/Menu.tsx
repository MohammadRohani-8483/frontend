'use client'
import Icon from '@/components/common/Icon'
import { memo, useState } from 'react'
import BackgroundPopup from '@/components/common/BackgroundPopup'
import MenuItems from '@/components/menu/MenuItems'
import Alert from '../common/Alert'

const Menu = memo(() => {
    const [isOpen, setIsOpen] = useState({ open: false, visible: false })
    const [editPopup, setEditPopup] = useState({ open: false, visible: false })
    const [logoutPopup, setLogoutPopup] = useState({ open: false, visible: false })

    return (
        <>
            <div
                onClick={() => setIsOpen({ open: true, visible: true })}
                className='cursor-pointer'
            >
                <Icon nameIcon='menu' size={24} />
            </div>
            {isOpen.open &&
                <>
                    <BackgroundPopup isOpen={isOpen} setIsOpen={setIsOpen} zIndex={5} />
                    <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} openEditPopup={() => setEditPopup({ open: true, visible: true })} openLogoutPopup={() => setLogoutPopup({ open: true, visible: true })} />
                </>
            }
            {editPopup.open &&
                <Alert
                    isOpen={editPopup}
                    setIsOpen={setEditPopup}
                    title='ویرایش اطلاعات'
                    zIndex={15}
                >
                    <p className='text-neutral-800 w-full text-right'>
                        برای سفارش و مشاهده سبد خرید بایستی وارد حساب خود باشید
                    </p>
                </Alert>
            }
            {logoutPopup.open &&
                <>
                    <BackgroundPopup isOpen={logoutPopup} setIsOpen={setLogoutPopup} zIndex={15} />
                </>
            }
        </>
    )
})

export default Menu
