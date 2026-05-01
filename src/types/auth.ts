export interface User {
  id: string
  email: string
  nom: string
  prenom: string
  role: 'admin' | 'rssi' | 'auditeur' | 'contributeur'
  organisation: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}
