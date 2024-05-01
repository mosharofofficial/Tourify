
import PropTypes from "prop-types";

const Row = ({ spotData }) => {
  const { tourists_spot_name, average_cost, travel_time, seasonality } =
    spotData;

  return (
    <div className="flex w-full justify-between items-center border-b-2 border-black pb-2 mb-3">
        <h3 className="flex-1 text-center">{tourists_spot_name}</h3>
        <h3 className="flex-1 text-center">{average_cost}</h3>
        <h3 className="flex-1 text-center">{travel_time}</h3>
        <h3 className="flex-1 text-center">{seasonality}</h3>
      <div className="flex flex-col flex-1 gap-0.5">
        <button className="button text-sm">Update</button>
        <button className="button text-sm">Delete</button>
      </div>
    </div>
  );
};

Row.propTypes = {
  spotData: PropTypes.object,
};

export default Row;
