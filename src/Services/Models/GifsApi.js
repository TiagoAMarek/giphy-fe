export default ({ request }) => {
  function getTrendingGifs() {
    const { data: { data } } = request.get('/gifs/trending');
    return data;
  }

  function searchGifs() { }

  return {
    getTrendingGifs,
    searchGifs,
  };
};
