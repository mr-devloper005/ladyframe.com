import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";

const highlights = [
  { label: "Primary surface", value: "Social bookmarking" },
  { label: "Trust layer", value: "Public profiles" },
  { label: "Full archive", value: "Articles · listings · more" },
];

const values = [
  { title: "Curated by people", description: "LadyFrame is built around saves you stand behind—not algorithmic noise." },
  { title: "Designed for focus", description: "Dense rows, clear hierarchy, and mint-on-emerald contrast keep scanning fast." },
  { title: "Built to share", description: "Collections and public profiles make it easy to show what you read and who you are." },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is where you save links, publish a public profile, and explore every other format the site supports—from one calm desk.`}
      actions={
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <Badge variant="secondary">Our Story</Badge>
            <h2 className="text-2xl font-semibold text-foreground">
              One home for saves, identity, and everything you publish.
            </h2>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.name} combines social bookmarking with public profiles and a full archive of articles, listings,
              classifieds, images, and PDFs—so research, discovery, and trust stay in the same place.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-secondary/40 p-4">
                  <div className="text-2xl font-semibold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
