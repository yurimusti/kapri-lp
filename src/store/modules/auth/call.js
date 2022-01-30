import axios from 'axios';
// import API from '../../../services/api';

export const authUser = params => {
  return new Promise((resolve, reject) => {
    const token =
      'Basic YVZnamhFQmNuTi15dFJyZXdzV0pyU3BvS25oOnE0Zll0UkdJa21MSkt0eDlZNU1hVVlGUFBkYXNkMlFENGhUSTRHZHM0NXRnZlNBZGxrag==';

    const config = new URLSearchParams();
    config.append('Content-Type', 'application/x-www-form-urlencoded');
    config.append('grant_type', 'password');

    //DEFAULT
    config.append('username', params.email);
    config.append('password', params.password);

    // test
    // // ADMIN
    // config.append('username', 'admin@email.com');
    // config.append('password', '1234qwer');

    // GVD DEV
    // config.append('username', 'yurigvd3@email.com');
    // config.append('password', 'Teste@123');

    // GVDPRODUCAP
    // config.append('username', 'laura.sane@gmail.com');
    // config.append('password', 'ReW1b5X9$');

    // Consultor
    // config.append('username', 'yuriconsultor2@email.com');
    // config.append('password', 'Teste@123');

    //D2C
    // config.append('username', 'matias@mail.com');
    // config.append('password', 'mAtias972&');

    //D2C
    // config.append('username', 'yurid2c5@mail.com');
    // config.append('password', 'Teste@123');

    //D2C PROD
    // config.append('username', 'ana2@email.com');
    // config.append('password', 'Teste@123');

    // Email: yurigvd3@email.com - Senha provisória: ss71xw

    const headers = {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: token,
    };

    axios
      .post(
        `${
          process.env.ENVIRONMENT === 'development'
            ? 'https://charles-node-api-dev.herokuapp.com'
            : 'https://charles-node-api-staging.herokuapp.com'
        }/auth/token`,
        config,
        {
          headers,
        }
      )
      .then(e => resolve(e.data))
      .catch(err => reject(err));
  });
};

export const createUser = params => {
  return new Promise((resolve, reject) => {
    const api = axios
      .post(
        `${
          process.env.ENVIRONMENT === 'development'
            ? 'https://charles-node-api-dev.herokuapp.com'
            : 'https://charles-node-api-staging.herokuapp.com'
        }/create/users/d2c`,
        params
      )
      .then(e => resolve(e.data))
      .catch(err => reject(err));

    return api;
  });
};
