import type React from "react"
import Navigation from "./Navigation"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>{children}</main>
      <footer className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-light tracking-wide text-gray-900 mb-4">YACreativeWedding</h3>
            <p className="text-gray-600 font-light">Capturing timeless moments through Photo & Video</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 font-light">
              Contact us:{" "}
              <a href="mailto:yacreativestudios@gmail.com" className="text-blue-500">
                yacreativestudios@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-4">
            <a
              href="https://instagram.com/yacreativewedding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              Instagram
            </a>
          </div>
          <div className="text-sm text-gray-500 font-light">© 2025 YACreativeWedding. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
