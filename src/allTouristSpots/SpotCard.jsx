import PropTypes from "prop-types";

const SpotCard = ({ spotData }) => {
  const {
    tourists_spot_name,
    image,
    average_cost,
    totalVisitorsPerYear,
    travel_time,
    seasonality,
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
          <h3 className="font-bold text-lg">Average Cost: {average_cost}</h3>
          <h3 className="font-bold text-lg">Visitors Per Year: {totalVisitorsPerYear}</h3>
          <h3 className="font-bold text-lg">Travel Time: {travel_time}</h3>
          <h3 className="font-bold text-lg">Seasonality: {seasonality}</h3>
        </div>
      </div>
      <div className="p-2 self-center">
        <button className="button ">View Details</button>
      </div>
    </div>
  );
};

SpotCard.propTypes = {
  spotData: PropTypes.object,
};

export default SpotCard;
