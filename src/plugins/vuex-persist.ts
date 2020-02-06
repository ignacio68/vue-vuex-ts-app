import VuexPersistence from 'vuex-persist'
import { RootState } from '@/store/types'
export default new VuexPersistence<RootState>({
  storage: window.localStorage,
  modules: [],
})
