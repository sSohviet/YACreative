"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-light tracking-wide text-gray-900">
              YACreativeWedding
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-light tracking-wide"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                }}
              >
                Home
              </Link>
              <Link
                href="/investment"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-light tracking-wide"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                }}
              >
                Investment
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-light tracking-wide"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                }}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-light tracking-wide"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                }}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-light tracking-wide"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                }}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 pt-4 pb-6 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900 font-light tracking-wide text-lg"
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
              }}
            >
              Home
            </Link>
            <Link
              href="/investment"
              className="block text-gray-700 hover:text-gray-900 font-light tracking-wide text-lg"
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
              }}
            >
              Investment
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-700 hover:text-gray-900 font-light tracking-wide text-lg"
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
              }}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-gray-900 font-light tracking-wide text-lg"
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
              }}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-gray-900 font-light tracking-wide text-lg"
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
