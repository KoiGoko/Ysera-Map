import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";



export const useConsequenceData = defineStore('consequenceData', () => {
    const doseUrl = ref('')
    const doseTiffUrl = ref('')



    const getDoseData = () => {
        axios.get(doseUrl.value).then((res) => {

            console.log(res.data)
        })
    }

    class calpuffDoseCustomLayer {
        private id: string;
        private type: string;
        private renderingMode: string;
        constructor(options: any) {
            this.id = 'calpuffDoseCustomLayer';
            this.type = 'custom';
            this.renderingMode = '2d';
        }

        onAdd = (map: any, gl: any) => {

        }

        prerender = (gl: any, matrix: any) => {

        }

        render = (gl: any, matrix: any) => {

        }

        onRemove = (map: any, gl: any) => {

        }
    }
    return {getDoseData}
})

