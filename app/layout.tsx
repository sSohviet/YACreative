import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Layout from "../components/Layout"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Amanda Rose - Wedding Photography & Videography",
  description:
    "Elegant wedding photography and videography capturing authentic moments and timeless love stories with artistry and emotion.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
