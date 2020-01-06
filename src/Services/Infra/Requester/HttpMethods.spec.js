import HttpMethods from './HttpMethods';

describe('HttpMethods', () => {
  const requestRawInstance = {
    get: jest.fn().mockResolvedValue({ data: [] }),
  };

  describe('Given that the get method is called', () => {
    it('should call requestRawInstance get method and return something', async () => {
      const { get } = HttpMethods({ requestRawInstance });
      const path = '/somepath';
      const response = await get(path);

      expect(requestRawInstance.get).toHaveBeenCalledWith(path);
      expect(response).toBeTruthy();
    });
  });
});
