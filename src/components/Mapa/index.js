import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './mapa.css';

const markersData = [
  { id: 1, lngLat: [20.668411, 44.862984], title: 'Pančevo', description: '#pančevoontop' },
  { id: 2, lngLat: [20.457273, 44.787197], title: 'Beograd', description: 'xddddddddddddddddddddd' },
  { id: 3, lngLat: [19.847171, 45.249454], title: 'Novi Sad', description: '#studiozidontop' },
  { id: 4, lngLat: [21.895833, 43.32097], title: 'Niš', description: 'idemo niššššš' },
];

const Mapa = () => {
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
        zoom: 10,
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
              <p>${markerInfo.description}</p>
            </div>
          `);

          const marker = new maplibregl.Marker({
            element: el,
            anchor: 'bottom'
          })
            .setLngLat(markerInfo.lngLat)
            .addTo(mapInstanceRef.current);

          // Dodavanje event listenera za HOVER
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

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Mapa;