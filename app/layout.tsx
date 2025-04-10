import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '山川自然生活有限公司 | 專業的生態調查與環境監測服務',
  description: '山川自然生活有限公司提供專業的生態調查、環境監測、溪流生態評估等服務，致力於打造永續的自然生活。',
  keywords: '生態調查, 環境監測, 溪流生態, 生態檢核, 環境教育, 山川自然生活',
  metadataBase: new URL('https://www.yamakawanatural.com'),
  openGraph: {
    title: '山川自然生活有限公司 | 專業的生態調查與環境監測服務',
    description: '山川自然生活有限公司提供專業的生態調查、環境監測、溪流生態評估等服務，致力於打造永續的自然生活。',
    type: 'website',
    locale: 'zh_TW',
    url: 'https://www.yamakawanatural.com',
    siteName: '山川自然生活有限公司',
    images: [{
      url: 'https://www.yamakawanatural.com/images/logo-transparent.png.png',
      width: 800,
      height: 600,
      alt: '山川自然生活有限公司 Logo',
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 