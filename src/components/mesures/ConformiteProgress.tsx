import { type MesureConformite } from '@/types/mesure'

interface ConformiteProgressProps {
  mesures: MesureConformite[]
}

export function ConformiteProgress({ mesures }: ConformiteProgressProps) {
  const applicable = mesures.filter((m) => m.statut !== 'na')
  const conforme = mesures.filter((m) => m.statut === 'conforme').length
  const partiel = mesures.filter((m) => m.statut === 'partiel').length
  const nonConforme = mesures.filter((m) => m.statut === 'non_conforme').length
  const na = mesures.filter((m) => m.statut === 'na').length
  const total = applicable.length
  const score = total > 0 ? Math.round(((conforme + partiel * 0.5) / total) * 100) : 0

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Score de conformité</h3>
        <span className="text-2xl font-bold text-teal-700 dark:text-teal-400">{score}%</span>
      </div>

      {/* Barre de progression empilée */}
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
        {total > 0 && (
          <>
            <div className="bg-green-500 transition-all" style={{ width: `${(conforme / total) * 100}%` }} />
            <div className="bg-amber-400 transition-all" style={{ width: `${(partiel / total) * 100}%` }} />
            <div className="bg-red-400 transition-all" style={{ width: `${(nonConforme / total) * 100}%` }} />
          </>
        )}
      </div>

      {/* Légende */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        {[
          { label: 'Conformes', count: conforme, color: 'bg-green-500' },
          { label: 'Partiels', count: partiel, color: 'bg-amber-400' },
          { label: 'Non conformes', count: nonConforme, color: 'bg-red-400' },
          { label: 'N/A', count: na, color: 'bg-gray-300 dark:bg-gray-600' },
        ].map(({ label, count, color }) => (
          <div key={label} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span className={`h-2 w-2 rounded-full shrink-0 ${color}`} />
            <span>{label}</span>
            <span className="ml-auto font-medium text-gray-900 dark:text-gray-100">{count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
