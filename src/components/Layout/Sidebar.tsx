import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Shield,
  AlertTriangle,
  Siren,
  Link2,
  CheckSquare,
  FileBarChart2,
} from 'lucide-react'

const navItems = [
  { to: '/dashboard',    icon: LayoutDashboard, label: 'Tableau de bord' },
  { to: '/gouvernance',  icon: Shield,           label: 'Gouvernance' },
  { to: '/risques',      icon: AlertTriangle,    label: 'Gestion des risques' },
  { to: '/incidents',    icon: Siren,            label: 'Incidents' },
  { to: '/supply-chain', icon: Link2,            label: 'Supply Chain' },
  { to: '/conformite',   icon: CheckSquare,      label: 'Conformité' },
  { to: '/reporting',    icon: FileBarChart2,    label: 'Reporting' },
]

export default function Sidebar() {
  return (
    <aside className="flex w-64 flex-col bg-[#0D1B2A] border-r border-gray-800">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-gray-800">
        <span className="text-xl font-bold text-[#00CFFF] tracking-wide">REZILIO</span>
        <span className="ml-2 text-xs text-gray-400 font-medium">NIS2</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#00CFFF]/10 text-[#00CFFF]'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer sidebar */}
      <div className="border-t border-gray-800 p-4">
        <p className="text-xs text-gray-500 text-center">Directive NIS2 — UE 2022/2555</p>
      </div>
    </aside>
  )
}
