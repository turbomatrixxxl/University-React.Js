import axios from 'axios';

const BASE_URL_API = 'https://66bcd35624da2de7ff6bf860.mockapi.io/';
const CITIES_BASE_URL = 'https://66bcd6cd24da2de7ff6c039d.mockapi.io/';

const api = axios.create({
  baseURL: BASE_URL_API,
});

const resourceApi = resource => {
  return {
    getAll: () => api.get(`${resource}`),
    getById: id => api.get(`${resource}/${id}`),
    create: data => api.post(`${resource}`, data),
    update: (id, data) => api.put(`${resource}/${id}`, data),
    delete: id => api.delete(`${resource}/${id}`),
  };
};

const tutorsApi = resourceApi('tutors');
const facultiesApi = resourceApi('faculties');

const apiCities = axios.create({
  baseURL: CITIES_BASE_URL,
});

const citiesApi = () => {
  return {
    getAll: () => apiCities.get('cities'),
    getById: id => apiCities.get(`cities/${id}`),
    create: data => apiCities.post('cities', data),
    update: (id, data) => apiCities.put(`cities/${id}`, data),
    delete: id => apiCities.delete(`cities/${id}`),
  };
};

export { tutorsApi, facultiesApi, citiesApi };
