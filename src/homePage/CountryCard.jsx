import PropTypes from "prop-types";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { image, country_name, short_description } = country;

  return (
    <Link
      state={{
        api: `https://a10-server-ten.vercel.app/countries/${country_name}`,
      }}
      to={`/country/${country_name}`}
    >
      {/* {console.log(country_name)} */}
      <div className="bg-yellow  border-2 border-black rounded-xl col-span-1 flex flex-col justify-between ">
        {/* {console.log(link)} */}
        <div>
          <h1 className="text-xl font-bold border-b-2 border-black p-2 ">
            {country_name}
          </h1>
          <img
            src={image}
            className="self-center h-[250px] p-2 mx-auto object-cover object-center rounded-2xl"
          />
          <div className="p-2 border-t-2 border-black flex flex-col gap-2">
            <h3 className="font-bold text-lg">
              Short Description: {short_description}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object,
  link: PropTypes.string,
};

export default CountryCard;
