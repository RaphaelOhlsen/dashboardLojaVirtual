/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import axios from 'axios';
import { LOGIN_USER } from './types';
import { api, versao } from '../config';

const saveToken = (usuario, rememberOption) => {
  if (!usuario.token) return null;
  const [token1, token2, token3] = usuario.token.split('.');
  localStorage.setItem('token1', token1);
  localStorage.setItem('token2', token2);
  localStorage.setItem('token3', token3);
  localStorage.setItem('rememberOption', rememberOption);
  return null;
};

const cleanToken = () => {
  localStorage.removeItem('token1');
  localStorage.removeItem('token2');
  localStorage.removeItem('token3');
  localStorage.removeItem('rememberOption');
};

const getToken = () => {
  const token1 = localStorage.getItem('token1');
  const token2 = localStorage.getItem('token2');
  const token3 = localStorage.getItem('token3');
  if (!token1 || token2 || token3) return null;
  return `${token1}.${token2}.${token3}`;
};

const getHeaders = () => ({
  Headers: {
    Authorization: `Ecommerce ${getToken()}`,
  },
});

const initApp = () => {
  const rememberOption = localStorage.getItem('rememberOption');
  if (rememberOption === 'false') cleanToken();
};

// USUARIOS
const handleLogin = ({ email, password, rememberOption }, callback) =>
  function (dispatch) {
    axios
      .post(`${api}/${versao}/api/usuarios/login`, { email, password })
      .then((res) => {
        saveToken(res.data.usuario, rememberOption);
        dispatch({ type: LOGIN_USER, payload: res.data });
      })
      .catch((err) => {
        console.log(err, err.response.data);
      });
  };

export { handleLogin, initApp };
