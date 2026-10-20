import api from './api'

export const emotionService = {
  getAll: (params) => api.get('/emotions', { params }),
  getById: (id) => api.get(`/emotions/${id}`),
  analyze: (data) => api.post('/emotions/analyze', data),
}
