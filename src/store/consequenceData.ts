import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";
import pako from 'pako';
import {NetCDFReader} from 'netcdfjs';
import {readFileSync} from "fs";


export const useConsequenceData = defineStore('consequenceData', () => {
    const doseUrl = ref('http://test.opendap.org/dap/data/nc/sst.mnmean.nc.gz.ascii?lat')

    const getDoseData =  () => {
        axios.get(doseUrl.value).then((res) => {

            console.log(res.data)
        })
    }
    return {getDoseData}
})
