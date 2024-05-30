import Body from '@/components/page/Body'
import Header from '@/components/page/Header'
import axios from 'axios'
import React from 'react'
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';

const Page = async () => {
  const cookiesStore = cookies()
  let jwt = cookiesStore.get("jwt") || null
  !jwt && redirect('/login')

  let users;
  try {
    const res = await axios('http://localhost:8000/api/users', {
      withCredentials: true,
      headers: {
        Cookie: `jwt=${jwt?.value}`
      }
    })
    users = res.data
  } catch (error) {
    console.log('err =>', error);
  }
  return (
    <main className='flex w-full flex-col h-screen overflow-hidden'>
      <Header />
      <Body users={users} />
    </main>
  )
}

export default Page