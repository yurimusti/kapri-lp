import axios from 'axios';

export const getCEP = params => {
  return new Promise((resolve, reject) => {
    const api = axios
      .get(`https://viacep.com.br/ws/${params.cep}/json/`)
      .then(e => resolve(e.data))
      .catch(err => reject(err));

    return api;
  });
};
