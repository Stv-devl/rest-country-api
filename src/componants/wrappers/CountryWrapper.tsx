import React, { useCallback, useContext, useState } from 'react';
import { ApiContext } from '../../context/ApiProvider';
import Loading from '../Loading/Loading';
import Cards from '../Cards/Cards';
import CountryDetailWrapper from './CountryDetailWrapper';

const CountryWrapper = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('ApiContext must be used within ApiProvider');
  }
  const { countryData, loading, error } = context;

  const handleCountryClick = useCallback((country: string) => {
    setSelectedCountry(country);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {selectedCountry ? (
        <CountryDetailWrapper
          countryData={countryData}
          country={selectedCountry}
          handleCountryClick={handleCountryClick}
        />
      ) : (
        <div className="flex flex-wrap sm:justify-between justify-center gap-10 mt-8 sm:mt-12">
          {countryData &&
            countryData.map((country, index) => (
              <div
                onClick={() => handleCountryClick(country.countryName)}
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
                  <Cards label="Population" value={country.population} />
                  <Cards label="Region" value={country.region} />
                  <Cards label="Capital" value={country.capital} />
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CountryWrapper;
