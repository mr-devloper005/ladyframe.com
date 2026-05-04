import { Code, Shield, CheckCircle, Globe, ArrowRight, Bookmark, FileText, Package, Zap } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const licenseCategories = [
  {
    icon: Package,
    title: "Core Framework",
    description: "Essential technologies that power our curation platform.",
    licenses: [
      {
        name: "Next.js",
        version: "14.x",
        type: "MIT License",
        description: "React framework for production-grade web applications",
        url: "https://github.com/vercel/next.js"
      },
      {
        name: "React",
        version: "18.x",
        type: "MIT License", 
        description: "JavaScript library for building user interfaces",
        url: "https://github.com/facebook/react"
      },
      {
        name: "TypeScript",
        version: "5.x",
        type: "Apache License 2.0",
        description: "Typed superset of JavaScript for better development",
        url: "https://github.com/microsoft/TypeScript"
      }
    ]
  },
  {
    icon: FileText,
    title: "Styling & UI",
    description: "Design systems and component libraries for beautiful interfaces.",
    licenses: [
      {
        name: "Tailwind CSS",
        version: "3.x",
        type: "MIT License",
        description: "Utility-first CSS framework for rapid UI development",
        url: "https://github.com/tailwindlabs/tailwindcss"
      },
      {
        name: "Framer Motion",
        version: "10.x",
        type: "MIT License",
        description: "Production-ready motion library for React",
        url: "https://github.com/framer/motion"
      },
      {
        name: "Lucide Icons",
        version: "0.x",
        type: "MIT License",
        description: "Beautiful & consistent icon library",
        url: "https://github.com/lucide-icons/lucide"
      }
    ]
  },
  {
    icon: Shield,
    title: "Infrastructure & Tools",
    description: "Services and tools that support our operations.",
    licenses: [
      {
        name: "Vercel",
        version: "Latest",
        type: "Commercial Service",
        description: "Deployment platform for modern web applications",
        url: "https://vercel.com"
      },
      {
        name: "GitHub Actions",
        version: "Latest",
        type: "MIT License",
        description: "CI/CD platform for automated workflows",
        url: "https://github.com/features/actions"
      },
      {
        name: "Node.js",
        version: "18.x",
        type: "MIT License",
        description: "JavaScript runtime for server-side applications",
        url: "https://github.com/nodejs/node"
      }
    ]
  }
]

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ecfdf5_0%,#f6fffb_55%,#eefaf4_100%)] text-[#091413]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(176,228,204,0.35)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#285a48] mb-4">
            <Code className="h-3.5 w-3.5 text-[#b0e4cc]" />
            Open Source Licenses
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#091413] sm:text-5xl lg:text-[3.15rem] mb-6">
            Built with transparency and respect
          </h1>
          <p className="max-w-3xl mx-auto text-base leading-relaxed text-[rgb(55,85,76)] sm:text-[17px]">
            {SITE_CONFIG.name} is built on open source technologies. We believe in transparency and giving credit 
            to the amazing developers who make our platform possible.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#285a48]">
            <CheckCircle className="h-4 w-4" />
            Last updated: May 4, 2026
          </div>
        </div>

        {/* License Principles */}
        <div className="grid gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Open Source",
              description: "All core technologies are open source"
            },
            {
              title: "Permissive Licenses",
              description: "MIT and Apache 2.0 for maximum compatibility"
            },
            {
              title: "Full Attribution",
              description: "We credit all original creators and contributors"
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

        {/* License Categories */}
        <div className="space-y-8 mb-16">
          {licenseCategories.map((category, index) => (
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
              
              <div className="grid gap-4">
                {category.licenses.map((license, licenseIndex) => (
                  <div key={licenseIndex} className="group rounded-[1.5rem] border border-[rgba(64,138,113,0.18)] bg-[rgba(236,252,244,0.9)] p-5 transition-all duration-300 hover:border-[rgba(64,138,113,0.35)] hover:shadow-md">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#091413] mb-1">{license.name}</h3>
                        <p className="text-xs text-[#408a71] mb-1">{license.version} • {license.type}</p>
                        <p className="text-sm text-[rgb(55,85,76)]">{license.description}</p>
                      </div>
                      <Zap className="h-4 w-4 text-[#408a71] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <a 
                      href={license.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-xs font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors group-hover:bg-[#408a71] group-hover:text-white"
                    >
                      View License
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 shadow-[0_26px_70px_rgba(9,20,19,0.08)]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#091413] mb-4">Questions About Our Licenses?</h2>
            <p className="text-[rgb(55,85,76)] max-w-2xl mx-auto">
              If you have questions about our open source usage or license compliance, our team is here to help.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <Globe className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">License Compliance</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Review our license usage guidelines</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                View Guidelines
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <Shield className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Legal Review</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Request legal review of license usage</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Contact Legal
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <Code className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Technical Support</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Get help with integration questions</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Contact Support
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
