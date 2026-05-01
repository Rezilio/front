import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2 } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { StatutBadge } from './StatutBadge'
import { MODULE_LABELS, STATUT_LABELS, type MesureConformite, type StatutMesure } from '@/types/mesure'
import { useUpdateMesure } from '@/hooks/useMesures'

const schema = z.object({
  statut: z.enum(['conforme', 'partiel', 'non_conforme', 'na']),
  responsable: z.string().optional(),
  commentaire: z.string().optional(),
  echeance: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

interface MesureDetailDialogProps {
  mesure: MesureConformite | null
  open: boolean
  onClose: () => void
}

export function MesureDetailDialog({ mesure, open, onClose }: MesureDetailDialogProps) {
  const { mutate, isPending } = useUpdateMesure()

  const { register, handleSubmit, setValue, watch } = useForm<FormValues>({
    resolver: zodResolver(schema),
    values: mesure ? {
      statut: mesure.statut,
      responsable: mesure.responsable ?? '',
      commentaire: mesure.commentaire ?? '',
      echeance: mesure.echeance ?? '',
    } : undefined,
  })

  if (!mesure) return null

  const onSubmit = (values: FormValues) => {
    mutate({ id: mesure.id, ...values }, { onSuccess: onClose })
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-gray-400">{mesure.code}</span>
            <span className="text-xs text-gray-500">{MODULE_LABELS[mesure.module]}</span>
          </div>
          <DialogTitle>{mesure.titre}</DialogTitle>
        </DialogHeader>

        {mesure.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {mesure.description}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Statut */}
          <div>
            <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Statut de conformité
            </label>
            <Select
              value={watch('statut')}
              onValueChange={(v) => setValue('statut', v as StatutMesure)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(Object.entries(STATUT_LABELS) as [StatutMesure, string][]).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Responsable */}
          <div>
            <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Responsable
            </label>
            <input
              {...register('responsable')}
              className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Nom du responsable"
            />
          </div>

          {/* Échéance */}
          <div>
            <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Échéance
            </label>
            <input
              type="date"
              {...register('echeance')}
              className="flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Commentaire */}
          <div>
            <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
              Commentaire
            </label>
            <textarea
              {...register('commentaire')}
              rows={3}
              className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              placeholder="Notes, actions correctives..."
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>Annuler</Button>
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              Enregistrer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
