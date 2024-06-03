import { user } from '@/types/user'
import HeaderUser from '@/components/page/HeaderUser'

type Props = {
    user: user | null
    setNull: () => void
    animate: boolean
}

const Messages = ({ user, setNull, animate }: Props) => {
    return (
        <div className={`fixed flex flex-col items-center justify-center top-0 left-0 h-screen w-screen sm:w-full sm:static bg-white sm:border-r border-gray-100 bg-gray-50 ${!animate && "translate-x-full"} sm:translate-x-0 transition-all duration-300`}>
            {user ?
                <>
                    <HeaderUser user={user} setNull={setNull} />
                    <div className='h-full'></div>
                </>
                :
                "لطفا یک گفتگو رو برای شروع پیام دادن انتخاب کنید"
            }
        </div>
    )
}

export default Messages