import { Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MODULE_LABELS, STATUT_LABELS, type ModuleNIS2, type StatutMesure } from '@/types/mesure'

interface MesureFiltersProps {
  module?: ModuleNIS2
  statut?: StatutMesure
  onModuleChange: (v: ModuleNIS2 | undefined) => void
  onStatutChange: (v: StatutMesure | undefined) => void
}

export function MesureFilters({ module, statut, onModuleChange, onStatutChange }: MesureFiltersProps) {
  const hasFilters = !!module || !!statut

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Filter className="h-4 w-4 text-gray-400" />

      {/* Filtre module */}
      <Select value={module ?? ''} onValueChange={(v) => onModuleChange(v ? (v as ModuleNIS2) : undefined)}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Tous les modules" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">Tous les modules</SelectItem>
          {(Object.entries(MODULE_LABELS) as [ModuleNIS2, string][]).map(([key, label]) => (
            <SelectItem key={key} value={key}>{label}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Filtre statut */}
      <Select value={statut ?? ''} onValueChange={(v) => onStatutChange(v ? (v as StatutMesure) : undefined)}>
        <SelectTrigger className="w-44">
          <SelectValue placeholder="Tous les statuts" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">Tous les statuts</SelectItem>
          {(Object.entries(STATUT_LABELS) as [StatutMesure, string][]).map(([key, label]) => (
            <SelectItem key={key} value={key}>{label}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => { onModuleChange(undefined); onStatutChange(undefined) }}
        >
          <X className="h-3.5 w-3.5 mr-1" />
          Réinitialiser
        </Button>
      )}
    </div>
  )
}
