'use client'

import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
    </main>
  )
}
