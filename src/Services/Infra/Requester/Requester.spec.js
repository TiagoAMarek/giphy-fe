import Requester from './index';

describe('Requester', () => {
  const VUE_APP_API_URL = 'https://testeurl.com';
  const VUE_APP_API_KEY = 'abc1234';

  beforeAll(() => {
    process.env = Object.assign(process.env, {
      VUE_APP_API_URL,
      VUE_APP_API_KEY,
    });
  });

  describe('Given that the getAxiosInstace is called', () => {
    const axios = {
      create: jest.fn().mockReturnValue({}),
    };

    it('should call axios create instance method', () => {
      const requester = Requester({ axios });
      requester.getRequestInstance();

      expect(axios.create).toHaveBeenCalledWith({
        baseURL: VUE_APP_API_URL,
        params: { api_key: VUE_APP_API_KEY },
      });
    });

    it('should return something', () => {
      const requester = Requester({ axios });
      const axiosInstance = requester.getRequestInstance();

      expect(axiosInstance).toBeTruthy();
    });
  });
});
