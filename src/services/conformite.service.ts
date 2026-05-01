import api from './api'
import type { MesureConformite, ScoreConformite } from '@/types/nis2'

export const conformiteService = {
  getMesures: () =>
    api.get<MesureConformite[]>('/conformite/mesures').then(r => r.data),

  getMesureById: (id: string) =>
    api.get<MesureConformite>(`/conformite/mesures/${id}`).then(r => r.data),

  updateMesure: (id: string, data: Partial<MesureConformite>) =>
    api.patch<MesureConformite>(`/conformite/mesures/${id}`, data).then(r => r.data),

  getScore: () =>
    api.get<ScoreConformite>('/conformite/score').then(r => r.data),
}
