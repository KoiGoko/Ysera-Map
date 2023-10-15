import {defineStore} from "pinia";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from "mapbox-gl";


export const useMapboxGeocoder = defineStore('mapboxGeocoder', () => {
    const geocoder = new MapboxGeocoder({
        accessToken: 'pk.eyJ1Ijoia29pZ29rb3JvIiwiYSI6ImNsOXAxZDIzZDA0OHQ0MW1wMHd2Y3Rxa3IifQ.X9ACqkqRQ_m3IvwqsGYy0w',
        mapboxgl: mapboxgl
    });

    return {geocoder}
})
