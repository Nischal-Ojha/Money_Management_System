

export default async function getUsers(){
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/users`)
        const userData = await response.json()
         return await userData
    }catch(error){
        console.log(error)
    }
}

export  async function createUser({name, password, confirmPassword, contact}:{name:string; password:string; confirmPassword:string; contact:string}){
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/users`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name, password, confirmPassword, contact, type:"self"})
        })
        if(!response.ok) throw new Error(`Something went wrong while creating user:${response}`)
        else console.log("User created: ", await response.json())
    }catch(error){
        console.log(error)
    }
}