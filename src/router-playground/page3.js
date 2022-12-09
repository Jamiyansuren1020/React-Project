import { useNavigate } from "react-router-dom"

export default function Page3() {
    const navigate = useNavigate()
    return (
        <>
        <button
        onClick={()=>{
            navigate('/page1')
        }}
        >
            to page 1
        </button>
        <button
         onClick={()=>{
            navigate('/page2')
        }}
        >
            to page 2
        </button>
        <div style={{ backgroundColor: 'green', padding: 10 }}>Page3</div>
        </>
    )
}