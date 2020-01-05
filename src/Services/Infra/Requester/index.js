import HttpMethods from './HttpMethods';

export default ({ axios }) => {
  const requestRawInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    params: {
      api_key: process.env.VUE_APP_API_KEY,
    },
  });

  function getRequestInstance() {
    return HttpMethods({ requestRawInstance });
  }

  return {
    getRequestInstance,
  };
};
