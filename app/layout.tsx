import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coriscus Workspace',
  description: 'All-in-One Workspace for Startups.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
