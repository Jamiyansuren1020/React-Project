import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Chuck () {
    const [jokeValue, setJokeInfo] = useState('')

    const randomJoke = () => {
        axios
        .get('https://api.chucknorris.io/jokes/random')
        .then((res) => {
            if (res.status === 200) {
                setJokeInfo(res.data.value)
            }
        })
    }
    useEffect(() => {
        // api call
        randomJoke()
    }, [])
    return (
    <div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>{jokeValue}</div>
        {/* <pre>{JSON.stringify(jokeValue, null, 2)}</pre> */}
        <button style={{borderRadius: '5px'}}
            onClick={() => {
                randomJoke()
            }}
        >
            Fetch Joke
        </button>
    </div>
    )
}