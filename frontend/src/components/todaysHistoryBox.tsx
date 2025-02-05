"use client"

export interface datas {
  updatedAt:string
  transactionType:string;
  amount:number;
  accountType:string;
  details:string;
  userName?:string
}

interface HistoryBoxProps {
  datas?:datas[];
  location:string;
}

const HistoryBox:React.FC<HistoryBoxProps> = ({datas = [], location}) => {
  // console.log(location)
  return (
    <div className='border'>
      <table className='min-w-full bg-black border border-gray-300'>
        <thead>
            <tr className='"bg-black text-white'>
                <th className={`${location==="today"?"hidden":'border p-4 min-w-56'}`}>Date</th>
                <th className='border p-4 min-w-56'>Detail</th>
                <th className='border p-4 min-w-56'>UserName</th>
                <th className='border p-4 min-w-56'>Amount</th>
                <th className='border p-4 min-w-56'>Account</th>
            </tr>
        </thead>
        <tbody>
        {datas.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"} ${["Income", "Received", "Borrow"].includes(item.transactionType)?"text-green-600":"text-red-600"} hover:bg-gray-700`} >
              <td className={`${location==="today"?"hidden":'border p-4 min-w-56 text-center'}`}>{item.updatedAt.split("T")[0]}</td>
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
