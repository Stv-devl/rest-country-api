import React from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import Dropdown from '../Dropdown/DropDown';
import Input from '../Input/Input';

const FilterWrapper = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-between mt-12 gap-10 sm:gap-0">
      <div className=" w-full sm:w-2/5">
        <Input
          name="searchbar"
          type="text"
          handleChange={() => {}}
          value=""
          placeholder="Search for a country..."
          autoComplete="off"
          IconComponent={SearchIcon}
        />
      </div>
      <Dropdown
        placeholder="Filter by region"
        name="dropdown"
        value=""
        handleChange={() => {}}
      />
    </div>
  );
};

export default FilterWrapper;
