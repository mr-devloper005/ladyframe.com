import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: '',
  },
  footer: {
    tagline: 'CONNECT • SHARE • GROW',
  },
  hero: {
    badge: 'Bookmarks · profiles · calm flow',
    /** Single-line hero for the folio curation home (`CurationHome`). */
    headline: 'Save what you return to—and keep trust visible beside every scan.',
    /** Two-line hero for alternate home layouts (`HeroSection`). */
    title: ['Save what you return to', 'and keep trust visible beside every scan.'],
    description:
      'Curate links and resources worth reopening. Public profiles sit next to your shelf so context and credibility stay in view—built for quick scanning, not endless feeds.',
    primaryCta: {
      label: 'Browse bookmarks',
      href: '/sbm',
    },
    searchPlaceholder: 'Search bookmarks and profiles',
    focusLabel: 'Focus',
  },
  home: {
    metadata: {
      title: 'Curated links, bookmarks, and trusted public profiles',
      description:
        'Curate links and resources you come back to. Public profiles sit beside your shelf so trust and context stay visible—built for scanning, not noise.',
      openGraphTitle: 'Connect · share · grow—with saves and profiles in one place',
      openGraphDescription:
        'Save links you trust, organize collections, and open public profiles when you need to know who is behind the work—without a crowded social feed.',
      keywords: [
        'social bookmarking',
        'curated links',
        'public profiles',
        'resource library',
        'content discovery',
        'research desk',
      ],
    },
    introBadge: 'How it works',
    introTitle: 'Links first—identity and trust right beside them.',
    introParagraphs: [
      'The home lane favors social bookmarking: tight rows, clear categories, and collections so you can resurface saves in seconds.',
      'Profiles sit alongside as trust signals—photo, bio, and continuity—so you know who saved, wrote, or maintains what you are opening.',
      'Articles, listings, classifieds, images, and PDFs stay available from search, footer routes, and direct URLs whenever you need more than a link.',
    ],
    sideBadge: 'What you get',
    sidePoints: [
      'Scan the shelf first, glance profiles second—same screen, less guesswork.',
      'Bookmarks and profiles stay up front in navigation; everything else stays one search away.',
      'Light motion and clear contrast so pages stay fast and easy to revisit.',
    ],
    primaryLink: {
      label: 'Open bookmarks',
      href: '/sbm',
    },
    secondaryLink: {
      label: 'Meet profiles',
      href: '/profile',
    },
  },
  cta: {
    badge: 'Keep exploring',
    title: 'From a saved link to the profile behind it—still on one desk.',
    description:
      'Collect references on the bookmark shelf, then open public profiles when you want continuity, credibility, and a reason to come back.',
    primaryCta: {
      label: 'Start free',
      href: '/register',
    },
    secondaryCta: {
      label: 'Talk with us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and briefings',
    description: 'Read essays, guides, and long-form notes that pair with your saved links.',
  },
  listing: {
    title: 'Listings and structured pages',
    description: 'Scan businesses, services, and structured surfaces with directory clarity.',
  },
  classified: {
    title: 'Classifieds and timely posts',
    description: 'Browse offers, notices, and short-lived opportunities alongside curated saves.',
  },
  image: {
    title: 'Visual posts',
    description: 'Explore image-led stories and galleries when visuals carry the narrative.',
  },
  profile: {
    title: 'Public profiles',
    description: 'Discover people, brands, and teams behind the bookmarks and posts you follow.',
  },
  sbm: {
    title: 'Social bookmarks',
    description: 'Scan curated links, saved tools, and reference shelves tuned for quick retrieval.',
  },
  pdf: {
    title: 'PDF library',
    description: 'Open reports, decks, and downloadable files linked across the desk.',
  },
}

export const taskIntroCopy: Record<TaskKey, { title: string; paragraphs: string[] }> = {
  listing: {
    title: 'Listings as supporting evidence',
    paragraphs: [
      'Directory-style listings stay available when a bookmark needs a physical counterpart—services, venues, and structured metadata.',
      'This lane uses a wider, trust-forward grid separate from the bookmark shelf so scanning rhythms stay distinct.',
      'Filters keep categories tight; everything here still routes the same as the base platform.',
    ],
  },
  article: {
    title: 'Editorial lane for deeper reading',
    paragraphs: [
      'Articles open with a journal-style masthead—taller type, slower spacing, and a sidebar note block unlike the SBM grid.',
      'Use this lane when a saved link deserves narrative context, commentary, or step-by-step guidance.',
      'Category filters mirror the rest of the site; only the presentation shifts toward long-form comfort.',
    ],
  },
  classified: {
    title: 'Bulletin rhythm for fast notices',
    paragraphs: [
      'Classifieds lean into a compact board: shorter copy blocks, urgency chips, and a two-tone marketplace shell.',
      'Pair these posts with bookmarks when you want to track flash deals or local opportunities.',
      'All filters and routes behave exactly like the shared base—only the visual cadence changes.',
    ],
  },
  image: {
    title: 'Nocturne gallery for visual-first posts',
    paragraphs: [
      'Images adopt a cinematic dark shell with oversized tiles so photography and screenshots breathe.',
      'This is intentionally distant from the mint-on-ink bookmark desk—your eyes reset when you enter the gallery.',
      'Hover lifts stay gentle to keep Lighthouse-friendly paint costs low.',
    ],
  },
  profile: {
    title: 'Profiles as trust anchors',
    paragraphs: [
      'Profiles emphasize identity, continuity, and credibility cues before the stream of posts continues below.',
      'The header uses a split composition: portrait panel, stat chips, and mint dividers that echo the navbar language.',
      'Bookmarks and articles remain one click away when you need to see what a person saves or publishes.',
    ],
  },
  sbm: {
    title: 'Bookmark shelf · primary desk',
    paragraphs: [
      'This is the fastest-scanning surface on the site: category rails, tight rows, and mint highlights on deep emerald.',
      'Collections behave like a research library—not a social timeline—so you can compare titles quickly.',
      'Profiles, articles, and downloads remain accessible whenever a link needs more context.',
    ],
  },
  pdf: {
    title: 'Document vault',
    paragraphs: [
      'PDFs sit inside a parchment-toned shell with vertical rhythm tuned for filenames, file types, and download clarity.',
      'Pair documents with bookmarks when you want long-form references beside quick links.',
      'Nothing about storage or routing changes—this is presentation only.',
    ],
  },
  social: {
    title: 'Community signals',
    paragraphs: [
      'Short updates stay lightweight entry points into the wider desk.',
      'They share components with bookmarks but keep softer contrast so they do not compete with the primary shelf.',
      'Jump into profiles or articles whenever a thread needs more depth.',
    ],
  },
  comment: {
    title: 'Comments beneath stories',
    paragraphs: [
      'Comments stay tethered to articles for contextual discussion.',
      'Visual styling mirrors editorial notes with mint underline accents.',
      'Use them as supporting detail, then return to bookmarks or profiles.',
    ],
  },
  org: {
    title: 'Organizations and teams',
    paragraphs: [
      'Organization pages provide structured identities for teams, studios, and agencies.',
      'Layout parallels profiles but widens metadata for departments and collective authorship.',
      'Bookmarks help visitors see what an org saves publicly.',
    ],
  },
}
