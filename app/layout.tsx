import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Full Stack Development",
  description: "An interactive presentation introducing Full Stack Web Development.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
