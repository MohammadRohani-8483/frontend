import { memo } from 'react'

type props = {
    name: string
    type: "text" | "password" | "email" | "number" | "tel"
    placeholder: string
    maxLength?: number
    value?: string | number | null
    setValue: (param: string) => void
    disabled?: boolean
}

const Input = memo(({ name, type, placeholder, maxLength, value, setValue, disabled }: props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        type === 'tel' ?
            setValue(e.target.value.replace(/[^0-9]/g, ''))
            :
            setValue(e.target.value)
    }
    return (
        <div className='relative w-full'>
            <input type={type}
                maxLength={maxLength}
                className={`peer/name ${type === "number" ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" : ""} w-full h-10 p-2 outline-none focus:border-primary-base border border-gray-400 rounded-lg ${disabled ? "text-gray-500 cursor-not-allowed" : "text-black hover:border-gray-700"} transition-all duration-300`}
                id={name}
                placeholder=''
                value={value || ""}
                onChange={handleChange}
                disabled={disabled}
            />
            <label htmlFor={name} className='peer-focus/name:text-[10px] text-[10px] peer-focus/name:text-primary-base text-gray-400 absolute peer-focus/name:-top-2.5 peer-focus/name:right-4 bg-white px-1 right-4 -top-[10px] transition-all duration-300 pointer-events-none peer-placeholder-shown/name:text-base peer-placeholder-shown/name:right-2 peer-placeholder-shown/name:top-2 font-light'>
                {placeholder}
            </label>
        </div>
    )
})

export default Input