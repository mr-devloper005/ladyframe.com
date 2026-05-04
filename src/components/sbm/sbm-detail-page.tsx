'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Search, User, Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { SitePost } from '@/lib/site-connector'
import { cn } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPostUrl, fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG, getTaskConfig } from '@/lib/site-config'
import { SbmPostCard } from '@/components/sbm/sbm-post-card'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import type { TaskKey } from '@/lib/site-config'

interface SbmDetailPageProps {
  task: TaskKey
  slug: string
}

const getContent = (post: SitePost) => {
  const content = post.content && typeof post.content === 'object' ? post.content : {};
  return content as any;
};

const getImageUrls = (post: SitePost) => {
  const media = Array.isArray(post.media) ? post.media : [];
  const mediaImages = media
    .map((item) => item?.url)
    .filter((url): url is string => typeof url === 'string' && (url.startsWith("/") || /^https?:\/\//i.test(url)));
  const content = getContent(post);
  const contentImages = Array.isArray(content.images)
    ? (content.images as any[]).filter((url): url is string => typeof url === 'string' && (url.startsWith("/") || /^https?:\/\//i.test(url)))
    : [];
  const merged = [...mediaImages, ...contentImages];
  if (merged.length) return merged;
  return ["/placeholder.svg?height=900&width=1400"];
};

const getPostUrl = (post: SitePost): string => {
  const content = getContent(post);
  return content.url || post.summary || '#';
};

export function SbmDetailPage({ task, slug }: SbmDetailPageProps) {
  const [post, setPost] = useState<SitePost | null>(null);
  const [related, setRelated] = useState<SitePost[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadData = async () => {
      try {
        const postData = await fetchTaskPostBySlug(task, slug);
        if (postData) {
          setPost(postData);
          
          const relatedPosts = await fetchTaskPosts(task, 6);
          const filtered = relatedPosts
            .filter((item) => item.slug !== postData.slug)
            .slice(0, 3);
          setRelated(filtered);
        }
      } catch (error) {
        console.warn("Failed to load post detail", error);
      }
    };
    loadData();
  }, [task, slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const content = getContent(post);
  const taskConfig = getTaskConfig(task);
  const category = content.category || post.tags?.[0] || taskConfig?.label || task;
  const description = content.description || post.summary || "Details coming soon.";
  const descriptionHtml = formatRichHtml(description, "Details coming soon.");
  const images = getImageUrls(post);
  const postTags = Array.isArray(post.tags) ? post.tags.filter((tag) => typeof tag === "string") : [];
  const postUrl = getPostUrl(post);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-lg font-semibold text-foreground">
                World Famous HawaiiLLC
              </div>
            </div>
            <Button variant="ghost" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-6">
            <Link
              href={taskConfig?.route || "/sbm"}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to bookmarks
            </Link>

            {/* Main Card */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <Badge className="bg-background/90 text-foreground">
                    {category}
                  </Badge>
                </div>

                
                {/* Title */}
                <h1 className="mb-4 text-3xl font-bold text-foreground">
                  {post.title}
                </h1>

                {/* Description */}
                <div className="mb-6 text-base leading-relaxed text-muted-foreground">
                  <RichContent html={descriptionHtml} className="prose prose-sm max-w-none" />
                </div>

                {/* Tags */}
                {postTags.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {postTags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                              </CardContent>
            </Card>
          </div>

                  </div>

        {/* Related Content */}
        {related.length > 0 && (
          <section className="mt-12">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                More in {category}
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <SbmPostCard
                  key={item.id}
                  post={item}
                  href={buildPostUrl(task, item.slug)}
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
