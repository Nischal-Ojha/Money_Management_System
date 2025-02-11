"use client"
import React, {useEffect, useState} from 'react'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SetUp = () => {
  const router = useRouter()
  const [bankBalance, setBankBalance]= useState<number|"">("")
  const [khaltiBalance, setKhaltiBalance]= useState<number|"">("")
  const [cashBalance, setCashBalance]= useState<number|"">("")
  const [userName, setUserName]= useState<string>("")
  const [type, setType]= useState<string>("")
  const [contact, setContact]= useState<string>("")
  const [debtAmount, setDebtAmount]= useState<number|"">("")
  const [balanceStage, setBalanceStage] =useState<boolean>(true)
  const [addDebt, setAddDebt] =useState<boolean>(true)
  const [debtStats, setDebtStats] = useState<{userName:string, type:string, contact:string, debtAmount:number|""}[]>([])


  useEffect(()=>{
    console.log("Debt Stats: ", debtStats)
  },[debtStats])

  const handleAddDebt=(e:React.FormEvent)=>{
    e.preventDefault()

    if(!userName|| !type|| !contact ||debtAmount ==""){
      alert("Please fill all fields before adding")
      return
    }
    
    const newDebt = {userName, type, contact, debtAmount:Number(debtAmount)}
    setDebtStats((prev)=>[...prev, newDebt])
    setUserName("")
    setType("")
    setContact("")
    setDebtAmount("")
    setAddDebt(true)
  }

  const handleBalanceSubmit = (e:React.FormEvent)=>{
    e.preventDefault()

    console.log("Bank:", Number(bankBalance), " Khalti:", Number(khaltiBalance), " Cash:", Number(cashBalance))

    setBalanceStage(!balanceStage)
    console.log("addDebt:", addDebt, "balanceStage:", balanceStage)
  }

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()

    
    if(userName && type && contact && debtAmount !== ""){
      const newDebt = {userName, type, contact, debtAmount:Number(debtAmount)}
      setDebtStats((prev)=>[...prev, newDebt])
    }

    router.push('/')
    console.log("addDebt:", addDebt, "balanceStage:", balanceStage)
  }
  return (
    <div className='p-4'>
      {balanceStage &&
        (<div>
          <p className='text-lg mt-6'>Enter your current balances</p>
          <form onSubmit={handleBalanceSubmit} className='flex flex-col gap-6 mt-8'>
                <div className='flex items-center gap-2 justify-between'>
                    <label htmlFor="bank">Bank Balance:</label>
                    <input type="number" name='bank' id='bank' value={bankBalance} placeholder='Enter Bank balance' onChange={(e)=>setBankBalance(Number(e.target.value))} className='bg-gray-700 p-2 rounded-lg text-white outline-none w-[16rem]'/>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <label htmlFor="khalti">Khalti Balance:</label>
                    <input type="number" name='khalti' id='khalti' value={khaltiBalance} placeholder='Enter Khalti balance' onChange={(e)=>setKhaltiBalance(Number(e.target.value))} className='bg-gray-700 p-2 rounded-lg text-white outline-none w-[16rem]'/>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <label htmlFor="cash">Cash Balance:</label>
                    <input type="number" name='cash' id='cash' value={cashBalance} placeholder='Enter Cash balance' onChange={(e)=>setCashBalance(Number(e.target.value))} className='bg-gray-700 p-2 rounded-lg text-white outline-none w-[16rem]'/>
                </div>
                <div className='flex justify-end '>
                    <button className='p-2 rounded-full bg-purple-700 hover:bg-purple-600' type='submit'><ChevronRight className='text-green-300 w-8 h-8 hover:text-green-200' /></button>
                </div>
          </form>
        </div>)
      }
      {!balanceStage && addDebt && (<div>
      <p className='text-lg mt-6'>Enter your Debts</p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 mt-8'>
              <div className='flex items-center gap-2 justify-between'>
                  <label htmlFor="user">User Name:</label>
                  <input type="text" name='user' id='user' value={userName} placeholder='Enter User Name' required onChange={(e)=>setUserName(e.target.value)} className='bg-gray-700 p-2 rounded-lg text-white outline-none w-[16rem]'/>
              </div>
              <div className='flex items-center gap-2 justify-between'>
                  <label htmlFor="DebtType">Debt Type:</label>
                  <input type="text" name='DebtType' id='DebtType' value={type} placeholder='Enter Type of Debt' required onChange={(e)=>setType(e.target.value)} className='bg-gray-700 p-2 rounded-lg text-white outline-none w-[16rem]'/>
              </div>
              <div className='flex items-center gap-2 justify-between'>
                  <label htmlFor="debtAmount">Cash Balance:</label>
                  <input type="number" name='debtAmount' id='debtAmount' value={debtAmount} placeholder='Enter Debt Amount' required onChange={(e)=>setDebtAmount(Number(e.target.value))} className='bg-gray-700 p-2 rounded-lg text-white outline-none w-[16rem]'/>
              </div>
              <div className='flex items-center gap-2 justify-between'>
                  <label htmlFor="Contact">Contact:</label>
                  <input type="text" name='Contact' id='Contact' value={contact} placeholder='Enter Contact Info' required onChange={(e)=>setContact(e.target.value)} className='bg-gray-700 p-2 rounded-lg text-white outline-none w-[16rem]'/>
              </div>
              <div className='flex justify-evenly'>
                <div className='flex justify-center mt-2'>
                    <button className='p-4 rounded-lg bg-orange-700 text-lg hover:bg-orange-600' onClick={handleAddDebt}>Add</button>
                </div>
                <div className='flex justify-center mt-2'>
                    <button className='p-4 rounded-lg bg-purple-700 text-lg hover:bg-purple-600' type='submit'>Submit</button>
                </div>
              </div>
        </form>
      </div>)}
    </div>
  )
}

export default SetUp
