import Link from 'next/link'
import { ArrowRight, Bookmark, Shield, Lock, Mail, User, CheckCircle, Star, Zap, Globe } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { LoginForm } from '@/components/auth/login-form'
import { SITE_CONFIG } from '@/lib/site-config'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ecfdf5_0%,#f6fffb_55%,#eefaf4_100%)] text-[#091413]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Side - Welcome Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(176,228,204,0.35)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#285a48]">
                <Bookmark className="h-3.5 w-3.5 text-[#b0e4cc]" />
                Welcome Back
              </div>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#091413] sm:text-5xl lg:text-[3.15rem]">
                Your curated digital workspace awaits
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[rgb(55,85,76)] sm:text-[17px]">
                Step back into your personalized collection of bookmarks, profiles, and insights. Continue where you left off with the same calm emerald experience you love.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Shield,
                  title: "Secure Access",
                  description: "Enterprise-grade security protects your curated collections and personal data."
                },
                {
                  icon: Globe,
                  title: "Cross-Device Sync",
                  description: "Your bookmarks and profiles sync seamlessly across all your devices."
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Instant access to your digital workspace with optimized performance."
                },
                {
                  icon: Star,
                  title: "Smart Curation",
                  description: "AI-powered suggestions help you discover and organize better content."
                }
              ].map((feature, index) => (
                <div key={index} className="rounded-[1.5rem] border border-[rgba(64,138,113,0.18)] bg-[rgba(236,252,244,0.9)] p-5 transition-all duration-300 hover:border-[rgba(64,138,113,0.35)] hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#b0e4cc] p-2">
                      <feature.icon className="h-4 w-4 text-[#091413]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#091413]">{feature.title}</h3>
                      <p className="mt-1 text-sm text-[rgb(55,85,76)]">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-[#285a48]">
                <CheckCircle className="h-4 w-4" />
                Trusted by 10,000+ curators worldwide
              </div>
              <div className="flex items-center gap-2 text-sm text-[#285a48]">
                <CheckCircle className="h-4 w-4" />
                99.9% uptime guarantee
              </div>
              <div className="flex items-center gap-2 text-sm text-[#285a48]">
                <CheckCircle className="h-4 w-4" />
                End-to-end encryption
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 shadow-[0_26px_70px_rgba(9,20,19,0.08)]">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(64,138,113,0.35)] bg-[#285a48]/35">
                  <Lock className="h-8 w-8 text-[#b0e4cc]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#091413]">Sign In</h2>
                <p className="mt-2 text-sm text-[rgb(55,85,76)]">
                  Enter your credentials to access your workspace
                </p>
              </div>
              
              <LoginForm />

              {/* Additional Links */}
              <div className="mt-6 text-center">
                <p className="text-sm text-[rgb(55,85,76)]">
                  Don't have an account?{' '}
                  <Link 
                    href="/register" 
                    className="font-semibold text-[#285a48] hover:text-[#091413] transition-colors"
                  >
                    Create one here
                  </Link>
                </p>
                <Link 
                  href="/forgot-password" 
                  className="mt-3 block text-sm text-[#285a48] hover:text-[#091413] transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            {/* Quick Access */}
            <div className="rounded-[1.5rem] border border-[rgba(64,138,113,0.18)] bg-[rgba(236,252,244,0.9)] p-6">
              <h3 className="font-semibold text-[#091413] mb-3">Quick Access</h3>
              <div className="space-y-2">
                <Link href="/sbm" className="flex items-center justify-between rounded-lg p-3 text-sm text-[rgb(55,85,76)] hover:bg-[rgba(176,228,204,0.25)] transition-colors">
                  <span className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    Browse Bookmarks
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/help" className="flex items-center justify-between rounded-lg p-3 text-sm text-[rgb(55,85,76)] hover:bg-[rgba(176,228,204,0.25)] transition-colors">
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Get Help
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
