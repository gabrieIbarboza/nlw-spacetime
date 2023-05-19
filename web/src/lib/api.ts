import axios from 'axios'

// Definindo rota padrão do backend
export const api = axios.create({
  baseURL: 'http://192.168.15.3:3333',
})
