import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const AllSpots = () => {
    const allSpots = useLoaderData();
    
    return (
        <div>
            <h1 className="text-center mt-6 mb-4 text-3xl md:text-4xl font-bold">All the tourist spots : </h1>
            <div className="grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {allSpots.map((spotData)=><SpotCard key={spotData._id} spotData={spotData}></SpotCard>)}
            </div>
        </div>
    );
};

export default AllSpots;