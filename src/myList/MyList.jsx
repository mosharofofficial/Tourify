import { useContext, useEffect, useState } from "react";
// import SpotCard from "../shared/SpotCard";
import { authContext } from "../authentication/AuthProvider";
import Row from "./Row";

const MyList = () => {
  const { user } = useContext(authContext);
  //   const email = user?.email;
  //   console.log(email)
  const [myList, setMyList] = useState([]);

  // console.log(user?.email);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/userAdded/user/${user.displayName}`)
        .then((res) => res.json())
        .then((data) => setMyList(data));
    }
  }, [user]);

  return (
    <div className="bg-yellow border-2 border-black rounded-xl p-3 my-10">
      {/* {console.log(user)} */}
      <h1 className="text-4xl font-bold text-center">My List :</h1>
      <div>
        <ul className="flex flex-col">
          <li className="flex w-full justify-between border-y-2 border-black py-2 my-3">
            <h3 className="flex-1 text-center">Spot Name</h3>
            <h3 className="flex-1 text-center">Average Cost</h3>
            <h3 className="flex-1 text-center">Travel Time</h3>
            <h3 className="flex-1 text-center">Seasonality</h3>
            <h3 className="flex-1 text-center">Actions</h3>
          </li>
          {myList.length ? (
            myList.map((data) => (
              <li key={data._id}>
                {console.log(data.tourists_spot_name)}
                <Row
                  link={`http://localhost:5000/userAdded/${data.tourists_spot_name}`}
                  spotData={data}
                ></Row>
              </li>
            ))
          ) : (
            <li>
              <div className="h-[100px] flex items-center justify-center gap-2 ">
                <span className="loading loading-infinity loading-lg"></span>
                <span className="loading loading-infinity loading-lg"></span>
                <span className="loading loading-infinity loading-lg"></span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyList;
