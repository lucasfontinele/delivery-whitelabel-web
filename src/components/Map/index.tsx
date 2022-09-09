import { TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import markerIcon from '../Icons/Marker.svg';

import * as S from './styles';

import 'leaflet/dist/leaflet.css';

const marker = L.icon({
  iconUrl: markerIcon,
  iconSize: [24, 24],
  iconAnchor: [24, 42],
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
});

function Map() {
  const position: [number, number] = [-10.2269592, -48.328996];

  return (
    <S.Container center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={marker} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </S.Container>
  );
}

export default Map;
