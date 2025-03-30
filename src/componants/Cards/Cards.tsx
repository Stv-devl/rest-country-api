import { CardsProps } from '../../type/type';

/**
 * Cards component
 * @param {CardsProps} props - The props for the Cards component
 * @returns {React.ReactElement} The Cards component
 */
const Cards = ({ label, value }: CardsProps) => (
  <div className="flex gap-2">
    <p className="font-bold">{label}:</p>
    <p>{value}</p>
  </div>
);

export default Cards;
