import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: Appel API Symfony /api/auth/login
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0D1B2A]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="rounded-2xl bg-[#00CFFF]/10 p-4">
              <Shield size={40} className="text-[#00CFFF]" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white">REZILIO</h1>
          <p className="text-gray-400 mt-1">Suivi de conformité NIS2</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#0F2340] rounded-2xl p-8 space-y-5 shadow-xl">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
              Adresse email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-2.5 text-white placeholder-gray-500 focus:border-[#00CFFF] focus:outline-none focus:ring-1 focus:ring-[#00CFFF]"
              placeholder="rssi@organisation.fr"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-700 bg-[#0D1B2A] px-4 py-2.5 text-white placeholder-gray-500 focus:border-[#00CFFF] focus:outline-none focus:ring-1 focus:ring-[#00CFFF]"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-[#00CFFF] py-2.5 font-semibold text-[#0D1B2A] hover:bg-[#00a3cc] transition-colors"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-6">Directive NIS2 — UE 2022/2555</p>
      </div>
    </div>
  )
}
