'use client'
import { FormEvent, useState } from 'react'
import Input from '@/components/common/Input'
import Dropdown from '../common/Dropdown'
import { gender as genders } from '@/data/gender'
import axios from 'axios'

const RegisterInputs = () => {
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [gender, setGender] = useState<{ id: string, value: string } | null>(null)

    const register = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (fullName && username && password && password === confirm && gender) {
            const data = { fullName, username, password, confirmPassword: confirm, gender: gender?.id }
            axios.post('/api/api/auth/signup', data)
                .then((data) => {
                    console.log(data)
                    location.href = '/'
                })
                .catch((err) => console.log(err.response))
        }
    }
    return (<>
        <form onSubmit={register} className='flex flex-col gap-3 w-full'>
            <Input
                name='fullName'
                placeholder='نام و نام خانوادگی'
                type='text'
                setValue={setFullName} value={fullName}
            />
            <Input
                name='username'
                placeholder='نام کاربری'
                type='text'
                setValue={setUsername} value={username}
            />
            <Dropdown
                defaultValue='جنسیت'
                options={genders}
                activeOption={gender}
                setActiveOption={setGender}
            />
            <Input
                name='password'
                placeholder='رمز عبور'
                type='password'
                setValue={setPassword} value={password}
            />
            <Input
                name='confirm'
                placeholder='تکرار رمز عبور'
                type='password'
                setValue={setConfirm} value={confirm}
            />
            <button type='submit' className='w-full hover:bg-primary-shade-2 transition-all duration-300 p-4 bg-primary-base text-white rounded-lg'>
                ثبت نام
            </button>
        </form>
    </>
    )
}

export default RegisterInputs