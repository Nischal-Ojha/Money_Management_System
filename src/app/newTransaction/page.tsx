"use client"

import React, { useState } from 'react'

// import React from "react"
import { Plus } from 'lucide-react';
import Link from "next/link";

const NewTransaction = () => {
  // // State for form data
  // const [name, setName] = useState<string>("")
  // const [email, setEmail] = useState<string>("")
  
  // // Handler for form submission
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  
  //   // Example of what you could do with the form data, e.g., sending it to an API
  //   const formData = { name, email };
  
  //   try {
  //     const res = await fetch('/api/form-action', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (res.ok) {
  //       console.log('Form submitted successfully!');
  //     } else {
  //       console.error('Error submitting form');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  // const [transactionTypes, setTransactionTypes] = useState<{
  //   income: boolean;
  //   expense: boolean;
  //   lent: boolean;
  //   borrow: boolean;
  // }>({
  //   income: false,
  //   expense: false,
  //   lent: false,
  //   borrow: false,
  // });

  // // Handler to update state when a checkbox is toggled
  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = event.target;
  //   setTransactionTypes((prevState) => ({
  //     ...prevState,
  //     [name]: checked,
  //   }));
  // };

  // // Form submission logic (example)
  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   console.log('Selected transaction types:', transactionTypes);
  //   // Here you can handle form submission (e.g., save to a database or send to an API)
  // };

  const [transactionType, setTransactionType] = useState<string>('');

  const handleTypeChange = (type:string) => {
    setTransactionType(type);
  };
  
  const [amount,setAmount] = useState<number|"">("")

  const handleAmountChange = (cost:string)=>{
    const value = Number(cost)
    setAmount(value)
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
          <div className="border flex items-center justify-between p-4 rounded-lg max-w-md">
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
            </div>
          </div>
          <div className='border flex items-center p-4 my-8 gap-4 rounded-lg max-w-md'>
            <label htmlFor="amount" >Amount</label>
            <input type="text" id='amount' name='amount' value={amount} onChange={(e)=>handleAmountChange(e.target.value)} className='bg-gray-700 p-2 rounded-lg text-white w-full outline-none'/>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default NewTransaction
