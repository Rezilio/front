import { Bell, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0F2340] px-6">
      <div />
      <div className="flex items-center gap-4">
        <button
          className="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#00CFFF]" />
        </button>
        <button
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Profil utilisateur"
        >
          <User size={18} />
          <span>RSSI</span>
        </button>
      </div>
    </header>
  )
}
