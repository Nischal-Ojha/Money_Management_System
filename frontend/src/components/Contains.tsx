import React from 'react'

interface ContainsProps {
  title:string,
  containOne:string,
  containTwo:string
}

const Contains:React.FC<ContainsProps> = ({title, containOne, containTwo}) => {
  return (
    <div className="border flex flex-col gap-4 p-4">
        <p className="text-lg text-center ">{title}:</p>
        <div className="flex justify-evenly mb-8">
            <p >{containOne}:</p>
            <p >{containTwo}:</p>
        </div>
    </div>
  )
}

export default Contains
