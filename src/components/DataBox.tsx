import React from 'react'

interface DataBoxProps {
    title:string,
}

const data = [
    { id: 1, name: "John Doe", amount: 100 },
    { id: 2, name: "Jane Smith", amount: 200 },
    { id: 3, name: "John Doe", amount: 100 },
    { id: 4, name: "Jane Smith", amount: 200 },
  ];

const DataBox:React.FC<DataBoxProps>=({title}) => {
// const DataBox=() => {
  return (
    <div className="overflow-x-auto">
      <p className='text-center text-2xl mb-6 '>{title}</p>
      <table className="min-w-full bg-black border border-gray-300">
        <thead>
          <tr className="bg-black text-white">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Amount</th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={`${index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"} hover:bg-gray-500`}>
              <td className="py-2 px-4 border text-center">{item.id}</td>
              <td className="py-2 px-4 border text-center">{item.name}</td>
              <td className="py-2 px-4 border text-center">${item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataBox
