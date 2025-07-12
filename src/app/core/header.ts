export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const getHeaders = () => {
  const authToken = getToken();

  return {
    ...(authToken ? { authorization: `Bearer ${authToken}` } : {}),
  };
};
