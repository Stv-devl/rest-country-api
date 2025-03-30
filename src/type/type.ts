import { ReactNode } from 'react';
import { Language } from './apiType';

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

//context type
export interface ApiContextType {
  countryData: FormattedCountry[];
  loading: boolean;
  error: Error | null;
}

export interface ApiProviderProps {
  children: ReactNode;
}

//components type
export interface DropDownProps {
  placeholder: string;
  name: string;
  value: string;
  handleChange: (data: Record<string, string>) => void;
}

//input props
export interface CustomsInputProps {
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  autoComplete?: string;
  IconComponent?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

//cards props
export interface CardsProps {
  label: string;
  value: string | number;
}
