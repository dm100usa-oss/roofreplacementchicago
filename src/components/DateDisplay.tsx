'use client'

export default function DateDisplay() {
  const now = new Date()
  const formatted = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`
  return <>{formatted}</>
}
