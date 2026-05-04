import { Mail, MessageCircle, Phone, MapPin, Clock, Shield, Users, HelpCircle, ArrowRight, Bookmark, Star } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const contactChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Get instant help from our support team during business hours",
      action: "Start Chat",
      available: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed inquiries and receive comprehensive responses",
      action: "Send Email",
      available: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team for urgent matters",
      action: "Call Us",
      available: "Mon-Fri, 10AM-5PM EST"
    }
  ]

  const supportAreas = [
    {
      icon: Bookmark,
      title: "Account & Curation",
      items: [
        "Account setup and profile management",
        "Bookmark collection organization",
        "Privacy and security settings",
        "Data export and backup"
      ]
    },
    {
      icon: Users,
      title: "Community & Features",
      items: [
        "Community guidelines and moderation",
        "Feature requests and feedback",
        "Collaboration opportunities",
        "API access and integration"
      ]
    },
    {
      icon: Shield,
      title: "Technical Support",
      items: [
        "Bug reports and troubleshooting",
        "Performance and accessibility",
        "Mobile app support",
        "Browser compatibility"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ecfdf5_0%,#f6fffb_55%,#eefaf4_100%)] text-[#091413]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(176,228,204,0.35)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#285a48] mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-[#b0e4cc]" />
            Get In Touch
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#091413] sm:text-5xl lg:text-[3.15rem] mb-6">
            We're here to help you curate better
          </h1>
          <p className="max-w-3xl mx-auto text-base leading-relaxed text-[rgb(55,85,76)] sm:text-[17px]">
            Whether you need technical support, have questions about features, or want to share feedback, 
            our dedicated team is ready to assist you on your curation journey.
          </p>
        </div>

        {/* Contact Channels */}
        <div className="grid gap-8 mb-16 lg:grid-cols-3">
          {contactChannels.map((channel, index) => (
            <div key={index} className="group">
              <div className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 h-full transition-all duration-300 hover:border-[rgba(64,138,113,0.35)] hover:shadow-[0_26px_70px_rgba(9,20,19,0.12)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-full bg-[#b0e4cc] p-3">
                    <channel.icon className="h-6 w-6 text-[#091413]" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#285a48]">
                    <Clock className="h-3 w-3" />
                    {channel.available}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#091413] mb-2">{channel.title}</h3>
                <p className="text-sm text-[rgb(55,85,76)] mb-4">{channel.description}</p>
                <button className="inline-flex items-center gap-2 rounded-full bg-[#b0e4cc] px-4 py-2 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors">
                  {channel.action}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Support Areas */}
          <div>
            <h2 className="text-2xl font-semibold text-[#091413] mb-6">How We Can Help</h2>
            <div className="space-y-6">
              {supportAreas.map((area, index) => (
                <div key={index} className="rounded-[1.5rem] border border-[rgba(64,138,113,0.18)] bg-[rgba(236,252,244,0.9)] p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#b0e4cc] p-2 mt-1">
                      <area.icon className="h-5 w-5 text-[#091413]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#091413] mb-3">{area.title}</h3>
                      <ul className="space-y-2">
                        {area.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-[rgb(55,85,76)]">
                            <Star className="h-3 w-3 text-[#408a71] mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-[2rem] border border-[rgba(64,138,113,0.22)] bg-[rgba(255,255,255,0.94)] p-8 shadow-[0_26px_70px_rgba(9,20,19,0.08)]">
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(64,138,113,0.35)] bg-[#285a48]/35">
                  <Mail className="h-8 w-8 text-[#b0e4cc]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#091413]">Send Us a Message</h2>
                <p className="mt-2 text-sm text-[rgb(55,85,76)]">
                  Fill out the form below and we'll get back to you soon
                </p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#091413] mb-2">
                    Your Name
                  </label>
                  <input 
                    id="name"
                    className="h-12 w-full rounded-xl border border-[rgba(64,138,113,0.35)] bg-white/90 px-4 text-sm placeholder:text-[rgb(55,85,76)]/60 focus:border-[#408a71] focus:outline-none focus:ring-2 focus:ring-[rgba(176,228,204,0.5)] transition-colors" 
                    placeholder="Enter your full name" 
                    type="text"
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
                    placeholder="your.email@example.com" 
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#091413] mb-2">
                    Subject
                  </label>
                  <select 
                    id="subject"
                    className="h-12 w-full rounded-xl border border-[rgba(64,138,113,0.35)] bg-white/90 px-4 text-sm focus:border-[#408a71] focus:outline-none focus:ring-2 focus:ring-[rgba(176,228,204,0.5)] transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="technical">Technical Support</option>
                    <option value="account">Account Help</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#091413] mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    className="w-full min-h-[120px] rounded-xl border border-[rgba(64,138,113,0.35)] bg-white/90 px-4 py-3 text-sm placeholder:text-[rgb(55,85,76)]/60 focus:border-[#408a71] focus:outline-none focus:ring-2 focus:ring-[rgba(176,228,204,0.5)] transition-colors resize-none" 
                    placeholder="Tell us how we can help you..." 
                    rows={5}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full inline-flex h-12 items-center justify-center rounded-full bg-[#b0e4cc] px-6 text-sm font-semibold text-[#091413] hover:bg-[#9fd6b8] transition-colors"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
