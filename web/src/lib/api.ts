import axios from 'axios'

// Definindo rota padrão do backend
export const api = axios.create({
  baseURL: 'http://localhost:3333',
})
