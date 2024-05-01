import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserAddedDetails = () => {
  const { spotName } = useParams();

  //   const spotName = spotNameParam.split(":")[1];

  const [spotData, setSpotData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/userAdded/${spotName}`)
      .then((res) => res.json())
      .then((data) => setSpotData(data));
  }, []);

  const {
    image,
    tourists_spot_name,
    country_Name,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    location,
  } = spotData;

  return (
    <div>
      {/* {console.log(country_Name)} */}
      <div className="bg-yellow p-5 my-6 rounded-xl">
        <img src={image} className="rounded-xl" />
        <div className="">
          <h1 className="border-y-2 border-black my-2 py-2 text-3xl font-bold">
            {tourists_spot_name}
          </h1>
          <p className="border-b-2 border-black mb-2 pb-2">
            <span className="font-bold">Description: </span>
            <br />
            {short_description}
          </p>
          <div className="font-bold text-lg">
            <h3>Country: {country_Name}</h3>
            <h3>Location: {location}</h3>
            <h3>Seasonality: {seasonality}</h3>
            <h3>Travel Time: {travel_time}</h3>
            <h3>Average Cost: {average_cost}</h3>
            <h3>Visitors Per Year: {totalVisitorsPerYear}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddedDetails;
