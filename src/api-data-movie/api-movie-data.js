import { useEffect, useState } from "react";
import axios from 'axios'
import Select from 'react-select'


export default function MovieData() {
    const [movieInfo, setMovieInfo] = useState({})

    const fetchMovieInfo = () => {
        axios 
        .get('https://api.themoviedb.org/3/search/movie?query=home%20alone&api_key=cfe422613b250f702980a3bbf9e90716')
        .then((res) => {
            if (res.status === 200) {
                setMovieInfo(res.data)
            }
        })
    }

    useEffect(() => {
        fetchMovieInfo()
    }, [])
    
    return(
        <div>
            <Select
            isSearchable = {true}
            options ={[
                {value: 'a', label: 'a'},
                {value: 'b', label: 'b'},
            ]}/>
            <pre>{JSON.stringify(movieInfo,null, 2)}</pre>
        </div>
    )
}