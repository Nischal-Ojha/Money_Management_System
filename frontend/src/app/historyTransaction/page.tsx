import HistoryBox from '../../components/todaysHistoryBox'
import Link from 'next/link'
import getDatas from '../api/transactionHistory'

const historyTransaction = async() => {

  // const historyFetch= async()=>{
  //   try{
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}:3000`)
  //     const history = await response.json()
  //     console.log(history)
  //   }catch(error:unknown){
  //     console.log(error)
  //   }
  // }

  const newdata = await getDatas("")
  return (
    <div className='min-h-screen p-10 gap-16 font-[family-name:var(--font-geist-sans)]'>
      <div className="flex justify-between m-8 p-4">
        <p className='mx-auto text-3xl'>Transaction History</p>
        <Link href="/" className='border rounded-lg p-2 hover:bg-purple-950'>Home</Link>
      </div>
      <div className='p-4 my-20'>
        <HistoryBox datas={newdata} location=''/>
      </div>
    </div>
  )
}

export default historyTransaction
