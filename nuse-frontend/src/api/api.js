import axios from 'axios';

import Cookies from 'js-cookie';

export const getCustomers = (body, token) => {
  try {
    return axios.post(`${process.env.NEXT_PUBLIC_API}/customers/`, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token ? token : Cookies.get('token')}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = (body) => {
  try {
    return axios.post(`${process.env.NEXT_PUBLIC_API}/users/login`, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const editCustomer = (body) => {
  try {
    return axios.put(`${process.env.NEXT_PUBLIC_API}/customers/edit`, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
