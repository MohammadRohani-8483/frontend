import Image from 'next/image'
import React from 'react'

type props = {
    nameIcon: string
    size: number
}

const Icon = ({ nameIcon, size }: props) => {
    return (
        <Image
            alt={nameIcon}
            src={`/images/svg/${nameIcon}.svg`}
            width={size}
            height={size}
        />
    )
}

export default Icon