import { notFound } from 'next/navigation'
import { ToolPage } from '@/components/toolpage'
import type { Mode } from '@/lib/gcode'
import { MODES } from '@/lib/modes'

export function generateStaticParams() {
  return MODES.map((m) => ({ mode: m.value }))
}

function isMode(value: string): value is Mode {
  return MODES.some((m) => m.value === value)
}

export default async function Page({ params }: { params: { mode: string } }) {
  const { mode } = await params

  if (!isMode(mode)) notFound()

  return <ToolPage key={mode} mode={mode} />
}
