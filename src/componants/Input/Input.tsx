import React from 'react';
import { CustomsInputProps } from '../../type/type';

/**
 * Renders an input field with dynamic styling based on validation state.
 * The component supports displaying an icon, and changes the border and text color based on error presence.
 * An error message is displayed below the input field when validation fails.
 * @param {CustomsInputProps} props - The properties for the Input component.
 * @returns The rendered input component which may include an optional error message.
 */

const Input: React.FC<CustomsInputProps> = ({
  name,
  type,
  handleChange,
  value,
  placeholder,
  autoComplete,
  IconComponent,
}: CustomsInputProps) => {
  const inputClasses =
    'size-full bg-white dark:bg-gray-700 dark:text-white placeholder:text-dark-gray rounded-lg focus:outline-none pl-16 sm:pl-16 dark:border-none text-dark-gray box-shadow-custom-gray shadow-sm';

  return (
    <>
      <div className=" h-[48px] sm:h-[56px] relative w-full shadow-sm">
        {IconComponent && (
          <IconComponent
            className="absolute left-6 top-1/2 mt-0.5 size-max -translate-y-1/2 text-gray-500 dark:text-white"
            fill="currentColor"
          />
        )}
        <input
          className={inputClasses}
          type={type}
          id={name}
          name={name}
          value={value || ''}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
    </>
  );
};

export default Input;
