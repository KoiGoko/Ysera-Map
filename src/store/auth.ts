import {defineStore} from 'pinia';
import router from '@/router/index.ts';
import {ref} from 'vue';


export const useAuth = defineStore('auth', () => {
  const user = ref(null);
  const password = ref(null);

  const registerWithEmailAndPassword = (email: string, password: string) => {
    router.push('/');
  }

  const loginWithEmailAndPassword = (email: string, password: string) => {
    router.push('/');
  }
  const loginOut = () => {
    router.push({name: 'sign-in'});
  }
  return {user, password, registerWithEmailAndPassword, loginWithEmailAndPassword, loginOut}
})

