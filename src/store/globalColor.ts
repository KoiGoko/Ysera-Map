import {ref} from "vue";
import {defineStore} from "pinia";

export const useGlobalColor = defineStore('globalColor', () => {
  const rightNavSubHeaderIconColor = ref('secondary')

  return { rightNavSubHeaderIconColor }
})
