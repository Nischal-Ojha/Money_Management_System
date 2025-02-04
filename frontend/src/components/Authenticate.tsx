"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Authenticate = ({task}:{task:string}) => {

    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")


return (
    <div>
    <p className='text-center text-3xl my-2'>{task}</p>
    <div className=''>
        <form action="" className='flex flex-col items-center'>
            <div className='w-full rounded-lg max-w-md flex items-center justify-between gap-4 p-4 my-4 text-xl'>
                <label htmlFor="username">Name</label>
                <input type="text" id='username' name='username' placeholder='User Name' value={name} onChange={(e)=>setName(e.target.value)} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-[16rem]' required/>
            </div>
            <div className='w-full rounded-lg max-w-md flex items-center justify-between gap-4 p-4 mb-4 text-xl'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-[16rem]' minLength={8} required onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Password must be at least 8 characters long")} onInput={(e) => {const inputElement=e.target as HTMLInputElement; inputElement.setCustomValidity(""); inputElement.checkValidity()}}/>
            </div>
            <div className='flex justify-center my-2 mb-4'>
                <button type='submit' className='border rounded-lg p-3 text-xl hover:bg-purple-950'>Submit</button>
            </div>
            <p className='my-2'>{task === "Sign Up" ? 
                (<>Already have an account? <Link href="/loginPage" className="hover:underline hover:text-purple-500">Login</Link></>)
                : 
                (<>Don&#39;t have an account? <Link href="/signUpPage" className="hover:underline hover:text-purple-500">Create One.</Link></>)}
            </p>
        </form>
    </div>
    </div>
)
}

export default Authenticate
