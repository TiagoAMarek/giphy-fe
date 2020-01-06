import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from './Home.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const SearchedGifsStore = {
  namespaced: true,
  state: {
    gifs: [],
  },
  actions: {
    searchGifs: jest.fn(),
  },
  getters: {
    getGifs: jest.fn().mockReturnValue([]),
  },
  mutations: {
    setGifs: jest.fn(),
  },
};

const TrendGifsStore = {
  namespaced: true,
  state: {
    gifs: [],
  },
  actions: {
    fetchTrendingGifs: jest.fn(),
  },
  getters: {
    getGifs: jest.fn().mockReturnValue([]),
  },
  mutations: {
    setGifs: jest.fn(),
  },
};

const store = new Vuex.Store({
  modules: {
    SearchedGifsStore,
    TrendGifsStore,
  },
});

describe('Home Page', () => {
  describe('Given that the home page is created', () => {
    it('should fetch for trending gifs to show', () => {
      shallowMount(Home, {
        store,
        localVue,
      });

      expect(TrendGifsStore.actions.fetchTrendingGifs).toHaveBeenCalled();
    });

    describe('and the keyword is empty', () => {
      it('should show "Gifs mais populares" title', () => {
        const wrapper = shallowMount(Home, {
          store,
          localVue,
        });

        const title = wrapper.find('h1.title');
        expect(title.text()).toEqual('Gifs mais populares');
      });
    });

    describe('and keyword is not empty', () => {
      it('should show "Gifs mais populares" title', () => {
        const wrapper = shallowMount(Home, {
          store,
          localVue,
        });
        wrapper.vm.keyword = 'teste';

        const title = wrapper.find('h1.title');
        expect(title.text()).toEqual(`Procurando por: ${wrapper.vm.keyword}`);
      });
    });
  });
});
