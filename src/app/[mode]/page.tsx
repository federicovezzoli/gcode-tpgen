import type { Mode } from '@/lib/gcode'
import { MODES } from '@/lib/modes'
import { ToolPage } from './tool'

export function generateStaticParams() {
  return MODES.map((m) => ({ mode: m.value }))
}

export default async function Page({ params }: { params: Promise<{ mode: string }> }) {
  const { mode } = await params
  return <ToolPage mode={mode as Mode} />
}
