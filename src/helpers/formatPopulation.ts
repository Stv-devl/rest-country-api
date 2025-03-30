/**
 * Formats a population number by adding commas as thousand separators
 * @param population - The population number to format
 * @returns A string representation of the population with commas (e.g., 1,000,000)
 */
export const formatPopulation = (population: number) => {
  return population.toLocaleString('en-US');
};
