import {ref} from "vue";
import {defineStore} from "pinia";

import RulerControl from '@mapbox-controls/ruler';
import '@mapbox-controls/ruler/src/index.css';

import ZoomControl from '@mapbox-controls/zoom';
import '@mapbox-controls/zoom/src/index.css';

import ImageControl from '@mapbox-controls/image';
import '@mapbox-controls/image/src/index.css';

import CompassControl from '@mapbox-controls/compass';
import '@mapbox-controls/compass/src/index.css';

export const useMapControl = defineStore('mapControl', () => {
    const rulerControl = new RulerControl();
    const zoomControl = new ZoomControl();
    const imageControl = new ImageControl();
    const compassControl = new CompassControl();

    const controlBottom = ref(null);
    const controlRight = ref(null);
    const isControlCollapsed = ref(false);
    const initRulerControl = (map: any) => {
        if (isControlCollapsed.value) {
            const controlContainer = rulerControl.container;
            controlContainer.style.position = 'absolute';
            controlContainer.style.right = '400px';
        }
        map.addControl(rulerControl, 'bottom-right')
    }

    const initZoomControl = (map: any) => {
        map.addControl(zoomControl, 'bottom-right')
    }

    const initImageControl = (map: any) => {
        map.addControl(imageControl, 'bottom-right')
    }

    const initCompassControl = (map: any) => {
        map.addControl(compassControl, 'bottom-right')
    }

    function collapseControl(bottom: any, top: any, isCollapsed: boolean) {
        controlBottom.value = bottom.value;
        controlRight.value = top.value;
        isControlCollapsed.value = isCollapsed;
    }

    function expandControl() {
        controlBottom.value = null;
        controlRight.value = null;
        isControlCollapsed.value = false;
    }

    return {
        initRulerControl,
        initZoomControl,
        initImageControl,
        collapseControl,
        expandControl,
        initCompassControl,
        isControlCollapsed
    }
})

