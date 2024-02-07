'use client'
import Link from "next/link"
import {usePathname} from "next/navigation"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    return (
      <section>
        <h1>dashboard</h1>
        <nav>
          <Link href="/dashboard">Back to Dashboard </Link>
          <ul>
        <li>
          <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/dashboard/settings' ? 'active' : ''}`}
            href="dashboard/settings"
          >
            Setting
          </Link>
          <Link
            className={`link ${pathname === '/dashboard/blogs' ? 'active' : ''}`}
            href="dashboard/blogs"
          >
            Setting
          </Link>
        </li>
      </ul>
        </nav>
   
        {children}
      </section>
    )
  }