
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CountrySpotCard = ({ spotData }) => {
  const navigate = useNavigate();

  const {
    tourists_spot_name,
    image,
    average_cost,
    tota_visitors_per_year,
    travel_time,
    seasonality,
    country_Name,
    location,
    short_description,
  } = spotData;

  return (
    <div className="bg-yellow  border-2 border-black rounded-xl col-span-1 flex flex-col justify-between ">
      <div>
        <h1 className="text-xl font-bold border-b-2 border-black p-2 ">
          {tourists_spot_name}
        </h1>
        <img
          src={image}
          className="self-center h-[250px] p-2 mx-auto object-cover object-center rounded-2xl"
        />
        <div className="p-2 border-t-2 border-black flex flex-col gap-2">
          <h3 className="font-bold text-lg">Country : {country_Name}</h3>
          <h3 className="font-bold text-lg">
            Location : {location}
          </h3>
          <p className="border-y-2 py-1 border-black font-bold text-sm">
            Short Description :{" "}
            {short_description.split(" ").slice(0, 16).join(" ")}{" "}
            <span className="text-lg">...</span>
          </p>
          <h3 className="font-bold text-lg">Average Cost : {average_cost}</h3>
          <h3 className="font-bold text-lg">Seasonality : {seasonality}</h3>
        </div>
      </div>
      <div className="p-2 self-center">
        {/* <Navigate to={`/details/:${tourists_spot_name}`}> */}
        <button
          onClick={() => navigate(`/details/${tourists_spot_name}`)}
          className="button "
        >
          View Details
        </button>
        {/* </Navigate> */}
      </div>
    </div>
  );
};

CountrySpotCard.propTypes = {
  spotData: PropTypes.object,
};

export default CountrySpotCard;