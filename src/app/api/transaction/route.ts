import connection from "@/app/lib/connectDatabase";
import Transaction from "@/app/models/transaction.model";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        await connection()
        console.log(request)
        const Datas = await request.json()
        const newTransaction = new Transaction(Datas)
        await newTransaction.save()
        return NextResponse.json(newTransaction, {status:201})
    }catch(error:unknown){
        if (error instanceof Error) throw new Error(`In routes:${error.message}`)
        else throw new Error("Something went wrong in routes")
    }
}


export async function GET(){
    try{
        return NextResponse.json("hello")
    }catch(error:unknown){
        if (error instanceof Error) throw new Error(`In routes:${error.message}`)
    }
}