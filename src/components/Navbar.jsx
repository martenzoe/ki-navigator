import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // oder dein Logo

const navItems = [
  { label: "Start", href: "#start" },
  { label: "Ansatz", href: "#ansatz" },
  { label: "Arbeitsweise", href: "#arbeitsweise" },
  { label: "Warum", href: "#warum" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#start" className="flex items-center gap-2 font-bold text-lg">
        <img src={logo} alt="Logo" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-800 hover:text-gray-600 transition text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Burger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
          aria-label="Menü öffnen"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-800 hover:text-gray-600 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
