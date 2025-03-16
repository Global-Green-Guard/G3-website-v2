"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Global Green Guard</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Our Partnership
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Projects Developer
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Investors
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Advisory Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Insight
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Partnership
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects Developer
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Investors
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Advisory Service
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Insight
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

