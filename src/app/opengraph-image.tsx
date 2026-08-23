import { ImageResponse } from 'next/og'
import { OgFrame, OG_SIZE, OG_CONTENT_TYPE, loadOgFonts, loadOgLockup } from '@/lib/og'
import { site } from '@/lib/site'

export const alt = `${site.name} — ${site.tagline}`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage() {
  const [fonts, lockup] = await Promise.all([loadOgFonts(), loadOgLockup()])

  return new ImageResponse(<OgFrame title={site.tagline} lockup={lockup} />, {
    ...size,
    fonts,
  })
}
