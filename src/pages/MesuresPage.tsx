import { useState } from 'react'
import { Shield, Plus } from 'lucide-react'
import { MesureCard } from '@/components/mesures/MesureCard'
import { MesureFilters } from '@/components/mesures/MesureFilters'
import { MesureDetailDialog } from '@/components/mesures/MesureDetailDialog'
import { ConformiteProgress } from '@/components/mesures/ConformiteProgress'
import { Button } from '@/components/ui/button'
import { useMesures } from '@/hooks/useMesures'
import type { MesureConformite, ModuleNIS2, StatutMesure } from '@/types/mesure'

export function MesuresPage() {
  const [moduleFilter, setModuleFilter] = useState<ModuleNIS2 | undefined>()
  const [statutFilter, setStatutFilter] = useState<StatutMesure | undefined>()
  const [selected, setSelected] = useState<MesureConformite | null>(null)

  const { data, isLoading, isError } = useMesures({
    module: moduleFilter,
    statut: statutFilter,
  })

  const mesures = data?.['hydra:member'] ?? []
  const total = data?.['hydra:totalItems'] ?? 0

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-700 dark:bg-teal-600">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Mesures de conformité
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Directive NIS2 — {total} mesures
                </p>
              </div>
            </div>
            <Button size="sm">
              <Plus className="h-4 w-4" />
              Ajouter
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Sidebar — score + filtres */}
          <aside className="lg:col-span-1 space-y-4">
            <ConformiteProgress mesures={mesures} />
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">Filtres</p>
              <div className="flex flex-col gap-2">
                <MesureFilters
                  module={moduleFilter}
                  statut={statutFilter}
                  onModuleChange={setModuleFilter}
                  onStatutChange={setStatutFilter}
                />
              </div>
            </div>
          </aside>

          {/* Liste des mesures */}
          <main className="lg:col-span-3">
            {isLoading && (
              <div className="grid gap-3 sm:grid-cols-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-24 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
                ))}
              </div>
            )}

            {isError && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Shield className="h-10 w-10 text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Erreur de chargement</p>
                <p className="text-xs text-gray-500 mt-1">Vérifiez que l'API est disponible</p>
              </div>
            )}

            {!isLoading && !isError && mesures.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Shield className="h-10 w-10 text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Aucune mesure</p>
                <p className="text-xs text-gray-500 mt-1">Modifiez les filtres ou ajoutez des mesures</p>
              </div>
            )}

            {!isLoading && mesures.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {mesures.map((mesure) => (
                  <MesureCard
                    key={mesure.id}
                    mesure={mesure}
                    onClick={setSelected}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Dialog de détail / édition */}
      <MesureDetailDialog
        mesure={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}
