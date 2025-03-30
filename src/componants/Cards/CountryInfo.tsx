const CountryInfo = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="flex gap-2">
    <p className="font-bold">{label}:</p>
    <p>{value}</p>
  </div>
);

export default CountryInfo;
