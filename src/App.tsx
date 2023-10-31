import React, { useState, useEffect } from 'react'
import type { ChangeEvent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'leaflet/dist/leaflet.css'
import Selectors from './components/Selectors'
import ContinentDetails from './components/ContinentDetails'
import CountryDetails from './components/CountryDetails'
import MapComponent from './components/MapComponent'
import type { Country, Continent } from './utils/types'

function App (): JSX.Element {
  const [countries, setCountries] = useState<Country[]>([])
  const [selectedContinent, setSelectedContinent] = useState<Continent>('')
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  useEffect(() => {
    fetch('https://restcountries.com/v3/all')
      .then(async (response) => await response.json())
      .then((data) => {
        const sortedData = data.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common))
        setCountries(sortedData)
      })
      .catch(error => {
        alert('An error occurred while fetching countries. Please try again.')
        console.error('An error occurred while fetching countries:', error)
      })
  }, [])

  const handleContinentChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedContinent(event.target.value as Continent)
    setSelectedCountry(null)
  }

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const countryCode = event.target.value
    const country = countries.find((c) => c.cca3 === countryCode)
    if (country !== undefined) setSelectedCountry(country)
  }

  let filteredCountries: Country[] = []
  if (selectedContinent === 'NorthAmerica' || selectedContinent === 'SouthAmerica') {
    filteredCountries = countries.filter((country) => country.region === 'Americas')
    if (selectedContinent === 'NorthAmerica') {
      filteredCountries = filteredCountries.filter((country) => country.subregion !== 'South America')
    } else {
      filteredCountries = filteredCountries.filter((country) => country.subregion === 'South America')
    }
  } else {
    filteredCountries = selectedContinent !== ''
      ? countries.filter((country) => country.region === selectedContinent)
      : countries
  }

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <Selectors
          handleContinentChange={handleContinentChange}
          handleCountryChange={handleCountryChange}
          filteredCountries={filteredCountries}
        />
      </div>

      {selectedContinent !== '' && !(selectedCountry !== null) && <ContinentDetails continent={selectedContinent} />}
      {selectedCountry !== null && <CountryDetails country={selectedCountry} countries={countries} />}

      <MapComponent
        center={selectedCountry != null ? selectedCountry.latlng : undefined}
        continent={selectedContinent}
      />
    </div>
  )
}

export default App
