import SetUp from "@/components/SetUp"

const page = () => {
  return (
    <div className='min-h-screen p-10 gap-16 flex items-center justify-center font-[family-name:var(--font-geist-sans)]'>
        <div className='border border-purple-800 p-8 rounded-lg flex flex-col justify-between'>
            <p className="text-2xl">Setting Up your account...</p>
            <SetUp />
        </div>
    </div>
  )
}

export default page
