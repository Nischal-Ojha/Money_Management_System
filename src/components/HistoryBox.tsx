"use client"

import React, { useEffect, useState } from 'react'


// According to the type of transaction, change the color of text
const HistoryBox = () => {
  const formatter = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const [date, setDate] = useState<Date>(new Date())

  useEffect(()=>{

    const dateNow = setInterval(()=>{
        setDate(new Date())
    },1000)

    return ()=> clearInterval(dateNow)

  },[])

  return (
    <div className='border'>
      <table className='border w-full'>
        <thead>
            <tr className='border'>
                <th className='border p-4 min-w-56'>Date</th>
                <th className='border p-4 min-w-56'>Detail</th>
                <th className='border p-4 min-w-56'>Amount</th>
                <th className='border p-4 min-w-56'>Account</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border text-center'>
                <td className='border p-4'>{formatter.format(date)}</td>
                <td className='border p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestiae praesentium asperiores natus suscipit soluta doloremque odio, veritatis at distinctio quidem nisi </td>
                <td className='border p-4'>6000</td>
                <td className='border p-4'>Bank</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HistoryBox
