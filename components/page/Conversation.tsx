import { user } from '@/types/user'
import HeaderUser from '@/components/page/HeaderUser'
import Icon from '@/components/common/Icon'
import Messages from '@/components/page/Messages'
import { FormEvent, useState } from 'react'
import axios from 'axios'
import { errorHandler } from '@/functions/errorHandler'

type Props = {
    user: user | null
    setNull: () => void
    animate: boolean
}

const Conversation = ({ user, setNull, animate }: Props) => {
    const [mutate, setMutate] = useState(false)

    const sendMessage = (e: FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
        e.preventDefault()
        const message = e.target.message.value
        console.log(message);
        user && message.length &&
            axios.post(`/api/api/messages/send/${user._id}`, { message })
                .then(res => {
                    console.log(res)
                    setMutate(p => !p)
                    e.target.message.value = ''
                })
                .catch(err => errorHandler(err.response))
    }
    return (
        <div className={`fixed flex flex-col items-center justify-center text-lg top-0 left-0 h-screen w-screen sm:w-full sm:static bg-white sm:border-r border-gray-100 bg-gray-50 ${!animate ? "translate-x-full" : ""} sm:translate-x-0 transition-all duration-300`}>
            {user ?
                <>
                    <HeaderUser user={user} setNull={setNull} />
                    <Messages mutate={mutate} user={user} />
                    <div className='p-2 sm:p-4 md:p-6 w-full'>
                        <form onSubmit={sendMessage} className='border border-gray-300 w-full px-4 py-2 rounded-xl flex items-center h-12'>
                            <input
                                type="text"
                                name="message"
                                placeholder='پیام خود را تایپ کنید'
                                className="outline-none w-full h-full"
                            />
                            <button type='submit'>
                                <Icon nameIcon='send' size={24} />
                            </button>
                        </form>
                    </div>
                </>
                :
                "لطفا یک گفتگو رو برای شروع پیام دادن انتخاب کنید"
            }
        </div>
    )
}

export default Conversation