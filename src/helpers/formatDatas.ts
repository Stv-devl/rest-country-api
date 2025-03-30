import { Country, FormattedCountry } from '../type/apiType';
import { formatPopulation } from './formatPopulation';

export const formatData = (country: Country): FormattedCountry | undefined => {
  if (!country || Object.keys(country).length === 0) return undefined;

  return {
    countryName: country.name?.common || '',
    nativeName: country.name?.nativeName
      ? country.name.nativeName[Object.keys(country.name.nativeName)[0]]
          ?.common || ''
      : '',
    population: formatPopulation(country.population || 0),
    region: country.region || '',
    capital: country.capital || '',
    flag: country.flags?.png || '',
    subRegion: country.subregion || '',
    domain: country.topLevelDomain || [],
    currencies: country?.currencies
      ? Object.values(country.currencies).map((currency) => currency.symbol)
      : [],
    languages: country?.languages ? Object.values(country.languages) : [],
    border: country?.borders ?? [],
  };
};
