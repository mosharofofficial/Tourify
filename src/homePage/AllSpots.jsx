// import { useLoaderData } from "react-router-dom";
import SpotCard from "../shared/SpotCard";
import { useEffect, useState } from "react";

const AllSpots = () => {
  const [allSpots, setAllSpots] = useState([]);

  // const allSpots = useLoaderData();

  useEffect(() => {
    fetch(`https://a10-server-ten.vercel.app/spots`)
      .then((res) => res.json())
      .then((data) => setAllSpots(data));
  }, []);

  // if (allSpots.length === 0) {
  //   return (
  //     <div className="h-[500px] flex items-center justify-center gap-2">
  //       <span className="loading loading-infinity loading-lg"></span>
  //       <span className="loading loading-infinity loading-lg"></span>
  //       <span className="loading loading-infinity loading-lg"></span>
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* {console.log(allSpots.slice(0, 6))} */}
      <h1 className="text-center mt-6 mb-4 text-3xl md:text-4xl font-bold">
        Tourist Spots :{" "}
      </h1>
      <div className="grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allSpots.length ? (
          allSpots
            .slice(0, 6)
            .map((spotData) => (
              <SpotCard
                key={spotData._id}
                link={`https://a10-server-ten.vercel.app/spots/${spotData.tourists_spot_name}`}
                spotData={spotData}
              ></SpotCard>
            ))
        ) : (
          <div className="h-[500px] flex items-center justify-center gap-2 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
            {/* <div className=" flex items-center justify-center gap-2"> */}

            <span className="loading loading-infinity loading-lg"></span>
            <span className="loading loading-infinity loading-lg"></span>
            <span className="loading loading-infinity loading-lg"></span>
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSpots;
