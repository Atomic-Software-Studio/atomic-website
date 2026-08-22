import { ImageResponse } from 'next/og'
import { OgFrame, OG_SIZE, OG_CONTENT_TYPE, loadOgFonts } from '@/lib/og'
import { caseStudies, caseStudyList } from '@/content/case-studies'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return caseStudyList.map((study) => ({ slug: study.slug }))
}

export async function generateImageMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug]
  return [{ id: 'default', size: OG_SIZE, contentType: OG_CONTENT_TYPE, alt: study?.name ?? '' }]
}

export default async function CaseStudyOpengraphImage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug]

  return new ImageResponse(
    <OgFrame kicker="Case study" title={study?.summary ?? ''} titleSize={64} />,
    { ...size, fonts: await loadOgFonts() },
  )
}
