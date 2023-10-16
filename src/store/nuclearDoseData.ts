import {ref} from "vue";
import {defineStore} from "pinia";


export const useNuclearDoseData = defineStore('nuclearDoseData', () => {
  const nuclearDoseData = ref('http://')

  return {nuclearDoseData}
})
