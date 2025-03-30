import React, { useCallback, useEffect, useRef, useState } from 'react';
import { regions } from '../../constantes/contantes';
import { DropDownProps } from '../../type/type';
import ChevronIcon from '../../assets/icons/ChevronIcon';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Dropdown component that displays a list of regions to filter by
 * @param {DropDownProps} props - The properties for the Dropdown component
 * @returns A styled dropdown select element
 */
const Dropdown: React.FC<DropDownProps> = ({
  placeholder,
  name,
  value,
  handleChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback(
    (option: string) => {
      handleChange({ [name]: option });
      setIsOpen(false);
    },
    [handleChange, name]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="relative w-1/2 sm:w-[200px] mt-2 cursor-pointer select-none"
      ref={dropdownRef}
    >
      <div
        className="flex items-center justify-between bg-white dark:bg-gray-700 dark:text-white sm:h-[56px] h-[48px] px-4 rounded-lg  box-shadow-custom-gray shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value || placeholder}</span>
        <ChevronIcon
          className={twMerge(
            clsx(
              'size-4 transition-transform duration-200',
              isOpen ? 'rotate-180' : '',
              'text-black dark:text-white'
            )
          )}
          fill="currentColor"
        />
      </div>

      <ul
        className={twMerge(
          clsx(
            'absolute z-10 w-full bg-white dark:bg-gray-700 dark:text-white mt-1 rounded-lg shadow max-h-60 overflow-y-auto transition-all duration-300 ease-in-out origin-top',
            isOpen
              ? 'opacity-100 scale-y-100 translate-y-0'
              : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
          )
        )}
      >
        {regions.map((option, index) => (
          <li
            key={index}
            onClick={() => handleSelect(option)}
            className={twMerge(
              clsx(
                'px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200',
                value === option && 'font-medium'
              )
            )}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
