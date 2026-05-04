import Link from 'next/link'
import { ArrowUpRight, Tag } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const getContent = (post: SitePost) => {
  const content = post.content && typeof post.content === 'object' ? post.content : {}
  return content as any
}

const getPostUrl = (post: SitePost): string => {
  const content = getContent(post)
  return content.url || post.summary || '#'
}

const stripHtml = (value?: string | null) =>
  (value || '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const getExcerpt = (value?: string | null, maxLength = 140) => {
  const text = stripHtml(value)
  if (!text) return ''
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}…`
}

interface SbmPostCardProps {
  post: SitePost
  href: string
}

export function SbmPostCard({ post, href }: SbmPostCardProps) {
  const content = getContent(post)
  const category = content.category || post.tags?.[0] || 'Bookmark'
  const rawDescription = content.description || post.summary || "Details coming soon."
  const description = getExcerpt(rawDescription, 120)
  const postTags = Array.isArray(post.tags) ? post.tags.filter((tag) => typeof tag === "string") : []

  return (
    <Card className="group h-full border-border bg-card transition-all hover:border-muted-foreground/20">
      <Link href={href} className="block">
        <CardContent className="p-4">
          {/* Category Badge */}
          <div className="mb-3">
            <Badge className="bg-background/90 text-foreground text-xs">
              {category}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="mb-2 font-semibold leading-tight text-foreground line-clamp-2">
            {post.title}
          </h3>

          {/* Description */}
          <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          {postTags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1">
              {postTags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Arrow indicator */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <ArrowUpRight className="h-3 w-3" />
            <span>View details</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
