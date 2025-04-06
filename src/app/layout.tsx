import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'الزيتونة',
  description: 'مدونة معرفية تجمع بين الفكر والتراث والقرآن.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#f9f9f7] text-[#111] font-arabic">
        <Header />
        <main className="min-h-screen px-4 sm:px-8 md:px-16 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
