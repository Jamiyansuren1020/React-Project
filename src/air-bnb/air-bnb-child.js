import Airbnb from "./air-bnb-parent"

const Property = (props) => {
  return(
    <div className="container">
      <img className="picture"src={props.property.pic} alt="" />
      <div className="flex-1">{props.property.place}</div>
      <div className="flex-2">{props.property.miles}</div>
      <div className="flex-3">{props.property.date}</div>
      <div className="flex-4">{props.property.price}</div>
      <div className="flex-5">{props.property.rate}</div>
    </div>
  )
}

  export default Property