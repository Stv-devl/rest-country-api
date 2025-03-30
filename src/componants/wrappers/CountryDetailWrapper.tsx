import React from 'react';
import { iconsMap } from '../../constantes/iconsMap';
import { FormattedCountry } from '../../type/type';

interface CountryDetailWrapperProps {
  countryData: FormattedCountry[];
  country: string;
  handleCountryClick: (country: string) => void;
}

const CountryDetailWrapper = ({
  countryData,
  country,
  handleCountryClick,
}: CountryDetailWrapperProps) => {
  const filteredCountry = countryData.find(
    (item) => item.countryName.toLowerCase() === country.toLowerCase()
  );

  console.log(filteredCountry);

  return (
    <div className="cursor-pointer flex items-center gap-2 my-12">
      <iconsMap.ArrowIcon className="size-6 dark:text-white" />
      <h1>Back</h1>
    </div>
  );
};

export default CountryDetailWrapper;
