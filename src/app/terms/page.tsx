import { Shield, User, FileText, AlertTriangle, CheckCircle, Clock, ArrowRight, Bookmark, Gavel, Users, Lock } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const termsSections = [
  {
    icon: User,
    title: "Account Responsibilities",
    description: "Your account is your gateway to curated content discovery.",
    items: [
      "Create and maintain one account per person",
      "Keep your login credentials secure and private",
      "You're responsible for all activity under your account",
      "Notify us immediately of unauthorized access",
      "Provide accurate information when registering"
    ]
  },
  {
    icon: FileText,
    title: "Content & Intellectual Property",
    description: "You own your content, and we help you share it with the world.",
    items: [
      "You retain all rights to content you create and share",
      "Grant us a license to host and display your content",
      "Content must be original or properly attributed",
      "Respect copyright and intellectual property rights",
      "Remove content when requested by rights holders"
    ]
  },
  {
    icon: Users,
    title: "Community Guidelines",
    description: "Help us maintain a safe, respectful environment for all curators.",
    items: [
      "Be respectful and constructive in all interactions",
      "No harassment, hate speech, or discriminatory content",
      "Don't spam or engage in deceptive practices",
      "Respect privacy and personal boundaries",
      "Help others discover valuable content"
    ]
  },
  {
    icon: Shield,
    title: "Privacy & Data Protection",
    description: "Your privacy matters, and we protect your data accordingly.",
    items: [
      "We collect only necessary data for service operation",
      "Your personal information is never sold to third parties",
      "You can access, update, or delete your data anytime",
      "We use industry-standard security measures",
      "Compliance with applicable privacy laws"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Prohibited Activities",
    description: "Certain activities are not allowed on our platform.",
    items: [
      "No illegal or harmful content",
      "No malware, viruses, or malicious code",
      "No attempts to compromise system security",
      "No impersonation or false identity",
      "No commercial spam or unauthorized advertising"
    ]
  },
  {
    icon: Gavel,
    title: "Service Availability & Termination",
    description: "Understanding our service commitments and your rights.",
    items: [
      "Service provided 'as is' without warranties",
      "We may suspend accounts for violations",
      "You can terminate your account anytime",
      "We'll provide reasonable notice for major changes",
      "Some features may require paid subscriptions"
    ]
  }
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ecfdf5_0%,#f6fffb_55%,#eefaf4_100%)] text-[#091413]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(176,228,204,0.35)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#285a48] mb-4">
            <Gavel className="h-3.5 w-3.5 text-[#b0e4cc]" />
            Terms of Service
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#091413] sm:text-5xl lg:text-[3.15rem] mb-6">
            Our agreement with you
          </h1>
          <p className="max-w-3xl mx-auto text-base leading-relaxed text-[rgb(55,85,76)] sm:text-[17px]">
            These terms govern your use of {SITE_CONFIG.name}. By using our service, you agree to these guidelines 
            that help us maintain a safe, respectful, and valuable curation platform for everyone.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#285a48]">
            <CheckCircle className="h-4 w-4" />
            Last updated: May 4, 2026
          </div>
        </div>

        {/* Key Principles */}
        <div className="grid gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Respect & Safety",
              description: "Create a welcoming environment for all users"
            },
            {
              title: "Content Ownership",
              description: "You always own what you create and share"
            },
            {
              title: "Fair Use",
              description: "Reasonable terms that protect everyone"
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

        {/* Detailed Terms Sections */}
        <div className="space-y-8 mb-16">
          {termsSections.map((section, index) => (
            <div key={index} className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 shadow-[0_26px_70px_rgba(9,20,19,0.08)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-full bg-[#b0e4cc] p-3">
                  <section.icon className="h-6 w-6 text-[#091413]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-[#091413] mb-2">{section.title}</h2>
                  <p className="text-[rgb(55,85,76)]">{section.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#408a71] mt-0.5 flex-shrink-0" />
                    <span className="text-[#091413]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Legal */}
        <div className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 shadow-[0_26px_70px_rgba(9,20,19,0.08)]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#091413] mb-4">Questions about our terms?</h2>
            <p className="text-[rgb(55,85,76)] max-w-2xl mx-auto">
              If you have questions about these terms or need clarification on any point, our legal team is here to help.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <FileText className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Legal Review</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Request legal review of specific terms</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Request Review
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <AlertTriangle className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Report Violations</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Report terms of service violations</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Report Issue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <Lock className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Privacy Concerns</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Questions about data and privacy</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Contact Privacy
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
