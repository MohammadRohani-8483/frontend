import { Context } from "@/context/Context"
import { user } from "@/types/user"
import Image from "next/image"
import { useContext, useMemo } from "react"

type Props = {
    sender: string
    isImage: boolean
    message: string
    user: user
}

const Message = (p: Props) => {
    const { me } = useContext(Context)
    const senderIsMe = useMemo(() => p.sender === me?._id, [p.sender])
    const profile = useMemo(() => ({ src: senderIsMe ? me?.profilePic : p.user.profilePic, alt: senderIsMe ? me?.username : p.user.username }), [senderIsMe])

    return (
        <div className="w-full px-4 md:px-6">
            <div className={`${senderIsMe ? "rtl" : "ltr"} ${p.isImage ? "mt-2" : ""} flex items-center gap-2 md:gap-4`}>
                {p.isImage ?
                    <div className='relative rounded-full aspect-square w-10 md:w-10'>
                        <Image
                            src={profile.src!}
                            alt={profile.alt!}
                            fill
                        />
                    </div>
                    :
                    <div className="aspect-square w-10 md:w-10" />
                }
                <p className={`px-4 py-2 text-start text-sm leading-[150%] sm:leading-[170%] md:leading-[200%] rounded-xl max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[450px] ${senderIsMe ? "bg-[#F1F1F1]" : "bg-[#615EF0] text-white"}`}>
                    {p.message}
                </p>
            </div>
        </div>
    )
}

export default Message