"use client"

import getUsers, { createUser } from '@/app/api/user'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import bcrypt from "bcryptjs"
import { useRouter } from 'next/navigation'

interface userType{
    name:string;
    contact:string;
    type:string;
    password?:string
}

const Authenticate = ({task}:{task:string}) => {

    const router= useRouter()
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [adminUser, setAdminUser] = useState<userType[]>([])

    useEffect(()=>{
        const fetchusers = async()=>{
            const users = await getUsers()
            // OLD METHOD
            // users.map((item:userType)=>{if(item.type==="self")setAdminUser((prev)=>[...prev, item])})
            
            // ALTERNATIVE
            setAdminUser(users.filter((item:userType)=>item.type==="self"))
        }
        fetchusers()
    },[])
    
    const nameInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    const confirmPasswordInput = useRef<HTMLInputElement>(null)

    const validateConfirmPassword = ()=>{
        if(!confirmPasswordInput.current||!passwordInput.current) return
        confirmPasswordInput.current.setCustomValidity(
            confirmPasswordInput.current.value !== passwordInput.current.value?"password donot match":""
        )
    }


    // HANDLE SUBMIT
    const handleSubmit=async(e: React.FormEvent)=>{
        e.preventDefault()
        console.log(adminUser)

        if(!nameInput.current || !passwordInput.current) return 

        nameInput.current.setCustomValidity("")
        passwordInput.current.setCustomValidity("")

        let logged = false;
        let loggedInUser


        // LOGIN IN LOGIC
        if(task==="Login"){
            const userFound = adminUser.find((item)=>item.name===name)
            if(userFound){
                if(password && userFound.password){
                    const isMatch = await bcrypt.compare(password, userFound.password)
                    if(isMatch) {console.log("Welcome", userFound.name); logged=true; loggedInUser=userFound}
                    else { passwordInput.current.setCustomValidity("Incorrect Password"); console.log("Wrong Password"); setPassword(""); passwordInput.current.reportValidity(); return };}
            }
            else { nameInput.current.setCustomValidity("Username not found"); console.log("User Not found."); nameInput.current.reportValidity();}
        }

        // SIGNuP LOGIC
        else if(task==="Sign Up"){
            validateConfirmPassword()
            console.log("sucess:", name, "pas:", password, "conf:", confirmPasswordInput.current?.value)
            createUser({name, password, confirmPassword, contact})
            setContact("")
            setConfirmPassword("")
            router.push('/settingUp')
        }
  

        // AUTHENTICATE LOGIN
        if (logged && loggedInUser) {
            try {
                // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
                const response = await fetch(`http://localhost:3000/api/user`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(loggedInUser),
                })
    
                if (!response.ok) {
                    throw new Error("Failed to send user data to backend")
                }
    
                const result = await response.json()
                console.log("User successfully logged:", result)
                router.push("/")
            } catch (error) {
                console.error("Login error:", error)
            }
        }


        // CLEAR VALUES IN INPUT
        setName("")
        setPassword("")

    }

return (
    <div>
        <p className='text-center text-3xl my-2'>{task}</p>
        <div className=''>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                {/* Name */}
                <div className='w-full rounded-lg max-w-md flex items-center justify-between gap-4 p-4 my-4 text-xl'>
                    <label htmlFor="username">Name</label>
                    <input ref={nameInput} type="text" id='username' name='username' placeholder='User Name' value={name} onChange={(e)=>{setName(e.target.value); nameInput.current?.setCustomValidity("")}} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-[16rem]' required />
                </div>

                {/* Password */}
                <div className='w-full rounded-lg max-w-md flex items-center justify-between gap-4 p-4 mb-4 text-xl'>
                    <label htmlFor="password">Password</label>
                    <input ref={passwordInput} type="password" id='password' name='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value); passwordInput.current?.setCustomValidity("")}} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-[16rem]' minLength={8} required/>
                </div>

                {/* Sign In Password and Contact */}
                <div className={`${task==="Sign Up"?"":"hidden"}`}>
                    <div className='w-full rounded-lg max-w-md flex items-center justify-between gap-4 p-4 mb-4 text-xl'>
                        <label htmlFor="confrimPassword">Confirm Password</label>
                        <input ref={confirmPasswordInput} type="password" id='confirmPassword' value={confirmPassword} name='confirmPassword' placeholder='Confirm Password' onChange={(e)=>{setConfirmPassword(e.target.value);validateConfirmPassword()}} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-[16rem]' required={task==="Sign Up"}/>
                    </div>
                    <div className='w-full rounded-lg max-w-md flex items-center justify-between gap-4 p-4 mb-4 text-xl'>
                        <label htmlFor="contact">Contact</label>
                        <input type="text" id='contact' name='contact' placeholder='Contact Info' value={contact} onChange={(e)=>setContact(e.target.value)} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-[16rem]' minLength={4} required={task==="Sign Up"}/>
                    </div>
                </div>
                
                {/* Submit */}
                <div className='flex justify-center my-2 mb-4'>
                    <button type='submit' className='border rounded-lg p-3 text-xl hover:bg-purple-950'>Submit</button>
                </div>

                {/* Login / Sign Up */}
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
