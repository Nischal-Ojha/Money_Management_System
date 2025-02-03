"use client"

// import React, { useEffect, useState } from 'react'


interface datas  {
  transactionType:string;
  amount:number;
  accountType:string;
  details:string;
  userName?:string
}

interface HistoryBoxProps {
  datas:datas[]
}


// According to the type of transaction, change the color of text
const HistoryBox:React.FC<HistoryBoxProps> = ({datas = []}) => {
  // const formatter = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  // const [date, setDate] = useState<Date>(new Date())

  // useEffect(()=>{

  //   const dateNow = setInterval(()=>{
  //       setDate(new Date())
  //   },1000)

  //   return ()=> clearInterval(dateNow)

  // },[])

  // const data = [
  //   { id: 1, Date:formatter.format(date), Detail: "John Doe was given 100 from bank account", UserName:"John Doe" ,Amount: 100, Account:"Bank", Type:"Expense" },
  //   { id: 2, Date:formatter.format(date), Detail: "Jane Smith gave 200 into my khalti account", UserName:"Jane Smith",Amount: 200, Account:"Khalti", Type:"Income" },
  //   { id: 3, Date:formatter.format(date), Detail: "Spent 100 for breakfast", UserName:"",Amount: 100, Account:"Cash", Type:"Expense" },
  //   { id: 4, Date:formatter.format(date), Detail: "Got 10000 from father in bank account", UserName:"",Amount: 10000, Account:"Bank" , Type:"Income"},
  // ];
  return (
    <div className='border'>
      <table className='min-w-full bg-black border border-gray-300'>
        <thead>
            <tr className='"bg-black text-white'>
                {/* <th className='border p-4 min-w-56 py-2 px-4 '>Date</th> */}
                <th className='border p-4 min-w-56'>Detail</th>
                <th className='border p-4 min-w-56'>UserName</th>
                <th className='border p-4 min-w-56'>Amount</th>
                <th className='border p-4 min-w-56'>Account</th>
            </tr>
        </thead>
        <tbody>
        {datas.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"} ${["Income", "Received"].includes(item.transactionType)?"text-green-600":"text-red-600"} hover:bg-gray-500`} >
              {/* <td className="py-2 px-4 border text-center">{item.Date}</td> */}
              <td className="py-2 px-4 border text-center">{item.details}</td>
              <td className="py-2 px-4 border text-center">{item.userName}</td>
              <td className="py-2 px-4 border text-center">Rs.{item.amount}</td>
              <td className="py-2 px-4 border text-center">{item.accountType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HistoryBox
