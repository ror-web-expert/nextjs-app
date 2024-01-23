import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1> helo dashboard page</h1>
     <Link href="dashboard/blogs">Blogs</Link>
     <Link href='dashboard/settings'>Setting</Link>
     <Link href="components">Compnents</Link>
    </main>
  )
}
