"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

import s from './Sidebar.module.css'
import {SUPER_ADMIN_ROUTES} from "@/shared/lib/super-admin";
import {ImageIcon, SvgStats, CreditCardIcon, SvgProfile} from "@/shared/ui/icons";




const NAV_ITEMS = [
  { name: 'Users list', href: SUPER_ADMIN_ROUTES.USERS, icon: SvgProfile },
  { name: 'Statistics', href: SUPER_ADMIN_ROUTES.STATISTICS, icon: SvgStats },
  { name: 'Payments list', href: SUPER_ADMIN_ROUTES.PAYMENTS, icon: CreditCardIcon },
  { name: 'Posts list', href: SUPER_ADMIN_ROUTES.POSTS, icon: ImageIcon },
] as const

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || (href !== SUPER_ADMIN_ROUTES.USERS && pathname?.startsWith(href))

  return (
    <aside className={s.container}>
      <nav className={s.nav}>
        {NAV_ITEMS.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={clsx(s.link, isActive(href) && s.active)}
          >
            <Icon className={s.icon} />
            <span className={s.text}>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
