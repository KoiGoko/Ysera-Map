// stores/counter.js
import {defineStore} from 'pinia'
import {ref} from "vue";


export const useAccessToken = defineStore('accessToken', () => {
    const token = ref('pk.eyJ1Ijoia29pZ29rb3JvIiwiYSI6ImNsOXAxZDIzZDA0OHQ0MW1wMHd2Y3Rxa3IifQ.X9ACqkqRQ_m3IvwqsGYy0w')


    return {token}
})
