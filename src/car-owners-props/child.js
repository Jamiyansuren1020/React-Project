import React from "react";

const  CarOwnerChild = (props) => {
    return(
        <div>Owner {props.owner.owner} bought {props.owner.carBrand} {props.owner.carYear} {props.owner.carColor}</div>
    )
}

export default CarOwnerChild