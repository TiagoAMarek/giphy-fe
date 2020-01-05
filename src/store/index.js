import Vue from 'vue';
import Vuex from 'vuex';
import GifsStore from './GifsStore';
import Services from '@/Services';

const { gifsApi } = Services();

const modules = {
  GifsStore: GifsStore({ gifsApi }),
};

Vue.use(Vuex);
const store = new Vuex.Store({ modules });

export default store;
