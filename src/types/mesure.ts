export type ModuleNIS2 =
  | 'gouvernance'
  | 'gestion_risques'
  | 'incidents'
  | 'supply_chain'
  | 'continuite'
  | 'cryptographie'
  | 'controle_acces'
  | 'vulnerabilites'

export type StatutMesure = 'conforme' | 'partiel' | 'non_conforme' | 'na'

export interface MesureConformite {
  id: string
  module: ModuleNIS2
  code: string
  titre: string
  description?: string
  statut: StatutMesure
  responsable?: string
  echeance?: string
  preuves?: string[]
  commentaire?: string
  createdAt: string
  updatedAt: string
}

export interface MesureCollection {
  'hydra:member': MesureConformite[]
  'hydra:totalItems': number
}

export interface MesureFilters {
  module?: ModuleNIS2
  statut?: StatutMesure
  page?: number
}

export const MODULE_LABELS: Record<ModuleNIS2, string> = {
  gouvernance: 'Gouvernance',
  gestion_risques: 'Gestion des risques',
  incidents: 'Incidents',
  supply_chain: 'Supply chain',
  continuite: 'Continuité',
  cryptographie: 'Cryptographie',
  controle_acces: 'Contrôle d\'accès',
  vulnerabilites: 'Vulnérabilités',
}

export const STATUT_LABELS: Record<StatutMesure, string> = {
  conforme: 'Conforme',
  partiel: 'Partiel',
  non_conforme: 'Non conforme',
  na: 'N/A',
}

export const STATUT_COLORS: Record<StatutMesure, string> = {
  conforme: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  partiel: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
  non_conforme: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  na: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
}
