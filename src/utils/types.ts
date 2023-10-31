export interface ContinentCoordinates {
  lat: number
  lng: number
  zoom: number
}

export type Continent =
    | 'Africa'
    | 'Asia'
    | 'Europe'
    | 'NorthAmerica'
    | 'Oceania'
    | 'SouthAmerica'
    | 'Antarctica'
    | ''

export type ContinentsCoords = Record<string, ContinentCoordinates>

export interface Country {
  cca3: string
  name: { common: string }
  region: string
  subregion: string
  latlng: [number, number]
  flags: string[]
  capital: string[]
  population: number
  borders: string[]
}

export type ContinentChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => void
export type CountryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => void

export interface SelectorProps {
  handleContinentChange: ContinentChangeHandler
  handleCountryChange: CountryChangeHandler
  filteredCountries: Country[]
}
