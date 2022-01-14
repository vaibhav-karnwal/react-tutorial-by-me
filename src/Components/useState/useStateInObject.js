import React,{useState} from 'react'

export default function useStateInObjects(){
    const [person, setPerson] = useState({
        name:"vaibhav",
        age:26,
        message:"hello, how are you",
    })

    const ChangeDetail=()=>{
        setPerson({...person, message:"fine thankyou"})
    }

    return(
        <>
            <h3>Name: {person.name}</h3>
            <h3>Age: {person.age}</h3>
            <h3>Message: {person.message}</h3>
            <button className='btn-primary' onClick={ChangeDetail}>Change</button>
        </>
    )
}

