import HistoryBox from '../../components/HistoryBox'
import React from 'react'
import Link from 'next/link'

const historyTransaction = () => {
  return (
    <div className='min-h-screen p-10 gap-16 font-[family-name:var(--font-geist-sans)]'>
      <div className="flex justify-between m-8 p-4">
        <p className='mx-auto text-3xl'>Transaction History</p>
        <Link href="/" className='border rounded-lg p-2 hover:bg-purple-950'>Home</Link>
      </div>
      <div className='p-4 my-20'>
        <HistoryBox />
      </div>
    </div>
  )
}

export default historyTransaction
