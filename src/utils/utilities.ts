import { type Country } from './types'

export const formatContinentName = (name: string): string => {
  const formattedNames: Record<string, string> = {
    Africa: 'Africa',
    Asia: 'Asia',
    Europe: 'Europe',
    NorthAmerica: 'North America',
    Oceania: 'Oceania',
    SouthAmerica: 'South America',
    Antarctica: 'Antarctica',
    '': ''
  }
  return formattedNames[name] ?? name
}

export const getNeighborNames = (borders?: string[], countries?: Country[]): string | null => {
  if (borders == null || countries == null) return null

  return `Naapurimaat: ${borders.map((borderCode) => {
    const neighbor = countries.find((country) => country.cca3 === borderCode)
    return neighbor != null ? neighbor.name.common : null
  }).filter(Boolean).join(', ')}`
}
