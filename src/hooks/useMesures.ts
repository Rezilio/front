import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'
import type { MesureCollection, MesureConformite, MesureFilters } from '@/types/mesure'

const MESURES_KEY = 'mesures'

export function useMesures(filters: MesureFilters = {}) {
  return useQuery({
    queryKey: [MESURES_KEY, filters],
    queryFn: async () => {
      const params = new URLSearchParams()
      if (filters.module) params.set('module', filters.module)
      if (filters.statut) params.set('statut', filters.statut)
      if (filters.page) params.set('page', String(filters.page))
      const { data } = await api.get<MesureCollection>(`/mesures?${params}`)
      return data
    },
  })
}

export function useMesure(id: string) {
  return useQuery({
    queryKey: [MESURES_KEY, id],
    queryFn: async () => {
      const { data } = await api.get<MesureConformite>(`/mesures/${id}`)
      return data
    },
    enabled: !!id,
  })
}

export function useUpdateMesure() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id, ...body }: Partial<MesureConformite> & { id: string }) => {
      const { data } = await api.patch<MesureConformite>(`/mesures/${id}`, body)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [MESURES_KEY] })
    },
  })
}

export function useCreateMesure() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (body: Omit<MesureConformite, 'id' | 'createdAt' | 'updatedAt'>) => {
      const { data } = await api.post<MesureConformite>('/mesures', body)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [MESURES_KEY] })
    },
  })
}
