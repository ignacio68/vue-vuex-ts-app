import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import vuexLocal from '@/plugins/vuex-persist'
import { RootState } from '@/store/types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    appName: 'Vuejs 2 + Vuex + Typescript',
    appVersion: '0.0.1',
  },
  modules: {},
  plugins: [vuexLocal.plugin],
}

export default new Vuex.Store<RootState>(store)
