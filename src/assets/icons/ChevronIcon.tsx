import React from 'react';

/**
 * The ChevronIcon component is a component that displays a chevron icon
 * @returns {JSX.Element} The rendered chevron icon component
 */
const ChevronIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={props.width || 12}
      height={props.height || 12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
        fill={props.fill || 'currentColor'}
      />
    </svg>
  );
};

export default ChevronIcon;
