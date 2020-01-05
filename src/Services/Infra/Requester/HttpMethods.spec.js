import HttpMethods from './HttpMethods';

describe('HttpMethods', () => {
  const requestRawInstance = {
    get: jest.fn(),
  };

  describe('Given that the get method is called', () => {
    it('should call requestRawInstance get method and return something', () => {
      const { get } = HttpMethods({ requestRawInstance });
      const path = '/somepath';
      get(path);

      expect(requestRawInstance.get).toHaveBeenCalledWith(path);
    });
  });
});
