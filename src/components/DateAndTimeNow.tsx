// "use client"

// import React, { useEffect, useState } from 'react'

// const DateAndTimeNow = () => {
//     const [date, setDate] = useState<Date>(new Date())

//     useEffect(() => {
//         // Update time every second
//         const timer = setInterval(() => {
//             setDate(new Date())
//         }, 1000)

//         // Cleanup interval on component unmount
//         return () => clearInterval(timer)
//     }, [])

//     return (
//         <p>
//             {date.toLocaleDateString()} {date.toLocaleTimeString()}
//         </p>
//     )
// }

// export default DateAndTimeNow