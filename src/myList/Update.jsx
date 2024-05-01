import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Update = () => {
  const { state } = useLocation();
  // console.log(state.api);
  const api = state.api;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submitted');

    const form = e.target;

    const image = form.imageURL.value;
    const tourists_spot_name = form.spotName.value;
    const country_Name = form.countryName.value;
    const location = form.location.value;
    const short_description = form.shortDescription.value;
    const average_cost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travelTime.value;
    const tota_visitors_per_year = form.visitorsPerYear.value;
    const newSpot = {
      image,
      tourists_spot_name,
      country_Name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      tota_visitors_per_year,
    };
    console.log(newSpot);

    fetch(api, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newSpot),
    });
  };

  return (
    <div className="my-10 p-4 bg-yellow rounded-xl border-2 border-black">
      <h1 className="mb-3 font-bold text-xl px-4 sm:px-0">
        Update Tourist Spot :{" "}
      </h1>

      <form onSubmit={handleSubmit} className="addSpot flex flex-col gap-1 ">
        <label className="sm:bg-black sm:text-white sm:items-center   font-bold input sm:input-bordered h-auto flex items-start py-1 flex-col sm:flex-row bg-transparent">
          <span className="text-sm">imageURL :</span>
          <input
            name="imageURL"
            type="text"
            className=" grow rounded-[5px] w-full sm:w-auto text-white pl-1"
          />
        </label>
        <label className="sm:bg-black sm:text-white sm:items-center   font-bold input sm:input-bordered h-auto flex items-start py-1 flex-col sm:flex-row bg-transparent">
          <span className="text-sm">Tourist Spot Name :</span>
          <input
            name="spotName"
            type="text"
            className=" grow rounded-[5px] w-full sm:w-auto text-white pl-1"
          />
        </label>
        <label className="sm:bg-black sm:text-white sm:items-center   font-bold input sm:input-bordered h-auto flex items-start py-1 flex-col sm:flex-row bg-transparent">
          <span className="text-sm">Country Name :</span>
          <input
            name="countryName"
            type="text"
            className=" grow rounded-[5px] w-full sm:w-auto text-white pl-1"
          />
        </label>
        <label className="sm:bg-black sm:text-white sm:items-center   font-bold input sm:input-bordered h-auto flex items-start py-1 flex-col sm:flex-row bg-transparent">
          <span className="text-sm">Location :</span>
          <input
            name="location"
            type="text"
            className=" grow rounded-[5px] w-full sm:w-auto text-white pl-1"
          />
        </label>
        <label className="sm:bg-black sm:text-white sm:items-center   font-bold input sm:input-bordered h-auto flex items-start py-1 flex-col sm:flex-row bg-transparent">
          <span className="text-sm">Short Description :</span>
          <input
            name="shortDescription"
            type="text"
            className=" grow rounded-[5px] w-full sm:w-auto text-white pl-1"
          />
        </label>
        <label className="sm:bg-black sm:text-white sm:items-center   font-bold input sm:input-bordered h-auto flex items-start py-1 flex-col sm:flex-row bg-transparent">
          <span className="text-sm">Average Cost :</span>
          <input
            name="averageCost"
            type="text"
            className=" grow rounded-[5px] w-full sm:w-auto text-white pl-1"
          />
        </label>
        <label className="sm:bg-black sm:text-white sm:items-center   font-bold input sm:input-bordered h-auto flex items-start py-1 flex-col sm:flex-row bg-transparent">
          <span className="text-sm">Seasonality :</span>
          <input
            name="seasonality"
            type="text"
            className=" grow rounded-[5px] w-full sm:w-auto text-white pl-1"
          />
        </label>
        <label className="sm:bg-black sm:text-white sm:items-center   font-bold input sm:input-bordered h-auto flex items-start py-1 flex-col sm:flex-row bg-transparent">
          <span className="text-sm">Travel Time :</span>
          <input
            name="travelTime"
            type="text"
            className=" grow rounded-[5px] w-full sm:w-auto text-white pl-1"
          />
        </label>
        <label className="sm:bg-black sm:text-white sm:items-center   font-bold input sm:input-bordered h-auto flex items-start py-1 flex-col sm:flex-row bg-transparent">
          <span className="text-sm">Visitors Per Year :</span>
          <input
            name="visitorsPerYear"
            type="text"
            className=" grow rounded-[5px] w-full sm:w-auto text-white pl-1"
          />
        </label>

        <button className="button  py-2 mt-2" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

Update.propTypes = {};

export default Update;
