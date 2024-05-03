import  { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import CountrySpotCard from "./CountrySpotCard";

const CoutrySpots = () => {
  const params = useParams();
  // console.log(params);

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch(`https://a10-server-ten.vercel.app/countries/${params.countryName}`)
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);

  return (
    <div className="mt-10 grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {spots.length ? (
        spots.map((spotData) => (
          <CountrySpotCard key={spotData._id} spotData={spotData}></CountrySpotCard>
          // console.log(spotData)
        ))
      ) : (
        <div className="h-[500px] flex items-center justify-center gap-2 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
          <span className="loading loading-infinity loading-lg"></span>
          <span className="loading loading-infinity loading-lg"></span>
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </div>
  );
};

CoutrySpots.propTypes = {};

export default CoutrySpots;
