import { useEffect, useState } from "react";
import axios from 'axios'
import "./githubInfo.css"

export default function GitHub() {
    const [githubInfo, setGithubInfo] = useState({})
 
    const fetchGithubInfo = () => {
        axios
        .get('https://api.github.com/users/Jamiyansuren1020')
        .then((res) => {
            if (res.status === 200) {
                setGithubInfo(res.data)
            }
        })
    }
    useEffect(() => {
        fetchGithubInfo()
    }, [])
    return (
        <div className="main-container">
            <div className="second-container">
                {/* <pre>{JSON.stringify(githubInfo, null, 2)}</pre> */}
                <div className="image-container">
                <img className="profile-image" src={githubInfo.avatar_url}/>
                </div>
                <div className="profile-name">{githubInfo.name}</div>
                <div className="login">
                    {githubInfo.login}
                </div>
                <div className="bio">{githubInfo.bio}</div>
                <div className="followersinfo">
                    <div className="followers" >{githubInfo.followers}
                    <br/>Followers</div>
                    <div>{githubInfo.following}
                    <br/>Following</div>
                    <div>{githubInfo.public_repos}
                    <br/>Repositories</div>
                </div>
            </div>
        </div>
    )
}

