import React from "react";
import CarOwnerChild from "./child";

const owners = [
    {
        owner: 'James',
        carBrand: 'Lexus',
        carYear: 2020,
        carColor: 'white',
    },
    {
        owner:'Bob',
        carBrand:'Mercedes',
        carYear: 2019,
        carColor:'black'
    }
]
const CarOwners =() => {
    return (
        <div>
            {owners.map((owner, ownerIdx) => {
                return(
                    <CarOwnerChild owner={owner} key={ownerIdx}/>
                )
            }
            )}
        </div>
    )
}
export default CarOwners