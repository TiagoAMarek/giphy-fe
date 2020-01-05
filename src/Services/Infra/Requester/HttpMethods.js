export default ({ requestRawInstance }) => {
  function get(path) {
    try {
      return requestRawInstance.get(path);
    } catch (error) {
      console.error(error);
    }

    return null;
  }

  return {
    get,
  };
};
