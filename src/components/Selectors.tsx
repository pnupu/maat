import { type FC } from 'react'
import type { SelectorProps } from '../utils/types'

const Selectors: FC<SelectorProps> = ({ handleContinentChange, handleCountryChange, filteredCountries }) => (
  <div className="col-md-6 offset-md-3">
    <select className="form-select mb-2" onChange={handleContinentChange}>
      <option value="">Select a continent</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="NorthAmerica">North America</option>
      <option value="Oceania">Oceania</option>
      <option value="SouthAmerica">South America</option>
      <option value="Antarctica">Antarctica</option>
    </select>

    <select className="form-select" onChange={handleCountryChange}>
      <option value="">Select a country</option>
      {filteredCountries.map((country) => (
        <option key={country.cca3} value={country.cca3}>
          {country.name.common}
        </option>
      ))}
    </select>
  </div>
)

export default Selectors
