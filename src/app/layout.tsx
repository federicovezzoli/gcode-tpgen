import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'G-Code Tools',
  description:
    'Free online tool to generate diagnostic G-code test patterns for CNC machines, routers and plotters. Calibrate steps/mm, backlash, acceleration, Z-level, surfacing and more.',
  keywords: [
    'gcode generator',
    'CNC calibration',
    'test patterns',
    'gcode test',
    'CNC router',
    'steps per mm',
    'backlash test',
    'surfacing gcode',
    'acceleration test',
  ],
  authors: [{ name: 'Federico Vezzoli', url: 'https://federicovezzoli.com' }],
  openGraph: {
    title: 'G-Code Tools',
    description:
      'Generate diagnostic G-code test patterns for CNC machines. Rulers, Z-tests, acceleration, surfacing and more — free, in-browser.',
    url: 'https://gcode-tools.federicovezzoli.com/',
    siteName: 'G-Code Tools',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'G-Code Tools',
    description: 'Generate diagnostic G-code test patterns for CNC machines. Free, in-browser.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <header className="border-b">
            <div className="container mx-auto px-4 py-4 max-w-5xl flex items-center justify-between">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <h1 className="text-xl font-bold tracking-tight">G-Code Tools</h1>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Generate diagnostic G-code patterns & more for CNC machines
                </p>
              </Link>
              <ThemeToggle />
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <footer className="border-t mt-12">
            <div className="container mx-auto px-4 py-4 max-w-5xl flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>
                Made by{' '}
                <a
                  href="https://federicovezzoli.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Federico Vezzoli
                </a>
              </span>
              <span>·</span>
              <span>
                Forked from{' '}
                <a
                  href="https://github.com/vector76/gcode_tpgen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  vector76/gcode_tpgen
                </a>
              </span>
              <span>·</span>
              <span>v{process.env.NEXT_PUBLIC_APP_VERSION}</span>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
