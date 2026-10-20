import api from './api'

export const audioService = {
  getAll: (params) => api.get('/audio', { params }),
  getById: (id) => api.get(`/audio/${id}`),
  upload: (formData) =>
    api.post('/audio/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  delete: (id) => api.delete(`/audio/${id}`),
}
