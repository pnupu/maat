import React from 'react'
import { formatContinentName } from '../utils/utilities'
import type { Continent } from '../utils/types'

const continentInfo: Record<Continent, string> = {
  Africa: "Africa is the world's second-largest and second-most populous continent.",
  Asia: "Asia is Earth's largest and most populous continent.",
  Europe: 'Europe is a continent located entirely in the Northern Hemisphere.',
  NorthAmerica: 'North America is a continent in the Northern Hemisphere.',
  Oceania: 'Oceania is a geographic region that includes Australasia, Melanesia, Micronesia, and Polynesia.',
  SouthAmerica: 'South America is a continent in the Western Hemisphere.',
  Antarctica: "Antarctica is Earth's southernmost continent.",
  '': ''
}

interface ContinentDetailsProps {
  continent: Continent
}

const ContinentDetails: React.FC<ContinentDetailsProps> = ({ continent }) => {
  return (
    <div className="mt-4 text-center">
      <h2>{formatContinentName(continent)}</h2>
      <p>{continentInfo[continent]}</p>
    </div>
  )
}

export default ContinentDetails
