import { ImageResponse } from 'next/og'
import { OgFrame, OG_SIZE, OG_CONTENT_TYPE, loadOgFonts } from '@/lib/og'
import { site } from '@/lib/site'

export const alt = `${site.name} — ${site.tagline}`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage() {
  return new ImageResponse(<OgFrame title={site.tagline} />, {
    ...size,
    fonts: await loadOgFonts(),
  })
}
