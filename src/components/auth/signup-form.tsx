'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'

export function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signup } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !password) return
    
    setIsLoading(true)
    try {
      await signup(name, email, password)
      // Redirect to homepage after successful signup
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Signup failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#091413] mb-2">
          Full Name
        </label>
        <input 
          id="name"
          className="h-12 w-full rounded-xl border border-[rgba(64,138,113,0.35)] bg-white/90 px-4 text-sm placeholder:text-[rgb(55,85,76)]/60 focus:border-[#408a71] focus:outline-none focus:ring-2 focus:ring-[rgba(176,228,204,0.5)] transition-colors" 
          placeholder="Enter your full name" 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
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
          placeholder="Create a strong password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-[#091413] mb-2">
          What will you curate? (Optional)
        </label>
        <textarea 
          id="bio"
          className="w-full rounded-xl border border-[rgba(64,138,113,0.35)] bg-white/90 px-4 py-3 text-sm placeholder:text-[rgb(55,85,76)]/60 focus:border-[#408a71] focus:outline-none focus:ring-2 focus:ring-[rgba(176,228,204,0.5)] transition-colors resize-none" 
          placeholder="Tell us what you're passionate about curating..." 
          rows={3}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <button 
        type="submit" 
        disabled={isLoading}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#b0e4cc] px-6 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  )
}
