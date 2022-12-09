import React, { useState } from "react";
import img1 from './memory-picture/memory-1.jpg';
import img2 from './memory-picture/memory-2.jpg';
import img3 from './memory-picture/memory-3.jpg';
import img4 from './memory-picture/memory-4.jpg';
import img5 from './memory-picture/memory-5.jpg';
import img6 from './memory-picture/memory-6.jpg';
import img7 from './memory-picture/memory-7.jpg';
import img8 from './memory-picture/memory-8.jpg';
import back from './memory-picture/memory-main-back.jpg'

function BackGround() {
    const [backpic, setBackPic] =useState([backImage])
}
function Pictures(){
    const [cartoons, setCartoons] =useState([...images, ...images])

return (
    <div>
        {cartoons.map((cartoon, cartoonIdx)=>{
            return <button onClick={(setBackPic) => {setBackPic}}><img style={{width:"50px",height:"50px",display:"flex"}} src={backpic ?cartoon.src : back} alt=""/></button> 
        })}
        
    </div>
)
}

const backImage =[
    {name:'family', src:back}
]
const images =[
    {name: 'stewie', src : img1},
    {name:'peter', src: img2},
    {name:'brian', src:img3},
    {name:'chris', src: img4},
    {name: 'quagmire', src: img5},
    {name: 'cleveland',src:img6},
    {name: 'joe', src:img7},
    {name: 'lois', src:img8},
]

export default Pictures