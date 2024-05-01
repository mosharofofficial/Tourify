// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SpotCard from "../shared/SpotCard";

const AllUserAddedSpots = () => {
  const [allSpots, setAllSpots] = useState([]);

  // const allSpots = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/userAdded`)
      .then((res) => res.json())
      .then((data) => setAllSpots(data));
  }, []);

  return (
    <div>
      {/* {console.log(allSpots)} */}
      <h1 className="text-center mt-6 mb-4 text-3xl md:text-4xl font-bold">
        All the tourist spots :{" "}
      </h1>
      <div className="grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allSpots.map((spotData) => (
          <SpotCard
            key={spotData._id}
            link={`http://localhost:5000/userAdded/${spotData.tourists_spot_name}`}
            spotData={spotData}
          ></SpotCard>
          // console.log(spotData)
        ))}
      </div>
    </div>
  );
};

export default AllUserAddedSpots;
