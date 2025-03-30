import { ReactNode } from 'react';

interface NativeName {
  [key: string]: {
    official?: string;
    common?: string;
  };
}

interface CountryName {
  common: string;
  official: string;
  nativeName?: NativeName;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

export interface Language {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}

interface Translations {
  [key: string]: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
  otherNames?: string[];
  otherAcronyms?: string[];
}

interface Demonyms {
  eng?: {
    f: string;
    m: string;
  };
}

interface Flags {
  png: string;
  svg: string;
}

interface CoatOfArms {
  [key: string]: any;
}

interface Maps {
  googleMaps?: string;
  openStreetMaps?: string;
}

interface Car {
  signs?: string[];
  side: string;
}

interface CapitalInfo {
  latlng?: [number, number];
}

export interface Country {
  name: CountryName;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital?: string;
  altSpellings?: string[];
  subregion?: string;
  region?: string;
  population?: number;
  latlng?: [number, number];
  demonym?: string;
  area?: number;
  gini?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  flags?: Flags;
  flag?: string;
  currencies?: Currency[];
  languages?: Language[];
  translations?: Translations;
  regionalBlocs?: RegionalBloc[];
  cioc?: string;
  independent?: boolean;
  status?: string;
  unMember?: boolean;
  idd?: Idd;
  demonyms?: Demonyms;
  maps?: Maps;
  car?: Car;
  coatOfArms?: CoatOfArms;
  startOfWeek?: string;
  capitalInfo?: CapitalInfo;
}

export type Countries = Country[];

export interface FormattedCountry {
  countryName: string;
  nativeName: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
  subRegion: string;
  domain: string[];
  currencies: string[];
  languages: Language[];
  border: string[];
}

export interface ApiContextType {
  countryData: FormattedCountry[];
  loading: boolean | undefined;
  error: Error | null | undefined;
}

export interface ApiProviderProps {
  children: ReactNode;
}
