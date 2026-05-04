import Link from 'next/link'
import { ArrowRight, Bookmark, Shield, UserPlus, Rocket, Heart, Compass, Gem, Crown } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SignupForm } from '@/components/auth/signup-form'
import { SITE_CONFIG } from '@/lib/site-config'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ecfdf5_0%,#f6fffb_55%,#eefaf4_100%)] text-[#091413]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Side - Join Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(176,228,204,0.35)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#285a48]">
                <UserPlus className="h-3.5 w-3.5 text-[#b0e4cc]" />
                Join Our Community
              </div>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#091413] sm:text-5xl lg:text-[3.15rem]">
                Start curating your digital world
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[rgb(55,85,76)] sm:text-[17px]">
                Create your personal curation workspace and join thousands of knowledge seekers building meaningful collections. Your journey to organized discovery starts here.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Crown,
                  title: "Premium Features",
                  description: "Access advanced curation tools, analytics, and priority support."
                },
                {
                  icon: Heart,
                  title: "Community Driven",
                  description: "Connect with fellow curators and discover shared interests."
                },
                {
                  icon: Rocket,
                  title: "Fast Setup",
                  description: "Get started in minutes with our intuitive onboarding process."
                },
                {
                  icon: Gem,
                  title: "Quality Content",
                  description: "Curate and share only the best resources with your audience."
                }
              ].map((benefit, index) => (
                <div key={index} className="rounded-[1.5rem] border border-[rgba(64,138,113,0.18)] bg-[rgba(236,252,244,0.9)] p-5 transition-all duration-300 hover:border-[rgba(64,138,113,0.35)] hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#b0e4cc] p-2">
                      <benefit.icon className="h-4 w-4 text-[#091413]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#091413]">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-[rgb(55,85,76)]">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Community Stats */}
            <div className="rounded-[1.5rem] border border-[rgba(64,138,113,0.18)] bg-[rgba(236,252,244,0.9)] p-6">
              <h3 className="font-semibold text-[#091413] mb-4">Join Our Growing Community</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#091413]">10K+</div>
                  <div className="text-sm text-[rgb(55,85,76)]">Active Curators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#091413]">50K+</div>
                  <div className="text-sm text-[rgb(55,85,76)]">Bookmarks Shared</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#091413]">100+</div>
                  <div className="text-sm text-[rgb(55,85,76)]">Topics Covered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 shadow-[0_26px_70px_rgba(9,20,19,0.08)]">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(64,138,113,0.35)] bg-[#285a48]/35">
                  <UserPlus className="h-8 w-8 text-[#b0e4cc]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#091413]">Create Account</h2>
                <p className="mt-2 text-sm text-[rgb(55,85,76)]">
                  Start your curation journey in minutes
                </p>
              </div>
              
              <SignupForm />

              {/* Additional Links */}
              <div className="mt-6 text-center">
                <p className="text-sm text-[rgb(55,85,76)]">
                  Already have an account?{' '}
                  <Link 
                    href="/login" 
                    className="font-semibold text-[#285a48] hover:text-[#091413] transition-colors"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>

            {/* Why Join */}
            <div className="rounded-[1.5rem] border border-[rgba(64,138,113,0.18)] bg-[rgba(236,252,244,0.9)] p-6">
              <h3 className="font-semibold text-[#091413] mb-3">Why Choose {SITE_CONFIG.name}?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Compass className="h-5 w-5 text-[#408a71] mt-0.5" />
                  <div>
                    <div className="font-medium text-[#091413] text-sm">Ad-Free Experience</div>
                    <div className="text-xs text-[rgb(55,85,76)]">Focus on what matters without distractions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#408a71] mt-0.5" />
                  <div>
                    <div className="font-medium text-[#091413] text-sm">Privacy First</div>
                    <div className="text-xs text-[rgb(55,85,76)]">Your data is yours, always protected</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bookmark className="h-5 w-5 text-[#408a71] mt-0.5" />
                  <div>
                    <div className="font-medium text-[#091413] text-sm">Smart Organization</div>
                    <div className="text-xs text-[rgb(55,85,76)]">AI-powered categorization and tagging</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
