import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import { Country, State } from 'country-state-city';

const CountryStateSelect = ({ onCountryChange, onStateChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const countryOptions = useMemo(() => {
    return Country.getAllCountries().map(country => ({
      value: country.isoCode,
      label: country.name,
    }));
  }, []);

  const stateOptions = useMemo(() => {
    if (selectedCountry) {
      return State.getStatesOfCountry(selectedCountry.value).map(state => ({
        value: state.isoCode,
        label: state.name,
      }));
    }
    return [];
  }, [selectedCountry]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
    onCountryChange(selectedOption);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    onStateChange(selectedOption); 
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-800 mb-2">Country</label>
        <Select
          options={countryOptions}
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Select a country"
          isSearchable
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-800 mb-2">State</label>
        <Select
          options={stateOptions}
          value={selectedState}
          onChange={handleStateChange}
          placeholder={selectedCountry ? "Select a state" : "Select a country first"}
          isSearchable
          isDisabled={!selectedCountry} 
        />
      </div>
    </div>
  );
};

export default CountryStateSelect;
