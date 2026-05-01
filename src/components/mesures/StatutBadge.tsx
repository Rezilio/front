import { cn } from '@/lib/utils'
import { STATUT_COLORS, STATUT_LABELS, type StatutMesure } from '@/types/mesure'

interface StatutBadgeProps {
  statut: StatutMesure
  className?: string
}

export function StatutBadge({ statut, className }: StatutBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        STATUT_COLORS[statut],
        className,
      )}
    >
      {STATUT_LABELS[statut]}
    </span>
  )
}
