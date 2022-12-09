import {useEffect, useState} from 'react'
import axios from 'axios'
import { json } from 'react-router-dom'

export default function ApiCallPlayground() {
    const [loading, setLoading] = useState(true)
    const [beerInfo, setBeerInfo] = useState({})

    const fetchRandomBeer = () => {
        axios
        .get('https://random-data-api.com/api/v2/beers')
        .then((res) => {
            // console.log(res)
            if (res.status === 200) {
                setBeerInfo(res.data)
            }
        })
        .catch((err) => {
            // console.log(err)
            if (err.status === 404) {
                console.error('Either your endpoint is wrong or no data found!')
            }
        })
        .finally((finallyP) => {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        })
    }

    useEffect(() => {
        //api call
        fetchRandomBeer()
    }, [])

    return (
        <div>
            {loading ? (
                'Loading...'
            ) : (
                <>
                    <pre>{JSON.stringify(beerInfo, null, 2)}</pre>
                    <span>{beerInfo?.alcohol}</span>
                </>
            )}
            <button onClick={() => {
                setLoading(true)
                fetchRandomBeer()
            }}>
                Give me another beer info
            </button>
        </div>
    )
}