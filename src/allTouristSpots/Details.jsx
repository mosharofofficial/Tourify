import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const [spotData, setSpotData] = useState({});

  const { state } = useLocation();

  const apiLink = state.api;

  const {
    image,
    country_Name,
    short_description,
    tourists_spot_name,
    average_cost,
    travel_time,
    seasonality,
    tota_visitors_per_year,
    location,
  } = spotData;

  useEffect(() => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => setSpotData(data));
  }, []);

  return (
    <div>
      {console.log(apiLink)}
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
            <h3>Visitors Per Year: {tota_visitors_per_year}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
