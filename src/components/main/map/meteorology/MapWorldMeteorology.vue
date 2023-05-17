<!--<template>-->
<!--  <div>-->
<!--    <MapMain></MapMain>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="js">-->
<!--import MapMain from "@/components/main/map/MapMain.vue";-->
<!--import MapboxDraw from 'mapbox-gl-draw';-->
<!--import * as MapboxDrawGeodesic from 'mapbox-gl-draw-geodesic';-->
<!--import * as MapboxDrawWaypoint from 'mapbox-gl-draw-waypoint';-->
<!--let modes = MapboxDraw.modes;-->
<!--modes = MapboxDrawGeodesic.enable(modes);-->
<!--const draw = new MapboxDraw({ modes });-->
<!--// create-->
<!--const circle = MapboxDrawGeodesic.createCircle([0, 0], 100);-->
<!--draw.add(circle);-->

<!--// update-->
<!--MapboxDrawGeodesic.setCircleCenter(circle, [10, 10]);-->
<!--MapboxDrawGeodesic.setCircleRadius(circle, 200);-->
<!--draw.add(circle);-->

<!--map.on('draw.create', (event) => {-->
<!--  const geojson = event.features[0];-->
<!--  console.log('create', geojson);-->

<!--  // read-->
<!--  if (MapboxDrawGeodesic.isCircle(geojson)) {-->
<!--    const center = MapboxDrawGeodesic.getCircleCenter(geojson);-->
<!--    const radius = MapboxDrawGeodesic.getCircleRadius(geojson);-->
<!--    console.log('circle', 'center', center, 'radius', radius);-->
<!--  }-->
<!--});-->
<!--</script>-->

<!--<style scoped>-->
<!--</style>-->

