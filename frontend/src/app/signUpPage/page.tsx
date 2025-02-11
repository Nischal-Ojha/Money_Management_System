import Authenticate from '@/components/Authenticate'

const SignUpPage = () => {


  return (
    <div className='min-h-screen p-10 gap-16 flex font-[family-name:var(--font-geist-sans)]'>
      <div className="border border-red-600 rounded-3xl m-auto w-full max-w-max  p-4">
        <div className='w-full'>
          <Authenticate task="Sign Up"/>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
