import Contains from '../../components/Contains'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DataBox from '../../components/DataBox'


const page = () => {
  return (
    <div className="min-h-screen p-10 gap-16  font-[family-name:var(--font-geist-sans)]">
      <div className="border flex items-center justify-between p-4 mx-8 mt-8">
          <Image width={320} height={320} src="vercel.svg" alt='My image' className='mx-auto'/>
          <Link href="/" className='border rounded-lg p-2 hover:bg-purple-950'>Home</Link>
      </div>
      <div className="flex flex-col gap-4 p-4 mx-8 mt-4 mb-16 text-center">
        <p >Name:</p>
        <p>Email:</p>
      </div>
      <div className="border flex flex-col gap-16 m-8 mb-16">
        <Contains title='Current Balance' containOne='Cash Balance' containTwo='Online Balance'/>
        <Contains title='Online Balance' containOne='Bank Balance' containTwo='Khalti Balance' />
        <Contains title='Stauts' containOne='Credit Remaining' containTwo='Debt Remaining' />
        <DataBox title='Credits Remaining' />
        <DataBox title='Debts Remaining' />
      </div>
    </div>
  )
}

export default page
