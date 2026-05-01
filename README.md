# Rezilio Front

Application frontend de suivi de conformité NIS2 — basée sur [TailAdmin Free](https://github.com/TailAdmin/free-react-tailwind-admin-dashboard).

## Stack technique

- React 19 + TypeScript
- Vite
- Tailwind CSS v3
- ApexCharts
- React Router v6

## Installation

```bash
npm install
npm run dev
```

## Structure

```
src/
├── components/       # Composants réutilisables
├── pages/            # Pages de l'application
│   ├── Dashboard/    # Tableau de bord NIS2
│   ├── Gouvernance/  # Gouvernance & politique
│   ├── Risques/      # Gestion des risques
│   ├── Incidents/    # Gestion des incidents
│   ├── SupplyChain/  # Sécurité de la chaîne d'approvisionnement
│   ├── Conformite/   # Suivi de conformité
│   └── Reporting/    # Rapports & exports
├── hooks/            # Custom hooks
├── services/         # Appels API vers le back Symfony
├── types/            # Types TypeScript
└── utils/            # Utilitaires
```

## Modules NIS2

| Module | Description |
|---|---|
| Gouvernance | Politiques, rôles, responsabilités |
| Risques | Identification, évaluation, traitement |
| Incidents | Déclaration, suivi, notification ANSSI |
| Supply Chain | Fournisseurs, contrats, évaluations |
| Conformité | Checklist NIS2, score global, actions |
| Reporting | Rapports réglementaires, exports PDF |

## Variables d'environnement

Copier `.env.example` en `.env.local` :

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Rezilio
```
