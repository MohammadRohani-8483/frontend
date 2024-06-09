import Body from '@/components/page/Body'
import axios from 'axios'
import React from 'react'
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';

const Page = async () => {
  const cookiesStore = cookies()
  let jwt = cookiesStore.get("jwt") || null
  !jwt && redirect('/login')

  let users, error=false;
  try {
    const res = await axios('http://localhost:8000/api/users', {
      withCredentials: true,
      headers: {
        Cookie: `jwt=${jwt?.value}`
      }
    })
    users = res.data
    if (!users) throw ('مشکلی پیش آمده')
  } catch (error) {
    error = true
    console.log('err =>', error);
  }

  return (
    <main className='flex w-full flex-col h-screen overflow-hidden'>
      {error ?
        "مشکلی پیش آمده"
        :
        <Body users={users} />
      }    </main>
  )
}

export default Page