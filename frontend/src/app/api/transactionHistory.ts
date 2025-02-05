// import { NextApiRequest, NextApiResponse } from "next";


export default async function getDatas(location:string){
    try{
        const newData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${location==="today"?"api/transactionToday":"api/transactionHistory"}`)
        const nextdata = await newData.json()
        console.log("connected to", process.env.NEXT_PUBLIC_API_URL)
        return  await nextdata
      }catch(error){
        console.log(error)
      }
}
