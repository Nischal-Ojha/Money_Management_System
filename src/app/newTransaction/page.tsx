"use client"

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react';
import Link from "next/link";
import CheckBoxContainer from '../../components/CheckBoxContainer';
import HistoryBox from '../../components/HistoryBox';

const NewTransaction = () => {

  const [addNew, setAddNew] = useState<boolean>(false)
  const [transactionType, setTransactionType] = useState<string>('');
  const [amount,setAmount] = useState<number|"">("")
  const [userName, setUserName] = useState<string>("")
  const [accountType, setAccountType] = useState<string>("")
  const [details, setDetails] = useState<string>("")


  // const handleSubmit = ()=>{

  // }

  const [errors, setErrors] = useState({
    transactionType: false,
    amount: false,
    userName: false,
    accountType: false,
    details: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      transactionType: transactionType === '',
      amount: amount === '' || amount <= 0,
      userName: (transactionType === "Lent" || transactionType === "Borrow") && userName === "",
      accountType: accountType === "" || accountType ==="Online",
      details: details === ""
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      return; // Prevent submission if there are errors
    }

    // Handle form submission (send to backend, save in DB, etc.)
    console.log({
      transactionType,
      amount,
      userName,
      accountType,
      details
    });

    setAddNew(false)
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
      <div className={`${addNew?"hidden":""}`}>
        <HistoryBox />
      </div>
      <div className={`${addNew?"":"hidden"}`}>
        <form onSubmit={handleSubmit} className="">

          {/* Transaction Type */}
          <div className="border relative flex items-center justify-between p-4 rounded-lg max-w-xl">
            <p className="font-medium">Type of transaction:</p>
            <div className="flex gap-6">
              {["Income", "Expense", "Lent", "Borrow"].map(type=>(
              <div key={type} className="flex items-center gap-2">
                <input type="radio" id={type} name="transactionType" value={type} checked={transactionType === type} onChange={() => {setTransactionType(type); errors.transactionType=false}} className="h-4 w-4"/>
                <label htmlFor={type} className="text-sm">{type}</label>
              </div>
              ))
              }
            </div>
          {errors.transactionType && <p className="text-red-500 text-sm mt-1 z-10 absolute left-full p-1 ml-2 w-max">Transaction type is required</p>}
          </div>

          {/* Amount and User*/}
          <div className='flex justify-between'>
            <div className='border relative flex items-center p-4 my-8 justify-between rounded-lg w-[36rem]'>
              <label htmlFor="amount" >Amount</label>
              <input type="text" id='amount' name='amount' value={amount} onChange={(e)=>{setAmount(Number(e.target.value)); errors.amount=false}} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-md'/>
              {errors.amount && <p className="text-red-500 text-sm mt-1 z-10 absolute left-full p-1 ml-2 w-max">Amount is required</p>}
            </div>
            <div className={`border relative ${(transactionType==="Lent"||transactionType==="Borrow")?`flex items-center p-4 my-8 justify-between rounded-lg w-[36rem]`:"hidden"}  `}>
                <label htmlFor="user">User</label>
                <input type="text" id='user' name='user' value={userName} onChange={(e)=>setUserName(e.target.value)}  className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-md'/>
                {errors.userName && <p className="text-red-500 text-sm mt-1 z-10 absolute top-full p-1 w-max">UserName is required</p>}
            </div>
          </div>

          {/* Account type */}
          <div className='border relative rounded-lg flex items-center justify-between p-4 max-w-xl '>
            <p className='mr-14'>Account Type:</p>
            <CheckBoxContainer type='Cash' accountType={accountType} onChange={setAccountType} err={(value)=>setErrors(prev=>({...prev,accountType:value}))} className='flex items-center gap-2 '/>
            <CheckBoxContainer type='Online' accountType={accountType} onChange={setAccountType} err={(value)=>setErrors(prev=>({...prev,accountType:value}))} className={`${(accountType==="Online"|| accountType ==="Bank" || accountType === "Khalti")?"hidden":'flex items-center gap-2'}`}/>
            <div className={`${(accountType==="Online"|| accountType ==="Bank" || accountType === "Khalti")?"flex gap-16":"hidden"}`}>
              {["Bank", "Khalti"].map((onlineType)=>
                <CheckBoxContainer key={onlineType} type={onlineType} accountType={accountType} onChange={setAccountType} err={(value)=>setErrors(prev=>({...prev,accountType:value}))} className='flex items-center gap-2 '/>
              )}
            </div>
          {errors.accountType && <p className="text-red-500 text-sm mt-1 z-10 absolute left-full p-1 ml-2 w-max">Account Type is required</p>}
          </div>

          <div className='border relative rounded-lg flex items-center justify-between p-4 max-w-xl my-8'>
            <label htmlFor="Details">Details:</label>
            <input type="text" name='details' id='details' value={details} onChange={(e)=>{setDetails(e.target.value); errors.details=false}} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-md'/>
            {errors.details && <p className="text-red-500 text-sm mt-1 z-10 absolute left-full p-1 ml-2 w-max">Details is required</p>}
          </div>
          <button type='submit' className='border rounded-lg p-4'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewTransaction
