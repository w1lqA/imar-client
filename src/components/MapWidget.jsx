import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const MapWidget = ({ w,h }) => (
  <YMaps>
      <Map  defaultState={{ center: [55.746188, 37.654709], zoom: 13 }}>
        <Placemark geometry={[55.746188, 37.654709]}/>
      </Map>
  </YMaps>
);

export default MapWidget;