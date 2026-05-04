'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, User, FileText, Building2, LayoutGrid, Tag, Image as ImageIcon, ChevronRight, Sparkles, MapPin, Plus, Bookmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: Bookmark,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

const variantClasses = {
  'compact-bar': {
    shell: 'border-b border-slate-200/80 bg-white/88 text-slate-950 backdrop-blur-xl',
    logo: 'rounded-2xl border border-slate-200 bg-white shadow-sm',
    active: 'bg-slate-950 text-white',
    idle: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
    cta: 'rounded-full bg-slate-950 text-white hover:bg-slate-800',
    mobile: 'border-t border-slate-200/70 bg-white/95',
  },
  'editorial-bar': {
    shell: 'border-b border-[#d7c4b3] bg-[#fff7ee]/90 text-[#2f1d16] backdrop-blur-xl',
    logo: 'rounded-lg border border-[#dbc6b6] bg-white shadow-sm',
    active: 'bg-[#2f1d16] text-[#fff4e4]',
    idle: 'text-[#72594a] hover:bg-[#f2e5d4] hover:text-[#2f1d16]',
    cta: 'rounded-full bg-[#2f1d16] text-[#fff4e4] hover:bg-[#452920]',
    mobile: 'border-t border-[#dbc6b6] bg-[#fff7ee]',
  },
  'floating-bar': {
    shell: 'border-b border-transparent bg-transparent text-white',
    logo: 'rounded-[1.35rem] border border-white/12 bg-white/8 shadow-[0_16px_48px_rgba(15,23,42,0.22)] backdrop-blur',
    active: 'bg-[#8df0c8] text-[#07111f]',
    idle: 'text-slate-200 hover:bg-white/10 hover:text-white',
    cta: 'rounded-full bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
    mobile: 'border-t border-white/10 bg-[#09101d]/96',
  },
  'utility-bar': {
    shell: 'border-b border-[#d7deca] bg-[#f4f6ef]/94 text-[#1f2617] backdrop-blur-xl',
    logo: 'rounded-xl border border-[#d7deca] bg-white shadow-sm',
    active: 'bg-[#1f2617] text-[#edf5dc]',
    idle: 'text-[#56604b] hover:bg-[#e7edd9] hover:text-[#1f2617]',
    cta: 'rounded-lg bg-[#1f2617] text-[#edf5dc] hover:bg-[#2f3a24]',
    mobile: 'border-t border-[#d7deca] bg-[#f4f6ef]',
  },
  'folio-nav': {
    shell: 'border-b border-slate-200/80 bg-white/88 text-slate-950 backdrop-blur-xl',
    logo: 'rounded-2xl border border-slate-200 bg-white shadow-sm',
    active: 'bg-slate-950 text-white',
    idle: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
    cta: 'rounded-full bg-slate-950 text-white hover:bg-slate-800',
    mobile: 'border-t border-slate-200/70 bg-white/95',
  },
} as const

const directoryPalette = {
  'directory-clean': {
    shell: 'border-b border-slate-200 bg-white/94 text-slate-950 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl',
    logo: 'rounded-2xl border border-slate-200 bg-slate-50',
    nav: 'text-slate-600 hover:text-slate-950',
    search: 'border border-slate-200 bg-slate-50 text-slate-600',
    cta: 'bg-slate-950 text-white hover:bg-slate-800',
    post: 'border border-slate-200 bg-white text-slate-950 hover:bg-slate-50',
    mobile: 'border-t border-slate-200 bg-white',
  },
  'market-utility': {
    shell: 'border-b border-[#d7deca] bg-[#f4f6ef]/96 text-[#1f2617] shadow-[0_1px_0_rgba(64,76,34,0.06)] backdrop-blur-xl',
    logo: 'rounded-xl border border-[#d7deca] bg-white',
    nav: 'text-[#56604b] hover:text-[#1f2617]',
    search: 'border border-[#d7deca] bg-white text-[#56604b]',
    cta: 'bg-[#1f2617] text-[#edf5dc] hover:bg-[#2f3a24]',
    post: 'border border-[#d7deca] bg-white text-[#1f2617] hover:bg-[#eef2e4]',
    mobile: 'border-t border-[#d7deca] bg-[#f4f6ef]',
  },
} as const

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const { recipe } = getFactoryState()

  const navigation = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'profile'), [])
  const primaryNavigation = navigation.slice(0, 5)
  const mobileNavigation = navigation.map((task) => ({
    name: task.label,
    href: task.route,
    icon: taskIcons[task.key] || LayoutGrid,
  }))
  const primaryTask = SITE_CONFIG.tasks.find((task) => task.key === recipe.primaryTask && task.enabled) || primaryNavigation[0]
  const isDirectoryProduct = recipe.homeLayout === 'listing-home' || recipe.homeLayout === 'classified-home'

  if (isDirectoryProduct) {
    const palette = directoryPalette[(recipe.brandPack === 'market-utility' ? 'market-utility' : 'directory-clean') as keyof typeof directoryPalette]

    return (
      <header className={cn('sticky top-0 z-50 w-full', palette.shell)}>
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <div className={cn('relative flex h-12 w-12 items-center justify-center overflow-hidden p-0', palette.logo)}>
                <img src="/favicon.png" alt={`${SITE_CONFIG.name} logo`} width={48} height={48} className="h-full w-full origin-center object-contain scale-[1.12]" />
              </div>
              <div className="min-w-0 hidden sm:block">
                <span className="block truncate text-xl font-semibold">{SITE_CONFIG.name}</span>
                <span className="block text-[10px] uppercase tracking-[0.24em] opacity-60">{siteContent.navbar.tagline}</span>
              </div>
            </Link>

            <div className="hidden items-center gap-5 xl:flex">
              {primaryNavigation.slice(0, 4).map((task) => {
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('text-sm font-semibold transition-colors', isActive ? 'text-foreground' : palette.nav)}>
                    {task.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
            <div className={cn('flex w-full max-w-xl items-center gap-3 rounded-full px-4 py-3', palette.search)}>
              <Search className="h-4 w-4" />
              <span className="text-sm">Search listings, services, and neighborhoods on {SITE_CONFIG.name}</span>
              <div className="ml-auto hidden items-center gap-1 text-xs opacity-75 md:flex">
                <MapPin className="h-3.5 w-3.5" />
                Directory mode
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {primaryTask ? (
              <Link href={primaryTask.route} className="hidden items-center gap-2 rounded-full border border-current/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] opacity-75 md:inline-flex">
                <Sparkles className="h-3.5 w-3.5" />
                {primaryTask.label}
              </Link>
            ) : null}

            {isAuthenticated ? (
              <NavbarAuthControls />
            ) : (
              <div className="hidden items-center gap-2 md:flex">
                <Button variant="ghost" size="sm" asChild className="rounded-full px-4">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button size="sm" asChild className={cn('rounded-full', palette.cta)}>
                  <Link href="/register">
                    <Plus className="mr-1 h-4 w-4" />
                    Add Listing
                  </Link>
                </Button>
              </div>
            )}

            <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className={palette.mobile}>
            <div className="space-y-2 px-4 py-4">
              <div className={cn('mb-3 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium', palette.search)}>
                <Search className="h-4 w-4" />
                Search the LadyFrame directory
              </div>
              {mobileNavigation.map((item) => {
                const isActive = pathname.startsWith(item.href)
                return (
                  <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? 'bg-foreground text-background' : palette.post)}>
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
      )}
    </header>
    )
  }

  if (recipe.navbar === 'folio-nav') {
    const folioNavKeys: TaskKey[] = ['sbm']
    const folioNavTasks = folioNavKeys
      .map((key) => SITE_CONFIG.tasks.find((task) => task.key === key && task.enabled))
      .filter((task): task is NonNullable<typeof task> => Boolean(task))
    const rank = (key: string) => (key === 'sbm' ? 0 : key === 'profile' ? 1 : 9)
    const sortedFolioTasks = [...folioNavTasks].sort((a, b) => rank(a.key) - rank(b.key))

    const pillBase =
      'inline-flex h-9 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3.5 text-xs font-semibold transition duration-200 sm:h-10 sm:gap-2 sm:px-4 sm:text-sm'
    const pillActive = 'bg-[#b0e4cc] text-[#091413] shadow-[inset_0_0_0_1px_rgba(9,20,19,0.06)]'
    const pillIdle = 'border border-[#408a71]/40 bg-[#285a48]/35 text-[#dff9ec] hover:border-[#b0e4cc]/50 hover:bg-[#285a48]/65'

    return (
      <header className="sticky top-0 z-50 w-full border-b border-[rgba(176,228,204,0.14)] bg-[rgb(9,20,19)]/94 text-[#e8fff4] shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        {/* Main row: brand | SBM + Profile | search + auth */}
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-4 lg:gap-y-2 lg:px-8 lg:py-5">
          <div className="flex items-center lg:col-span-4">
            <Link href="/" className="group flex min-w-0 items-center gap-3.5 sm:gap-4">
              <div className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[#408a71]/55 bg-white shadow-[0_4px_22px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-black/15 sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20 lg:rounded-2xl">
                <img
                  src="/favicon.png"
                  alt={`${SITE_CONFIG.name} logo`}
                  width={80}
                  height={80}
                  className="h-full w-full origin-center object-contain transition-transform duration-300 ease-out scale-[1.18] group-hover:scale-[1.24]"
                />
              </div>
              <div className="min-w-0 leading-[1.05]">
                <span className="block truncate text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl lg:tracking-tight">
                  {SITE_CONFIG.name}
                </span>
                {siteContent.navbar.tagline ? (
                  <span className="mt-1 block truncate text-[11px] font-medium uppercase tracking-[0.2em] text-[#b0e4cc]/75 sm:text-xs sm:tracking-[0.24em]">
                    {siteContent.navbar.tagline}
                  </span>
                ) : null}
              </div>
            </Link>
          </div>

          <div className="mt-3 min-w-0 sm:mt-4 lg:col-span-4 lg:mt-0">
            <div className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-1.5 rounded-2xl border border-white/[0.08] bg-[rgba(5,18,15,0.55)] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:gap-2 sm:p-2.5">
              {sortedFolioTasks.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn(pillBase, isActive ? pillActive : pillIdle)}>
                    <Icon className="h-3.5 w-3.5 shrink-0 opacity-90 sm:h-4 sm:w-4" />
                    {task.key === 'profile' ? 'Social profile' : task.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 lg:col-span-4 lg:mt-0 lg:justify-self-end">
            <Link
              href="/search"
              className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-full border border-[#408a71]/35 bg-[#0f2320] px-4 text-left text-sm text-[#b0e4cc]/90 transition hover:border-[#b0e4cc]/45 hover:bg-[#112b27] sm:min-w-0 lg:max-w-[280px]"
            >
              <Search className="h-4 w-4 shrink-0 text-[#b0e4cc]" />
              <span className="min-w-0 truncate">{siteContent.hero.searchPlaceholder}</span>
            </Link>
            <div className="flex shrink-0 items-center justify-between gap-2 sm:justify-end">
              {isAuthenticated ? (
                <NavbarAuthControls />
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild className="h-10 rounded-full px-4 text-[#dff9ec] hover:bg-white/10 hover:text-white">
                    <Link href="/login">Sign in</Link>
                  </Button>
                  <Button size="sm" asChild className="h-10 rounded-full bg-[#b0e4cc] px-4 text-[#091413] hover:bg-[#9fd6b8]">
                    <Link href="/register">Join</Link>
                  </Button>
                </>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 shrink-0 rounded-full text-[#dff9ec] hover:bg-white/10 lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </nav>

        {isMobileMenuOpen ? (
          <div className="border-t border-white/10 bg-[#0a1816] lg:hidden">
            <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
              <Link
                href="/search"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-11 items-center gap-3 rounded-2xl border border-[#408a71]/35 bg-[#0f2320] px-4 text-sm font-semibold text-[#dff9ec]"
              >
                <Search className="h-4 w-4 shrink-0" />
                Search the desk
              </Link>
              {sortedFolioTasks.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link
                    key={task.key}
                    href={task.route}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex h-11 items-center gap-3 rounded-2xl px-4 text-sm font-semibold transition',
                      isActive ? 'bg-[#b0e4cc] text-[#091413]' : 'border border-white/8 bg-[#102220] text-[#dff9ec] hover:border-[#408a71]/45',
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    {task.key === 'profile' ? 'Social profile' : task.label}
                  </Link>
                )
              })}
            </div>
          </div>
        ) : null}
      </header>
    )
  }

  const style = variantClasses[recipe.navbar]
  const isFloating = recipe.navbar === 'floating-bar'
  const isEditorial = recipe.navbar === 'editorial-bar'
  const isUtility = recipe.navbar === 'utility-bar'

  return (
    <header className={cn('sticky top-0 z-50 w-full', style.shell)}>
      <nav className={cn('mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8', isFloating ? 'h-24 pt-4' : 'h-20')}>
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-7">
          <Link href="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap pr-2">
            <div className={cn('relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden p-0', style.logo)}>
              <img src="/favicon.png" alt={`${SITE_CONFIG.name} logo`} width={48} height={48} className="h-full w-full origin-center object-contain scale-[1.12]" />
            </div>
            <div className="min-w-0 hidden sm:block">
              <span className="block truncate text-xl font-semibold">{SITE_CONFIG.name}</span>
              <span className="hidden text-[10px] uppercase tracking-[0.28em] opacity-70 sm:block">{siteContent.navbar.tagline}</span>
            </div>
          </Link>

          {isEditorial ? (
            <div className="hidden min-w-0 flex-1 items-center gap-4 xl:flex">
              <div className="h-px flex-1 bg-[#d8c8bb]" />
              {primaryNavigation.map((task) => {
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('text-sm font-semibold uppercase tracking-[0.18em] transition-colors', isActive ? 'text-[#2f1d16]' : 'text-[#7b6254] hover:text-[#2f1d16]')}>
                    {task.label}
                  </Link>
                )
              })}
              <div className="h-px flex-1 bg-[#d8c8bb]" />
            </div>
          ) : isFloating ? (
            <div className="hidden min-w-0 flex-1 items-center gap-2 xl:flex">
              {primaryNavigation.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                    <Icon className="h-4 w-4" />
                    <span>{task.label}</span>
                  </Link>
                )
              })}
            </div>
          ) : isUtility ? (
            <div className="hidden min-w-0 flex-1 items-center gap-2 xl:flex">
              {primaryNavigation.map((task) => {
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('rounded-lg px-3 py-2 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                    {task.label}
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="hidden min-w-0 flex-1 items-center gap-1 overflow-hidden xl:flex">
              {primaryNavigation.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname.startsWith(task.route)
                return (
                  <Link key={task.key} href={task.route} className={cn('flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap', isActive ? style.active : style.idle)}>
                    <Icon className="h-4 w-4" />
                    <span>{task.label}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {primaryTask && (recipe.navbar === 'utility-bar' || recipe.navbar === 'floating-bar') ? (
            <Link href={primaryTask.route} className="hidden items-center gap-2 rounded-full border border-current/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] opacity-80 md:inline-flex">
              <Sparkles className="h-3.5 w-3.5" />
              {primaryTask.label}
            </Link>
          ) : null}

          <Button variant="ghost" size="icon" asChild className="hidden rounded-full md:flex">
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" asChild className="rounded-full px-4">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild className={style.cta}>
                <Link href="/register">{isEditorial ? 'Subscribe' : isUtility ? 'Post Now' : 'Get Started'}</Link>
              </Button>
            </div>
          )}

          <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isFloating && primaryTask ? (
        <div className="mx-auto hidden max-w-7xl px-4 pb-3 sm:px-6 lg:block lg:px-8">
          <Link href={primaryTask.route} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 backdrop-blur hover:bg-white/12">
            Featured surface
            <span>{primaryTask.label}</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : null}

      {isMobileMenuOpen && (
        <div className={style.mobile}>
          <div className="space-y-2 px-4 py-4">
            <Link href="/search" onClick={() => setIsMobileMenuOpen(false)} className="mb-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">
              <Search className="h-4 w-4" />
              Search the site
            </Link>
            {mobileNavigation.map((item) => {
              const isActive = pathname.startsWith(item.href)
              return (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
