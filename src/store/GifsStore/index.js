import GifsStoreActions from './GifsStoreActions';
import GifsStoreMutations from './GifsStoreMutations';

export default ({ gifsApi }) => ({
  namespaced: true,
  actions: GifsStoreActions({ gifsApi }),
  mutations: GifsStoreMutations(),
  state: {
    gifs: [],
  },
});
