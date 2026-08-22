import type { MetadataRoute } from 'next'
import { caseStudyList } from '@/content/case-studies'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: site.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...caseStudyList.map((study) => ({
      url: `${site.url}/work/${study.slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ]
}
