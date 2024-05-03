import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Row = ({ spotData, link }) => {
  const { tourists_spot_name, average_cost, travel_time, seasonality } =
    spotData;

  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://a10-server-ten.vercel.app/userAdded/${tourists_spot_name}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Spot data has been deleted.",
                icon: "success",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  location.reload();
                }
              });
            }
          });
      }
    });
    // fetch(link, {
    //   method: "DELETE",
    // }).then((res) => {
    //   return res.json();
    // });
    // .then((data) => data.deletedCount && location.reload());
  };

  return (
    <div className="flex w-full justify-between items-center border-b-2 border-black pb-2 mb-3">
      <h3 className="flex-1 text-center">{tourists_spot_name}</h3>
      <h3 className="flex-1 text-center">{average_cost}</h3>
      <h3 className="flex-1 text-center">{travel_time}</h3>
      <h3 className="flex-1 text-center">{seasonality}</h3>
      <div className="flex flex-col flex-1 gap-0.5">
        <button
          onClick={() => navigate("/update", { state: { api: link } })}
          className="button text-sm"
        >
          Update
        </button>
        <button onClick={handleDelete} className="button text-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

Row.propTypes = {
  spotData: PropTypes.object,
  link: PropTypes.string,
};

export default Row;
