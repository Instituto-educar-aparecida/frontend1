import axios from "axios";

import { useAuthStore } from "../store/use-auth-store";

import { navigate } from "./router";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
});

// injeta o token em todas as requisições automaticamente
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log(`Token enviado para a rota ${token}`);
  }
  return config;
});

// se o backend retornar 401, desloga automaticamente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      navigate("/login");
    }
    return Promise.reject(error);
  },
);

export default api;
