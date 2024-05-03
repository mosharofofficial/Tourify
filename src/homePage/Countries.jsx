import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  // const countries = useLoaderData();

  useEffect(() => {
    fetch(`https://a10-server-ten.vercel.app/countries`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="my-14">
      <h1 className="text-center mt-6 mb-4 text-3xl md:text-4xl font-bold dark:text-yellow">
        Countries :{" "}
      </h1>
      <div className="grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {}
        {countries.length ? (
          countries.map(
            (country) => (
              <CountryCard
                key={country._id}
                //   link={`https://a10-server-ten.vercel.app/countries/${country.country_Name}`}
                country={country}
              ></CountryCard>
            )
            // console.log(country.country_name)
          )
        ) : (
          <div className="h-[500px] flex items-center justify-center gap-2 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 dark:text-yellow">
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

Countries.propTypes = {};

export default Countries;
