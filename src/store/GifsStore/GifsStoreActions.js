export default ({ gifsApi }) => {
  function fetchTrendingGifs({ commit }) {
    const gifs = gifsApi.getTrendingGifs();
    commit('setGifs', gifs);
  }

  return {
    fetchTrendingGifs,
  };
};
