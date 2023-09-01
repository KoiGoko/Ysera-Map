<template>
  <div>
    <v-map
        ref="mapRef"
        :accessToken="accessToken"
        :options="options"
        @loaded="handleLoaded"
    >
      <v-attribution-control
          id="attribution-control-id"
          compact="compact"
          customAttribution="customAttribution"
          position="bottom-right"
      />

      <v-scale-control
          id="scale-control-id"
          unit="unit"
          position="bottom-right"
      />

      <v-navigation-control
          id="navigation-control-id"
          position="bottom-right"
      />
    </v-map>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch} from "vue";
import {useAccessToken} from '@/store/accessToken'
import {useMapStyle} from '@/store/mapStyle'

const accessToken = useAccessToken().token
const mapStyle = computed(
    () => useMapStyle().mapStyle
)
const options = ref({
  style: mapStyle,
  center: [116, 39],
  zoom: 6,
  projection: "mercator",
})

watch(mapStyle, (newStyle, oldStyle) => {
  handleLoaded()
});

const mapRef = ref()
const handleLoaded = () => {
  const map = mapRef.value.map

  map.on('style.load', () => {
    console.log('A style load event occurred.');


    map.addSource('maine', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
// These coordinates outline Maine.
          'coordinates': [
            [
              [-67.13734, 45.13745],
              [-66.96466, 44.8097],
              [-68.03252, 44.3252],
              [-69.06, 43.98],
              [-70.11617, 43.68405],
              [-70.64573, 43.09008],
              [-70.75102, 43.08003],
              [-70.79761, 43.21973],
              [-70.98176, 43.36789],
              [-70.94416, 43.46633],
              [-71.08482, 45.30524],
              [-70.66002, 45.46022],
              [-70.30495, 45.91479],
              [-70.00014, 46.69317],
              [-69.23708, 47.44777],
              [-68.90478, 47.18479],
              [-68.2343, 47.35462],
              [-67.79035, 47.06624],
              [-67.79141, 45.70258],
              [-67.13734, 45.13745]
            ]
          ]
        }
      }
    });

    // console.log(map.getSource('maine'))

// Add a new layer to visualize the polygon.
    map.addLayer({
      'id': 'maine',
      'type': 'fill',
      'source': 'maine', // reference the data source
      'layout': {},
      'paint': {
        'fill-color': '#0080ff', // blue color fill
        'fill-opacity': 0.5
      }
    });

    if (map.getLayer('maine')) {
      map.removeLayer('maine')
      map.removeSource('maine')
    }
    map.addSource('maine', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
// These coordinates outline Maine.
          'coordinates': [
            [
              [-67.13734, 45.13745],
              [-66.96466, 44.8097],
              [-68.03252, 44.3252],
              [-69.06, 43.98],
              [-70.11617, 43.68405],
              [-70.64573, 43.09008],
              [-70.75102, 43.08003],
              [-70.79761, 43.21973],
              [-70.98176, 43.36789],
              [-70.94416, 43.46633],
              [-71.08482, 45.30524],
              [-70.66002, 45.46022],
              [-70.30495, 45.91479],
              [-70.00014, 46.69317],
              [-69.23708, 47.44777],
              [-68.90478, 47.18479],
              [-68.2343, 47.35462],
              [-67.79035, 47.06624],
              [-67.79141, 45.70258],
              [-67.13734, 45.13745]
            ]
          ]
        }
      }
    });

    // console.log(map.getSource('maine'))

// Add a new layer to visualize the polygon.
    map.addLayer({
      'id': 'maine',
      'type': 'fill',
      'source': 'maine', // reference the data source
      'layout': {},
      'paint': {
        'fill-color': '#0080ff', // blue color fill
        'fill-opacity': 0.5
      }
    });
  });


// Add a black outline around the polygon.
}
</script>
<style scoped>
</style>
