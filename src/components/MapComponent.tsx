import React, { useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { type Continent } from '../utils/types'

interface Coordinates {
  lat: number
  lng: number
  zoom: number
}

const continentCoordinates: Record<Continent, Coordinates> = {
  Africa: { lat: 2.341308, lng: 20.092773, zoom: 3 },
  Asia: { lat: 34.047863, lng: 100.619652, zoom: 2 },
  Europe: { lat: 54.525961, lng: 15.255119, zoom: 3 },
  NorthAmerica: { lat: 54.525961, lng: -105.255119, zoom: 2 },
  Oceania: { lat: -22.735904, lng: 140.018766, zoom: 3 },
  SouthAmerica: { lat: -28.783195, lng: -55.491477, zoom: 2.7 },
  Antarctica: { lat: -82.862752, lng: 135.000000, zoom: 2 },
  '': { lat: 0, lng: 0, zoom: 1 } // Default coordinates
}

interface MapUpdaterProps {
  center?: [number, number]
  continent?: Continent
}

function MapUpdater ({ center, continent }: MapUpdaterProps): null {
  const map = useMap()
  useEffect(() => {
    if (center !== undefined) {
      map.flyTo(center, 6)
    } else if (continent !== undefined) {
      const coords = continentCoordinates[continent]
      map.flyTo([coords.lat, coords.lng], coords.zoom)
    }
  }, [center, continent, map])
  return null
}

interface MapComponentProps {
  center?: [number, number]
  continent?: Continent
}

const MapComponent: React.FC<MapComponentProps> = ({ center, continent }) => {
  const initialCoordinates: [number, number] = [0, 0]
  const initialZoom = 1

  return (
    <MapContainer
      center={initialCoordinates}
      zoom={initialZoom}
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapUpdater center={center} continent={continent} />
    </MapContainer>
  )
}

export default MapComponent
