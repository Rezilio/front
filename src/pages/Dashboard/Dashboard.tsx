import { Shield, AlertTriangle, Siren, TrendingUp } from 'lucide-react'

const kpis = [
  { label: 'Score de conformité', value: '72%',  icon: Shield,        color: 'text-[#00CFFF]',  bg: 'bg-[#00CFFF]/10' },
  { label: 'Risques ouverts',     value: '14',   icon: AlertTriangle, color: 'text-amber-400',  bg: 'bg-amber-400/10' },
  { label: 'Incidents en cours',  value: '3',    icon: Siren,         color: 'text-red-400',    bg: 'bg-red-400/10' },
  { label: 'Mesures conformes',   value: '58/80',icon: TrendingUp,    color: 'text-green-400',  bg: 'bg-green-400/10' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tableau de bord NIS2</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Vue globale de la conformité Rezilio</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="card flex items-center gap-4">
            <div className={`rounded-xl p-3 ${kpi.bg}`}>
              <kpi.icon size={22} className={kpi.color} />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{kpi.label}</p>
              <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Conformité par module */}
      <div className="card">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Conformité par module NIS2</h2>
        <div className="space-y-3">
          {[
            { label: 'Gouvernance',          score: 85 },
            { label: 'Gestion des risques',  score: 70 },
            { label: 'Incidents',            score: 60 },
            { label: 'Supply Chain',         score: 55 },
            { label: 'Continuité',           score: 80 },
            { label: 'Cryptographie',        score: 90 },
          ].map((m) => (
            <div key={m.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700 dark:text-gray-300">{m.label}</span>
                <span className="font-medium text-gray-900 dark:text-white">{m.score}%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2 rounded-full bg-[#00CFFF] transition-all"
                  style={{ width: `${m.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
