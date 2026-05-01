import { CalendarDays, User } from 'lucide-react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { StatutBadge } from './StatutBadge'
import { MODULE_LABELS, type MesureConformite } from '@/types/mesure'
import { cn } from '@/lib/utils'

interface MesureCardProps {
  mesure: MesureConformite
  onClick: (mesure: MesureConformite) => void
}

export function MesureCard({ mesure, onClick }: MesureCardProps) {
  return (
    <button
      onClick={() => onClick(mesure)}
      className={cn(
        'w-full text-left rounded-lg border border-gray-200 bg-white p-4 shadow-sm',
        'hover:border-teal-300 hover:shadow-md transition-all duration-150',
        'dark:border-gray-700 dark:bg-gray-900 dark:hover:border-teal-700',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500">{mesure.code}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {MODULE_LABELS[mesure.module]}
            </span>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
            {mesure.titre}
          </p>
        </div>
        <StatutBadge statut={mesure.statut} className="shrink-0" />
      </div>

      <div className="mt-3 flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
        {mesure.responsable && (
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {mesure.responsable}
          </span>
        )}
        {mesure.echeance && (
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            {format(new Date(mesure.echeance), 'd MMM yyyy', { locale: fr })}
          </span>
        )}
      </div>
    </button>
  )
}
