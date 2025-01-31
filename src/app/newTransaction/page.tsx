"use client"

import React, { useState } from 'react'
import { Plus } from 'lucide-react';
import Link from "next/link";

const NewTransaction = () => {

  const [transactionType, setTransactionType] = useState<string>('');

  const handleTypeChange = (type:string) => {
    setTransactionType(type);
  };
  
  const [amount,setAmount] = useState<number|"">("")

  const handleAmountChange = (cost:string)=>{
    const value = Number(cost)
    setAmount(value)
  }

  const[userName, setUserName] = useState<string>("")

  const handleUserChange = (name:string)=>{
    setUserName(name)
  }

  const [accountType, setAccountType] = useState<string>("")

  const accountHandleChange = (account:string)=>{
    setAccountType(account)
  }

  const [details, setDetails] = useState<string>("")

  const handleDetailsChange=(value:string)=>{
    setDetails(value)
  }

  return (
    <div className="min-h-screen p-10 gap-16  font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between m-8 p-4">
        <p className='mx-auto text-3xl'>Transaction Today</p>
        <Link href="/" className='border rounded-lg p-2 hover:bg-purple-950'>Home</Link>
      </div>
      <div className="border border-t-0 border-b-0 hover:border-purple-700">
        <div className='flex justify-between items-center p-4 m-8'>
          <p>Transactions Added</p>
          <button><Plus className="hover:text-purple-400 size-9 p-2"/></button>
        </div>
      </div>
      <div className="">
        <form className="">
          <div className="border flex items-center justify-between p-4 rounded-lg max-w-xl">
            <p className="font-medium">Type of transaction:</p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="income"
                  name="transactionType"
                  value="income"
                  checked={transactionType === 'income'}
                  onChange={() => handleTypeChange('income')}
                  className="h-4 w-4"
                />
                <label htmlFor="income" className="text-sm">
                  Income
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="expense"
                  name="transactionType"
                  value="expense"
                  checked={transactionType === 'expense'}
                  onChange={() => handleTypeChange('expense')}
                  className="h-4 w-4"
                />
                <label htmlFor="expense" className="text-sm">
                  Expense
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="lent"
                  name="transactionType"
                  value="lent"
                  checked={transactionType === 'lent'}
                  onChange={() => handleTypeChange('lent')}
                  className="h-4 w-4"
                />
                <label htmlFor="lent" className="text-sm">
                  Lent
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="borrow"
                  name="transactionType"
                  value="borrow"
                  checked={transactionType === 'borrow'}
                  onChange={() => handleTypeChange('borrow')}
                  className="h-4 w-4"
                />
                <label htmlFor="borrow" className="text-sm">
                  Borrow
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='border flex items-center p-4 my-8 justify-between rounded-lg w-[36rem]'>
              <label htmlFor="amount" >Amount</label>
              <input type="text" id='amount' name='amount' value={amount} onChange={(e)=>handleAmountChange(e.target.value)} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-md'/>
            </div>
            <div className={`border ${(transactionType==="lent"||transactionType==="borrow")?`flex items-center p-4 my-8 justify-between rounded-lg w-[36rem]`:"hidden"}  `}>
                <label htmlFor="user">User</label>
                <input type="text" id='user' name='user' value={userName} onChange={(e)=>{handleUserChange(e.target.value)}}  className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-md'/>
            </div>
          </div>
          <div className='border rounded-lg flex items-center justify-between p-4 max-w-xl '>
            <p className='mr-14'>Account Type:</p>
            <div className='flex items-center gap-2'>
              <input type="radio" id='cash' name='account' value="cash" checked={accountType==="cash"} onChange={()=>{accountHandleChange("cash")}}/>
              <label htmlFor="cash">Cash</label>
            </div>
            <div className={`${(accountType==="online"|| accountType ==="bank" || accountType === "khalti")?"hidden":'flex items-center gap-2'}`}>
              <input type="radio" id='online' name='account' value="online" checked={accountType==="online"} onChange={()=>{accountHandleChange("online")}}/>
              <label htmlFor="online">Online</label>
            </div>
            <div className={`${(accountType==="online"|| accountType ==="bank" || accountType === "khalti")?"flex gap-16":"hidden"}`}>
              <div className='flex items-center gap-2'>
                <input type="radio" id='bank' name='account' value="bank" checked={accountType==="bank"} onChange={()=>{accountHandleChange("bank")}}/>
                <label htmlFor="bank">Bank</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio" id='khalti' name='account' value="khalti  " checked={accountType==="khalti"} onChange={()=>{accountHandleChange("khalti")}}/>
                <label htmlFor="khalti">Khalti</label>
              </div>
            </div>
          </div>
          <div className='border rounded-lg flex items-center justify-between p-4 max-w-xl my-8'>
            <label htmlFor="Details">Details:</label>
            <input type="text" name='details' id='details' value={details} onChange={(e)=>handleDetailsChange(e.target.value)} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none max-w-md'/>
          </div>
          <button className='border rounded-lg p-4'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NewTransaction
