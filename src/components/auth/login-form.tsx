'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import Link from 'next/link'

function getLoginConfig(kind: ReturnType<typeof getProductKind>) {
  // Always use curation theme for consistent experience
  return {
    panel: 'border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)]',
    muted: 'text-[rgb(55,85,76)]',
    action: 'bg-[#b0e4cc] text-[#091413] hover:bg-[#9fd6b8]',
    icon: Bookmark,
    title: 'Sign in to LadyFrame',
    body: 'Return to your bookmark shelf, public profile, drafts, and dashboard with the same calm emerald experience as the marketing site.',
  }
}

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()
  
  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getLoginConfig(productKind)
  const Icon = config.icon

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) return
    
    setIsLoading(true)
    try {
      await login(email, password)
      // Redirect to homepage instead of dashboard
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#091413] mb-2">
          Email Address
        </label>
        <input 
          id="email"
          className="h-12 w-full rounded-xl border border-[rgba(64,138,113,0.35)] bg-white/90 px-4 text-sm placeholder:text-[rgb(55,85,76)]/60 focus:border-[#408a71] focus:outline-none focus:ring-2 focus:ring-[rgba(176,228,204,0.5)] transition-colors" 
          placeholder="Enter your email address" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-[#091413] mb-2">
          Password
        </label>
        <input 
          id="password"
          className="h-12 w-full rounded-xl border border-[rgba(64,138,113,0.35)] bg-white/90 px-4 text-sm placeholder:text-[rgb(55,85,76)]/60 focus:border-[#408a71] focus:outline-none focus:ring-2 focus:ring-[rgba(176,228,204,0.5)] transition-colors" 
          placeholder="Enter your password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button 
        type="submit" 
        disabled={isLoading}
        className={`inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold ${config.action} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} transition-colors`}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}
