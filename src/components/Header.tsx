'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 border-b">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/main_logo.svg" alt="الزيتونة" width={40} height={40} />
      </Link>
      <nav className="space-x-4 rtl:space-x-reverse text-sm text-gray-700">
        <Link href="/">الرئيسية</Link>
        <Link href="/categories">المواضيع</Link>
        <Link href="/about">حول</Link>
        <Link href="/contact">تواصل معنا</Link>
      </nav>
    </header>
  )
}
