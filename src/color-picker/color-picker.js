import { useState } from "react";
import pic1 from "./color-picture/rainbow.jpg"

function ColorA() {

    const [colorPicker, setColorPicker] =useState({ColorA :"#000000", ColorB: "#ffffff"})
    const onColorChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        setColorPicker((currState)=> {
            return {
                ...currState,
                [fieldName]:fieldValue,
            }
        })
    }

return (
    <div>
        
        <label>
            ColorA:
            <input type='color'
            name="ColorA"
            value={colorPicker.ColorA}
            onChange={(e) => {
                onColorChange(e)
            }}>
                
            </input>
        </label>
        <label>
            ColorB:
            <input type='color'
            name="ColorB"
            value={colorPicker.ColorB}
            onChange={(e) => {
                onColorChange(e)
            }}>
                
            </input>
        </label>
        <div style={{ display:"flex" ,justifyContent:'center', alignItem:'center',marginTop:'50px' }}>
        <div style={{height: '300px' ,width:'500px',backgroundImage:`linear-gradient(${colorPicker.ColorA}, ${colorPicker.ColorB})`}}>
        
        </div>
        </div>
        
    </div>
)
}

export default ColorA