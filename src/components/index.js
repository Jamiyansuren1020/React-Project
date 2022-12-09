import React, { useState } from "react";

const DemoUseStates = () => {
    const [ageJamiya, setAgeJamiya]= useState(18)
    const [address, setAddress] = useState('4736 arbor dr')

    console.log(ageJamiya)

    const ageUpJamiyaFunction = () => {
        console.log('Jamiya is aging up')
        setAgeJamiya((currentState) => {
            return currentState + 1
        })
    }

    return(
        <div>
            <div>Jamiya is {ageJamiya} years old!</div>
            <div>Address: {address}</div>
                {/* onClick={() => {
                    console.log('work,clicked') */}
                   <button onClick={ageUpJamiyaFunction}>Age up Jamiya</button>
                   <button onClick={() => setAddress('Chicago, IL')}>change address</button>
        </div>
    )
}
export default DemoUseStates