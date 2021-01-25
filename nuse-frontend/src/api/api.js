import axios from 'axios';

import Cookies from 'js-cookie';

export const getCustomers = (name, token) => {
  try {
    return axios.get(`${process.env.NEXT_PUBLIC_API}/customers/?filterName=${name}`, {
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

export const addCustomer = (body) => {
  try {
    return axios.post(`${process.env.NEXT_PUBLIC_API}/customers/add`, body, {
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

export const getMeasurements = (id) => {
  try {
    return axios.get(`${process.env.NEXT_PUBLIC_API}/measurements/customer?customerId=${id}`, {
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

export const editMeasurements = (body) => {
  try {
    return axios.put(`${process.env.NEXT_PUBLIC_API}/measurements/edit`, body, {
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

export const deleteMeasurements = (body) => {
  try {
    return axios.delete(`${process.env.NEXT_PUBLIC_API}/measurements/delete`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
      data: {
        id: body.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addMeasurements = (body) => {
  try {
    return axios.post(`${process.env.NEXT_PUBLIC_API}/measurements/add`, body, {
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
