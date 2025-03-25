import React, { useContext, useState } from 'react';
import { ApiContext } from '../../context/ApiProvider';
import Loading from '../Loading/Loading';
import CountryInfo from './CountryInfo';
import CountryDetailWrapper from './CountryDetailWrapper';

const CountryCardsWrapper = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('ApiContext must be used within ApiProvider');
  }

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const { countryData, loading, error } = context;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleClick = (countryName: string) => {
    setSelectedCountry(countryName);
  };

  return (
    <>
      {selectedCountry ? (
        <CountryDetailWrapper />
      ) : (
        <div className="flex flex-wrap sm:justify-between justify-center gap-10 mt-8 sm:mt-12">
          {countryData &&
            countryData.map((country, index) => (
              <div
                onClick={() => handleClick(country.countryName)}
                className="cursor-pointer w-[267px] h-[336px] bg-white dark:bg-gray-700 rounded-sm shadow-md "
                key={index}
              >
                <img
                  className="w-[267px] h-[160px] rounded-sm "
                  src={country.flag}
                  alt={country.countryName}
                />
                <div className="flex flex-col gap-1 p-4">
                  <h1 className="text-lg font-bold mt-3 mb-1">
                    {country.countryName}
                  </h1>
                  <CountryInfo label="Population" value={country.population} />
                  <CountryInfo label="Region" value={country.region} />
                  <CountryInfo label="Capital" value={country.capital} />
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CountryCardsWrapper;
