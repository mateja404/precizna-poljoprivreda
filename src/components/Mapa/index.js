import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './mapa.css';
import { Search } from 'lucide-react';

const markersData = [
  { id: 1, lngLat: [20.401213, 45.372733], title: 'URBAN ALPINISM DOO, VAZDUŠNI FARMACEUT', description: '0653040099 urbanalpinism@mail.ru' },
  { id: 2, lngLat: [21.332968, 44.720599], title: 'PG DEJAN IVANOVIĆ, AGRO DRON', description: '062540104 deki9majstor@gmail.com' },
  { id: 3, lngLat: [20.050014, 44.986638], title: 'ZZ NOVA PROHIBICIJA', description: '0621502744 aleksandarbasaric99@gmail.com', grad: "beograd" },
  { id: 4, lngLat: [20.098556, 45.049419], title: 'PG MIRKO HLATKI', description: '0643552983 dovlatore@gmail.com', grad: "novi sad" },
  { id: 4, lngLat: [19.729646, 45.236086], title: 'RAINTOP DOO', description: '0643552983 milospanticf90@gmail.com' },
];

const gradKoordinate = {
  "beograd": [20.4489, 44.7866],
  "novi sad": [19.8335, 45.2671],
  "niš": [21.8958, 43.3209],
  "subotica": [19.6676, 46.1003],
  "kragujevac": [20.9224, 44.0128],
};

const Mapa = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMarkers, setFilteredMarkers] = useState(markersData);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    const maptilerKey = process.env.REACT_APP_MAPTILER_KEY;

    const mapStyle = `https://api.maptiler.com/maps/streets-v2/style.json?key=${maptilerKey}`;

    if (mapContainerRef.current && maptilerKey) {
      mapInstanceRef.current = new maplibregl.Map({
        container: mapContainerRef.current,
        style: mapStyle,
        center: [20.668411, 44.862984],
        zoom: 7,
        pitch: 0,
        bearing: 0,
      });

      mapInstanceRef.current.on('load', () => {
        console.log('Map loaded successfully!');
        mapInstanceRef.current.addControl(new maplibregl.NavigationControl());
        markersData.forEach(markerInfo => {
          const el = document.createElement('div');
          el.className = 'custom-marker';

          const popup = new maplibregl.Popup({
            offset: 25,
            closeButton: false,
            closeOnClick: false
          }).setHTML(`
            <div style="padding: 5px;">
              <h4>${markerInfo.title}</h4>
            </div>
          `);

          const marker = new maplibregl.Marker({
            element: el,
            anchor: 'bottom'
          })
            .setLngLat(markerInfo.lngLat)
            .addTo(mapInstanceRef.current);

          el.addEventListener('mouseover', () => {
            popup.setLngLat(markerInfo.lngLat).addTo(mapInstanceRef.current);
          });

          el.addEventListener('mouseleave', () => {
            popup.remove();
          });
        });
      });

      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }
      };
    } else {
      console.log('Error: MapTiler key is missing or invalid.');
    }
  }, []);

  const distance = (coord1, coord2) => {
    const [lon1, lat1] = coord1;
    const [lon2, lat2] = coord2;
    const R = 6371e3;
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) ** 2 +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };


  const handleSearch = () => {
  const search = searchTerm.trim().toLowerCase();
  if (!search || !gradKoordinate[search]) return;

  const targetCoords = gradKoordinate[search];

  const closestMarker = markersData.reduce((closest, marker) => {
    const d1 = distance(targetCoords, marker.lngLat);
    const d2 = closest ? distance(targetCoords, closest.lngLat) : Infinity;
    return d1 < d2 ? marker : closest;
  }, null);

    if (closestMarker && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo({
        center: closestMarker.lngLat,
        zoom: 12,
        speed: 1.2,
        curve: 1,
        easing: t => t
      });
    }
  };
  return(
    <div className="map-wrapper">
    <div className="sidebar">
      <div className="search-input-wrapper">
        <input type="text" placeholder="Pretraga lokacije..." onChange={(e) => setSearchTerm(e.target.value)} />
        <Search className="search-icon" size={18} onClick={handleSearch} style={{ cursor: "pointer" }} />
      </div>
      <h2>Lokacije</h2>
      <ul>
        {markersData.map(marker => (
          <li key={marker.id}>
            <img
              src="https://cdn.preciznapoljoprivreda.rs/1.%20Precizna%20poljoprivreda.d5973fef9a74ad50146c.png"
              alt="firma logo"
            />
            <div className="description">
              <strong>{marker.title}</strong>
              <span>{marker.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="map-container" ref={mapContainerRef} />
  </div>
  )
};

export default Mapa;