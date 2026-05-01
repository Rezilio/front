// Types NIS2 — Rezilio

export type StatutConformite = 'conforme' | 'partiel' | 'non_conforme' | 'na'

export type NiveauRisque = 'critique' | 'eleve' | 'moyen' | 'faible'

export type StatutIncident = 'ouvert' | 'en_cours' | 'resolu' | 'clos'

// Modules NIS2
export type ModuleNIS2 =
  | 'gouvernance'
  | 'gestion_risques'
  | 'incidents'
  | 'supply_chain'
  | 'continuite'
  | 'cryptographie'
  | 'controle_acces'
  | 'vulnerabilites'

export interface MesureConformite {
  id: string
  module: ModuleNIS2
  code: string           // ex: GOV-01
  titre: string
  description: string
  statut: StatutConformite
  responsable?: string
  echeance?: string
  preuves: string[]
  commentaire?: string
  createdAt: string
  updatedAt: string
}

export interface Risque {
  id: string
  titre: string
  description: string
  niveau: NiveauRisque
  probabilite: number    // 1-5
  impact: number         // 1-5
  score: number          // probabilite * impact
  traitement: 'accepter' | 'reduire' | 'transferer' | 'eviter'
  responsable?: string
  echeance?: string
  statut: 'ouvert' | 'en_traitement' | 'traite'
  createdAt: string
  updatedAt: string
}

export interface Incident {
  id: string
  titre: string
  description: string
  dateDetection: string
  dateDeclaration?: string
  statut: StatutIncident
  severite: 'critique' | 'majeur' | 'mineur'
  notificationANSSI: boolean
  dateNotificationANSSI?: string
  responsable?: string
  actions: string[]
  createdAt: string
  updatedAt: string
}

export interface Fournisseur {
  id: string
  nom: string
  type: string
  criticite: 'critique' | 'important' | 'standard'
  statutConformite: StatutConformite
  dateEvaluation?: string
  prochainEvaluation?: string
  contratSecurite: boolean
  createdAt: string
  updatedAt: string
}

export interface ScoreConformite {
  global: number           // 0-100
  parModule: Record<ModuleNIS2, number>
  totalMesures: number
  conformes: number
  partiels: number
  nonConformes: number
  na: number
}
