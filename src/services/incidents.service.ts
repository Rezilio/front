import api from './api'
import type { Incident } from '@/types/nis2'

export const incidentsService = {
  getAll: () =>
    api.get<Incident[]>('/incidents').then(r => r.data),

  getById: (id: string) =>
    api.get<Incident>(`/incidents/${id}`).then(r => r.data),

  create: (data: Omit<Incident, 'id' | 'createdAt' | 'updatedAt'>) =>
    api.post<Incident>('/incidents', data).then(r => r.data),

  update: (id: string, data: Partial<Incident>) =>
    api.patch<Incident>(`/incidents/${id}`, data).then(r => r.data),

  delete: (id: string) =>
    api.delete(`/incidents/${id}`),
}
