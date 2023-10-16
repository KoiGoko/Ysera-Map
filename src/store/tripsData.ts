import {onMounted, onUnmounted, ref} from "vue";
import {defineStore} from "pinia";
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import {PolygonLayer, GeoJsonLayer} from '@deck.gl/layers';
import {TripsLayer} from '@deck.gl/geo-layers';
import {MapboxLayer} from "@deck.gl/mapbox";


export const useTripsData = defineStore('tripsData', () => {

    function evacuateTrips(map: any) {
        const layer = new MapboxLayer({
            type: GeoJsonLayer,
            id: 'geojson-layer',
            data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json',
            opacity: 0.8,
            stroked: false,
            filled: true,
            extruded: true,
            wireframe: true,
            fp64: true,
            getElevation: 100,
            getFillColor: [160, 160, 180],
            getLineColor: [255, 255, 255],
            pickable: true,
        });

        map.addLayer(layer);
    }

    return {evacuateTrips}
})

