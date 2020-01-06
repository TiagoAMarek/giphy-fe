import Requester from './index';

describe('Requester', () => {
  const VUE_APP_API_URL = 'https://testeurl.com';

  beforeAll(() => {
    process.env = Object.assign(process.env, {
      VUE_APP_API_URL,
    });
  });

  describe('Given that the getAxiosInstace is called', () => {
    const axios = {
      create: jest.fn().mockReturnValue({
        interceptors: {
          request: {
            use: jest.fn(),
          },
        },
      }),
    };

    it('should call axios create instance method', () => {
      Requester({ axios });

      expect(axios.create).toHaveBeenCalledWith({
        baseURL: VUE_APP_API_URL,
      });
    });

    it('should return something', () => {
      const request = Requester({ axios });

      expect(request).toBeTruthy();
    });
  });
});
