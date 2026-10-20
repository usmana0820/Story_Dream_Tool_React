import api from './api'

export const motionService = {
  getAll: (params) => api.get('/motion-videos', { params }),
  getById: (id) => api.get(`/motion-videos/${id}`),
  create: (data) => api.post('/motion-videos', data),
  delete: (id) => api.delete(`/motion-videos/${id}`),
}
