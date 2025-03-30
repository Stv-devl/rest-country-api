import Banner from './componants/Banner/Banner';
import CountryWrapper from './componants/wrappers/CountryWrapper';
import FilterWrapper from './componants/wrappers/FilterWrapper';

function App() {
  return (
    <div className="max-h-full min-h-screen dark:text-white bg-zinc-100 text-neutral-900 dark:bg-gray-800">
      <header>
        <Banner />
      </header>
      <main className="w-[90%] mx-auto">
        <FilterWrapper />
        <CountryWrapper />
      </main>
    </div>
  );
}

export default App;
