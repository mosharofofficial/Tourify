// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SpotCard from "../shared/SpotCard";

const AllUserAddedSpots = () => {
  const [allSpots, setAllSpots] = useState([]);

  // const allSpots = useLoaderData();

  useEffect(() => {
    fetch(`https://a10-server-ten.vercel.app/userAdded`)
      .then((res) => res.json())
      .then((data) => setAllSpots(data));
  }, []);

  const sortSpots = () => {
    // allSpots.map((spot) => console.log(spot.average_cost));

    const sorted = allSpots.toSorted((a, b) => {
      const intA = parseInt(a.average_cost.split("$")[1]);
      const intB = parseInt(b.average_cost.split("$")[1]);
      return intA - intB;
    });
    setAllSpots(sorted);
    // console.log("_____________");
    // sorted.map((spot) => console.log(spot.average_cost));
  };

  return (
    <div>
      {/* {console.log(allSpots)} */}
      <h1 className="text-center mt-6 mb-4 text-3xl md:text-4xl font-bold">
        All Tourist spots :{" "}
      </h1>

      <button onClick={sortSpots} className="button mb-5 mx-auto ">
        Sort by average cost
      </button>

      <div className="grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allSpots.length ? (
          allSpots.map((spotData) => (
            <SpotCard
              key={spotData._id}
              link={`https://a10-server-ten.vercel.app/userAdded/${spotData.tourists_spot_name}`}
              spotData={spotData}
            ></SpotCard>
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
    </div>
  );
};

export default AllUserAddedSpots;
