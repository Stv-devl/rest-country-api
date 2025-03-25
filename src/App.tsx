import { useCallback, useContext, useState } from 'react';
import Banner from './componants/Banner/Banner';
import CountryWrapper from './componants/wrappers/CountryCardsWrapper';
import CountryDetailWrapper from './componants/wrappers/CountryDetailWrapper';
import FilterWrapper from './componants/wrappers/FilterWrapper';

function App() {
  //hook filter
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  /**
   * Handles the click event on a country item
   * @param {string} country - The country identifier that was clicked
   * @returns {void}
   */
  const handleCountryClick = useCallback((country: string) => {
    setSelectedCountry(country);
  }, []);

  return (
    <div className=" h-screen dark:text-white bg-zinc-100 text-neutral-900 dark:bg-gray-800">
      <header>
        <Banner />
      </header>
      <main className="w-[90%] mx-auto">
        {selectedCountry ? (
          <CountryDetailWrapper />
        ) : (
          <>
            <FilterWrapper />
            <CountryWrapper />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
