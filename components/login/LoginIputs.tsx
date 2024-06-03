'use client'
import { FormEvent, useState } from 'react'
import Input from '@/components/common/Input'
import axios from 'axios'

const LoginIputs = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const register = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username && password) {
      const data = { username, password }
      axios.post('/api/api/auth/login', data)
        .then((res) => {
          console.log(res.data)
          location.href = '/'
        })
        .catch((err) => console.log(err.response.data))
    }
  }
  return (<>
    <form onSubmit={register} className='flex flex-col gap-3 w-full'>
      <Input
        name='username'
        placeholder='نام کاربری'
        type='text'
        setValue={setUsername} value={username}
      />
      <Input
        name='password'
        placeholder='رمز عبور'
        type='password'
        setValue={setPassword} value={password}
      />
      <button type='submit' className='w-full hover:bg-primary-shade-2 transition-all duration-300 p-4 bg-primary-base text-white rounded-lg'>
        ورود
      </button>
    </form>
  </>
  )
}

export default LoginIputs