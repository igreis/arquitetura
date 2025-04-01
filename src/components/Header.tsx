"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled ? "bg-white/90 backdrop-blur-sm py-4 shadow-sm" : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/#hero" className={cn("text-2xl font-light tracking-tighter", isScrolled ? "text-black" : "text-white")}>
          ARCHI<span className={cn("font-medium", isScrolled ? "text-black" : "text-white")}>STUDIO</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {["Sobre", "Projetos", "Destaques", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn("text-sm uppercase tracking-wider hover:text-gray-500 transition-colors", isScrolled ? "text-black" : "text-white")} 
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <nav className="flex flex-col items-center space-y-4 px-6">
            {["Projetos", "Sobre", "Serviços", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

