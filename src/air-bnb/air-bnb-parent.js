import React from "react";
import Property from "./air-bnb-child";
import pic1 from "./pictures/airbnb-pic-1.jpg";
import pic2 from "./pictures/airbnb-pic-2.jpg";
import pic3 from "./pictures/airbnb-pic-3.jpg";
import pic4 from "./pictures/airbnb-pic-4.jpg";

const airbnb = [
  {
    pic: pic1,
    place: "Kenosha, Wisconsin",
    miles: "52 miles away",
    date: "Dec 11-16",
    price: "$129 night",
    rate: 4.7,
  },
  {
    pic:pic2,
    place: "Antioch, Illinois",
    miles: "45 miles away",
    date: "Dec 12-17",
    price: "$220 night",
    rate: 4.6,
  },
  {
    pic:pic3,
    place: "Coloma, Michigan",
    miles: "52 miles away",
    date: "Dec 9-12",
    price: "$240 night",
    rate: 4.5,
  },
  {
    pic:pic4,
    place: "Buchanan, Michigan",
    miles: "52 miles away",
    date: "Dec 5-10",
    price: "$200 night",
    rate: 4.5,
  },
];
const Airbnb = () => {
  return (
    <div class="propertyList">
      {airbnb.map((property) => {
       return(
          <Property property={property}/>
       ) 
      })}
    </div>
  );
};

export default Airbnb;
