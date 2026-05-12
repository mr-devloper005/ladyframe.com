import { Cookie, Shield, Settings, CheckCircle, Clock, ArrowRight, Bookmark, Eye, Lock, BarChart3 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const cookieCategories = [
  {
    icon: Lock,
    title: "Essential Cookies",
    description: "Required for basic functionality and security of our platform.",
    items: [
      "Authentication and session management",
      "Security protection and fraud prevention",
      "Form submission and processing",
      "Shopping cart and checkout functionality",
      "Load balancing and server stability"
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance",
    description: "Help us understand how you use our service to improve it.",
    items: [
      "Website traffic analysis and trends",
      "User behavior and interaction patterns",
      "Performance monitoring and optimization",
      "Error tracking and bug fixing",
      "Feature usage statistics"
    ]
  },
  {
    icon: Settings,
    title: "Personalization & Preferences",
    description: "Remember your choices to make your experience better.",
    items: [
      "Theme and display preferences",
      "Language and region settings",
      "Filter and search preferences",
      "Content recommendations",
      "Layout and navigation choices"
    ]
  },
  {
    icon: Eye,
    title: "Marketing & Advertising",
    description: "Used to show relevant content and measure campaign effectiveness.",
    items: [
      "Personalized content recommendations",
      "Social media integration",
      "Affiliate and partner advertising",
      "Email marketing preferences",
      "Campaign performance tracking"
    ]
  }
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ecfdf5_0%,#f6fffb_55%,#eefaf4_100%)] text-[#091413]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(176,228,204,0.35)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#285a48] mb-4">
            <Cookie className="h-3.5 w-3.5 text-[#b0e4cc]" />
            Cookie Policy
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#091413] sm:text-5xl lg:text-[3.15rem] mb-6">
            Transparency in every bite
          </h1>
          <p className="max-w-3xl mx-auto text-base leading-relaxed text-[rgb(55,85,76)] sm:text-[17px]">
            At {SITE_CONFIG.name}, we use cookies and similar technologies to provide you with the best curation experience. 
            This policy explains what we collect, why we use it, and how you can control your preferences.
          </p>
        </div>

        {/* Cookie Principles */}
        <div className="grid gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "User Control",
              description: "You decide what data we collect"
            },
            {
              title: "Minimal Collection",
              description: "Only essential data for functionality"
            },
            {
              title: "Full Transparency",
              description: "Clear explanations for all cookie usage"
            },
            {
              title: "Privacy First",
              description: "Your data is always protected"
            }
          ].map((principle, index) => (
            <div key={index} className="rounded-[1.5rem] border border-[rgba(64,138,113,0.18)] bg-[rgba(236,252,244,0.9)] p-6 text-center">
              <div className="rounded-full bg-[#b0e4cc] p-3 mx-auto mb-3 w-fit">
                <Bookmark className="h-5 w-5 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">{principle.title}</h3>
              <p className="text-sm text-[rgb(55,85,76)]">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Cookie Categories */}
        <div className="space-y-8 mb-16">
          {cookieCategories.map((category, index) => (
            <div key={index} className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 shadow-[0_26px_70px_rgba(9,20,19,0.08)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-full bg-[#b0e4cc] p-3">
                  <category.icon className="h-6 w-6 text-[#091413]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-[#091413] mb-2">{category.title}</h2>
                  <p className="text-[rgb(55,85,76)]">{category.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#408a71] mt-0.5 flex-shrink-0" />
                    <span className="text-[#091413]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cookie Management */}
        <div className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 shadow-[0_26px_70px_rgba(9,20,19,0.08)]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#091413] mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-[rgb(55,85,76)] max-w-2xl mx-auto">
              You have full control over which cookies we use. Adjust your preferences anytime through your browser settings 
              or our cookie management tools.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <Settings className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Cookie Settings</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Manage all cookie preferences</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Manage Settings
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <Shield className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Privacy Controls</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Control data sharing and tracking</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Privacy Dashboard
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <Eye className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Cookie Consent</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Review and update consent choices</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Update Consent
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
