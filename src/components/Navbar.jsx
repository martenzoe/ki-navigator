import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";
import { scrollToId } from "../utils/scrollToId";

const navItems = [
  { label: "Start", href: "start" },
  { label: "Ansatz", href: "ansatz" },
  { label: "Arbeitsweise", href: "arbeitsweise" },
  { label: "Warum", href: "warum" },
  { label: "Use Case", href: "/usecase" },
  { label: "GEO", href: "/geo" },
  { label: "Kontakt", href: "kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item) => {
    setIsOpen(false);
    if (item.href.startsWith("/")) {
      // Externe Seiten wie /usecase, /geo
      navigate(item.href);
    } else {
      // Interne Sections
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToId(item.href), 300);
      } else {
        scrollToId(item.href);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <img src={logo} alt="Logo" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item)}
              className="text-gray-800 hover:text-gray-600 transition text-sm font-medium"
            >
              {item.label}
            </button>
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
        <div className="md:hidden bg-white px-4 pb-4 shadow-md space-y-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left py-2 text-gray-800 hover:text-gray-600 text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
