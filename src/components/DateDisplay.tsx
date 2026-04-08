'use client'

export default function DateDisplay() {
  const now = new Date()
  const formatted = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  return <>{formatted}</>
}
