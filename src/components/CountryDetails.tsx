import React from 'react'
import { getNeighborNames } from '../utils/utilities'
import type { Country } from '../utils/types'

interface CountryDetailsProps {
  country: Country
  countries: Country[]
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country, countries }) => {
  return (
    <div className="mt-4 text-center">
      <h2>{country.name.common}</h2>
      <div>
        <img src={country.flags[0]} alt={`${country.name.common} flag`} className="img-fluid" style={{ maxWidth: '100px', border: '2px solid black' }} />
      </div>
      <p className="mt-3">
        Capital:
        {' '}
        {country.capital[0]}
      </p>
      <p>
        Population:
        {' '}
        {country.population.toLocaleString()}
      </p>
      <p>{getNeighborNames(country.borders, countries)}</p>
    </div>
  )
}

export default CountryDetails
