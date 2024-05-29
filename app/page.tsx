'use client'
import axios from 'axios'

export default function Home() {
  const login: React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
    e.preventDefault()
    const { username, password } = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    const data = { username: username.value, password: password.value }

    axios.post('/api/api/auth/login', data)
      .then((data) => {
        console.log(data)
      })
  }
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { message } = e.target as typeof e.target & {
      message: { value: string };
    };
    const data = { message: message.value }
    axios.post('/api/api/messages/send/6650efee4abd079ae1c4d591', data)
      .then((data) => {
        console.log(data)
      })
  }

  const getMessages = () => {
    fetch('/api/api/messages/6650efee4abd079ae1c4d591', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  const getUsers = () => {
    fetch('/api/api/users', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }
  return (
    <main>
      <form onSubmit={login} className='flex gap-2 mt-4'>
        <input type="text" name="username" className="border-black border" />
        <input type="password" name="password" className="border-black border" />
        <button type="submit" className="border-black border">send</button>
      </form>
      <form onSubmit={sendMessage} className='flex gap-2 mt-4'>
        <textarea name="message" className="border-black border" />
        <button type="submit" className="border-black border">send</button>
      </form>
      <button onClick={() => getMessages()}>get messages</button>
      <br />
      <button onClick={() => getUsers()}>get users</button>
    </main>
  );
}
