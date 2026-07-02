import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Provider from './provider'

import Sidebar from '@/components/sidebar/Sidebar'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['cyrillic'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['cyrillic'],
})

export const metadata: Metadata = {
    title: 'Memory cards app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200/60`}>
                <Provider>
                    <Sidebar />
                    {children}
                </Provider>
            </body>
        </html>
    )
}
