import {defineStore} from "pinia";
import {ref} from "vue";


export const useMapbox3DBuilds = defineStore('mapbox3DBuilds', () => {

    function initMapbox3DBuilds(map: any) {
      map.on('style.load', () => {
        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find((layer: any) => layer.type === 'symbol' && layer.layout['text-field']).id;

        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        map.addLayer(
          {
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 16,
            'paint': {
              'fill-extrusion-color': '#aaa',

              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
              ],
              'fill-extrusion-opacity': 0.6
            }
          },
          labelLayerId
        );
      });
    }
    return {initMapbox3DBuilds}
})

