import React, { createContext, useEffect, useMemo, useState } from 'react';
/*import { mockDatas } from '../constantes/mockDatas';*/
import getApi from '../service/getApi';
import {
  ApiContextType,
  ApiProviderProps,
  Countries,
  FormattedCountry,
} from '../type/apiType';
import { formatData } from '../helpers/formatDatas';

export const ApiContext = createContext<ApiContextType | undefined>(undefined);

const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [countries, setCountries] = useState<Countries>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const countryData = useMemo(
    () =>
      countries
        .map((country) => formatData(country))
        .filter((c): c is FormattedCountry => c !== undefined),
    [countries]
  );

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const resData = await getApi();
          setCountries(resData);
        } catch (err) {
          console.error('Error fetching data:', err);
          setError(err instanceof Error ? err : new Error('Unknown error'));
          /*  setCountries(mockedDataMemo);*/
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    },
    [
      /*mockedDataMemo*/
    ]
  );

  return (
    <ApiContext.Provider value={{ countryData, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
