"use client"

import React, { useEffect, useState } from 'react'
import { Plus, Minus } from 'lucide-react';
import Link from "next/link";
import HistoryBox from '../../components/todaysHistoryBox';
import getDatas from '../api/transactionHistory';
import { datas } from '../../components/todaysHistoryBox';

const NewTransaction = () => {

  const [addNew, setAddNew] = useState<boolean>(false)
  const [transactionType, setTransactionType] = useState<string>('');
  const [amount,setAmount] = useState<number|"">("")
  const [userName, setUserName] = useState<string>("")
  const [accountType, setAccountType] = useState<string>("")
  const [details, setDetails] = useState<string>("")
  const [showOthers, setShowOthers] = useState<boolean>(false)
  const [showOthers2, setShowOthers2] = useState<boolean>(false)
  const [todayData, SetTodayData] = useState<datas[]>()


  const handelTransactionType=(type:string)=>{
    if(type === "Others") setShowOthers(true)
    setTransactionType(type)
  }

  const handelAccontType=(type:string)=>{
    if(type === "Online") setShowOthers2(true)
    setAccountType(type)
  }


  useEffect(()=>{
    async function newData(){
      SetTodayData(await getDatas("today"))
    }
    newData()
  },[addNew]) 


  const initialOptions = ["Income", "Expense", "Others"]
  const otherOptions = ["Lent", "Borrow", "Payed", "Received"]

  const initialOptions2 = ["Cash", "Online"]
  const otherOptions2 = ["Cash", "Khalti", "Bank"]
  
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    try{
      console.log(`${process.env.NEXT_PUBLIC_API_URL}api/newTransaction`)
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/newTransaction`,{
      const response = await fetch(`http://localhost:3000/api/newTransaction`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({transactionType, amount, userName:userName, details:userName===""?details:`${details}, ${transactionType}`, accountType})
      })

      if (!response.ok) {
        const responseBody = await response.json();
        console.error("Error from backend:", responseBody);
        throw new Error("Failed to send data to the backend");
      }

      
      const result = await response.json();
      console.log("Response from backend", result)

    }catch(error:unknown){
      if(error instanceof Error) throw new Error(`While fetching: ${error.message}`)
      else throw new Error("Error occured while fetching")
    }

     SetTodayData(await getDatas("today"))

    setAddNew(false)
    setShowOthers(false)
    setShowOthers2(false)
    setTransactionType("");setAmount("");setUserName("");setDetails("");setAccountType("");
  };



  return (
    <div className="min-h-screen p-10 gap-16  font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between m-8 p-4">
        <p className='mx-auto text-3xl'>Transaction Today</p>
        <Link href="/" className='border rounded-lg p-2 hover:bg-purple-950'>Home</Link>
      </div>
      <div className="border border-t-0 border-b-0 hover:border-purple-700">
        <div className='flex justify-between items-center p-4 m-8'>
          <p>Transactions Added</p>
          <button onClick={()=>setAddNew(!addNew)}>{addNew?<Minus className="hover:text-purple-400 size-9 p-2" />:<Plus className="hover:text-purple-400 size-9 p-2" />}</button>
        </div>
      </div>

      {/* History Box  */}
      <div className={`${addNew?"hidden":""}`}>
        {/* <p>hi</p> */}
          <HistoryBox datas={todayData} location="today" />
      </div>

      {/* Add New Transaction */}
      <div className={`${addNew?"":"hidden"}`}>
        <form onSubmit={handleSubmit} className="">

          {/* Transaction Type */}
          <div className="border relative flex items-center justify-between p-4 rounded-lg max-w-xl">
            <p className="font-medium">Type of transaction:</p>
            <div className={`flex items-center ${showOthers?"gap-8":"gap-10"}`}>
              {(showOthers?otherOptions:initialOptions).map(type=>(
              <div key={type} className="flex items-center gap-2">
                <input type="radio" id={type} name="transactionType" value={type} required checked={transactionType === type} onChange={() => {handelTransactionType(type)}} className="h-4 w-4"/>
                <label htmlFor={type} className="text-sm">{type}</label>
              </div>
              ))
              }
            </div>
          </div>

          {/* Amount and User*/}
          <div className='flex justify-between'>
            <div className='border relative flex items-center p-4 my-8 justify-between rounded-lg w-[36rem]'>
              <label htmlFor="amount" >Amount</label>
              <input type="text" id='amount' name='amount' value={amount} required onChange={(e)=>{setAmount(Number(e.target.value))}} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-md'/>
            </div>
            <div className={`border relative ${showOthers?`flex items-center p-4 my-8 justify-between rounded-lg w-[36rem]`:"hidden"}`}>
                <label htmlFor="user">User</label>
                <input type="text" id='user' name='user' value={userName} required={showOthers} onChange={(e)=>{setUserName(e.target.value)}}  className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-md'/>
            </div>
          </div>

          {/* Account type */}
          <div className="border relative flex items-center justify-between p-4 rounded-lg max-w-xl">
            <p className="font-medium">Account:</p>
            <div className={`flex items-center ${showOthers?"gap-8":"gap-10"}`}>
              {(showOthers2?otherOptions2:initialOptions2).map(type=>(
              <div key={type} className="flex items-center gap-2">
                <input type="radio" id={type} name="accountType" value={type} required checked={accountType === type} onChange={() => {handelAccontType(type)}} className="h-4 w-4"/>
                <label htmlFor={type} className="text-sm">{type}</label>
              </div>
              ))
              }
            </div>
          </div>
          
          {/* Details */}
          <div className='border relative rounded-lg flex items-center justify-between p-4 max-w-xl my-8'>
            <label htmlFor="Details">Details:</label>
            <input type="text" name='details' id='details' value={details} required onChange={(e)=>{setDetails(e.target.value)}} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-md'/>
          </div>

          {/* Submit */}
          <button type='submit' className='border rounded-lg p-4'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewTransaction
