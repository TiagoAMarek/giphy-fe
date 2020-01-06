import GifsAPi from './GifsApi';

jest.mock('./mappers/reduceGifObjects');

describe('GifsAPi', () => {
  describe('Given that the method searchGifs is called', () => {
    it('should get "/gifs/trending"', async () => {
      const request = {
        get: jest.fn().mockResolvedValue({ data: [] }),
      };

      const { getTrendingGifs } = GifsAPi({ request });
      await getTrendingGifs();

      expect(request.get).toHaveBeenCalledWith('/gifs/trending');
    });

    it('should throw an error with a rejected promise', async () => {
      global.console = { error: jest.fn() };
      const request = {
        get: jest.fn().mockRejectedValue({}),
      };

      const { getTrendingGifs } = GifsAPi({ request });
      const response = await getTrendingGifs();

      expect(global.console.error).toHaveBeenCalled();
      expect(response).toBeNull();
    });
  });

  describe('Given that the method searchGifs is called', () => {
    it('should get "/gifs/search" passing a keyword for search set on querystring', async () => {
      const request = {
        get: jest.fn().mockResolvedValue({ data: [] }),
      };

      const keyword = 'teste';
      const { searchGifs } = GifsAPi({ request });
      const response = await searchGifs(keyword);

      expect(request.get).toHaveBeenCalledWith(`/gifs/search?q=${keyword}`);
      expect(response).toBeTruthy();
    });

    it('should throw an error with a rejected promise', async () => {
      global.console = { error: jest.fn() };
      const request = {
        get: jest.fn().mockRejectedValue({}),
      };

      const keyword = 'teste';
      const { searchGifs } = GifsAPi({ request });
      const response = await searchGifs(keyword);

      expect(global.console.error).toHaveBeenCalled();
      expect(response).toBeNull();
    });
  });
});
