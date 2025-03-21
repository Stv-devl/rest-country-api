const getApi = async () => {
  const url = `https://restcountries.com/v3.1/all
`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching countries. Status: ${response.status}`);
    }

    const countries = await response.json();
    console.log('Countries fetched successfully');
    return countries;
  } catch (error: unknown) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};

export default getApi;
