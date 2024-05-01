// import { useLoaderData } from "react-router-dom";
import SpotCard from "../shared/SpotCard";
import { useEffect, useState } from "react";

const AllSpots = () => {
    const [allSpots, setAllSpots] = useState([]);

    // const allSpots = useLoaderData();

    useEffect(() => {
      fetch(`http://localhost:5000/spots`)
        .then((res) => res.json())
        .then((data) => setAllSpots(data));
    }, []);  
    
    return (
      <div>
        {/* {console.log(allSpots.slice(0, 6))} */}
        <h1 className="text-center mt-6 mb-4 text-3xl md:text-4xl font-bold">
          Tourist Spots :{" "}
        </h1>
        <div className="grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allSpots.slice(0, 6).map((spotData) => (
            <SpotCard
              key={spotData._id}
              link={`http://localhost:5000/spots/${spotData.tourists_spot_name}`}
              spotData={spotData}
            ></SpotCard>
          ))}
        </div>
      </div>
    );
};

export default AllSpots;