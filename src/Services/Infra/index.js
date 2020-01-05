import Requester from './Requester';

export default ({ axios }) => {
  const { getAxiosInstance } = Requester({ axios });

  return {
    getAxiosInstance,
  };
};
