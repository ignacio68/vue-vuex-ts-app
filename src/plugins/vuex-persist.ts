import VuexPersistence from 'vuex-persist';
export default new VuexPersistence(options:{
    storage: window.localStorage,
    modules: []
});