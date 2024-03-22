import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '$PURR Frame',
  description: 'Check your $PURR',
  openGraph: {
    title: '$PURR Frame',
    description: 'Check your $PURR',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/gold.png`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_SITE_URL}/gold.png`,
    'fc:frame:button:1:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api?id=2`,
    //'fc:frame:button:1:target': `${process.env.NEXT_PUBLIC_SITE_URL}/api?id=1`,
    //'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api?id=3`,
    'fc:frame:button:1': 'Check your $PURR',
  },
}

export default function Page() {
  return (
    <div>
      <h1>Frame</h1>
    </div>
  )
}
