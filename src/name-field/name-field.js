import React from "react";
import NamesOfPeople from "./name-field-child";

const names = [
    {
        firsName: "James", lastName: "Todbilguun",
        firsName: "Tony", lastName: "Stark",
        firsName: "Thor", lastName: "Oden",
    }
]
    const NamesOf = () => {
        return (
            <div>
               <NamesOfPeople/>
            </div>
        )
    }

    export default NamesOf