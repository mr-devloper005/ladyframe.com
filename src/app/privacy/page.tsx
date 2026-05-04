import { Shield, Eye, Lock, Database, UserCheck, Clock, ArrowRight, Bookmark, CheckCircle } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const privacySections = [
  {
    icon: Database,
    title: "Information We Collect",
    description: "We only collect what's necessary to provide you with the best curation experience.",
    items: [
      "Account information (name, email, profile details)",
      "Content you create (bookmarks, collections, profiles)",
      "Usage patterns to improve our service",
      "Technical data for security and performance",
      "Communication preferences and support interactions"
    ]
  },
  {
    icon: Eye,
    title: "How We Use Your Data",
    description: "Your information helps us deliver a personalized and secure curation platform.",
    items: [
      "Provide and maintain our curation services",
      "Personalize your experience and recommendations",
      "Communicate with you about your account",
      "Protect against fraud and abuse",
      "Analyze usage to improve our features"
    ]
  },
  {
    icon: Shield,
    title: "Data Protection & Security",
    description: "We implement industry-standard security measures to protect your information.",
    items: [
      "End-to-end encryption for sensitive data",
      "Regular security audits and updates",
      "Limited employee access to user data",
      "Secure data centers with 24/7 monitoring",
      "Compliance with data protection regulations"
    ]
  },
  {
    icon: UserCheck,
    title: "Your Privacy Rights",
    description: "You have full control over your personal information and how it's used.",
    items: [
      "Access and update your personal information",
      "Download your data at any time",
      "Delete your account and associated data",
      "Opt out of non-essential communications",
      "Request data portability to other services"
    ]
  },
  {
    icon: Clock,
    title: "Data Retention",
    description: "We keep your information only as long as necessary for our services.",
    items: [
      "Account data retained while you're a user",
      "Content deleted when you remove it",
      "Backup data for disaster recovery (30 days)",
      "Analytics data anonymized after 24 months",
      "Legal holds when required by law"
    ]
  }
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ecfdf5_0%,#f6fffb_55%,#eefaf4_100%)] text-[#091413]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(176,228,204,0.35)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#285a48] mb-4">
            <Shield className="h-3.5 w-3.5 text-[#b0e4cc]" />
            Privacy Policy
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#091413] sm:text-5xl lg:text-[3.15rem] mb-6">
            Your privacy is our priority
          </h1>
          <p className="max-w-3xl mx-auto text-base leading-relaxed text-[rgb(55,85,76)] sm:text-[17px]">
            At {SITE_CONFIG.name}, we believe in transparency and giving you complete control over your data. 
            This policy explains how we collect, use, and protect your information while you curate your digital world.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#285a48]">
            <CheckCircle className="h-4 w-4" />
            Last updated: May 4, 2026
          </div>
        </div>

        {/* Privacy Principles */}
        <div className="grid gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Minimal Collection",
              description: "We only collect what we absolutely need"
            },
            {
              title: "Full Transparency",
              description: "Clear explanations for all data practices"
            },
            {
              title: "User Control",
              description: "You decide how your data is used"
            },
            {
              title: "Security First",
              description: "Industry-standard protection always"
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

        {/* Detailed Privacy Sections */}
        <div className="space-y-8 mb-16">
          {privacySections.map((section, index) => (
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

        {/* Contact & Actions */}
        <div className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 shadow-[0_26px_70px_rgba(9,20,19,0.08)]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#091413] mb-4">Questions About Your Privacy?</h2>
            <p className="text-[rgb(55,85,76)] max-w-2xl mx-auto">
              Our privacy team is here to help you understand your rights and make informed decisions about your data.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <Lock className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Data Requests</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Access, update, or delete your personal information</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Request Data
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <Shield className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Security Concerns</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Report security issues or privacy concerns</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                Report Issue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-[#b0e4cc] p-4 mx-auto mb-3 w-fit">
                <UserCheck className="h-6 w-6 text-[#091413]" />
              </div>
              <h3 className="font-semibold text-[#091413] mb-2">Privacy Support</h3>
              <p className="text-sm text-[rgb(55,85,76)] mb-3">Get help with privacy settings and controls</p>
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
