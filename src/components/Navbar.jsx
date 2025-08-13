import React, { useEffect, useState } from 'react'
import { href } from 'react-router-dom'
import { cn } from '../lip/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#hero'},
    { name: 'About', href: '#about'},
    { name: 'Skills', href: '#skills'},
    { name: 'Projects', href: '#projects'},
    { name: 'Contact', href: '#contact'},
];


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // راقب السكرول بشكل طبيعي بـ scrollY
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // اقفل سكرول البودي أثناء فتح المينيو
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          // لما المينيو مفتوحة أو الصفحة متسحوِلة: خلي فيه BG ثابتة
          (isScrolled || isMenuOpen)
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a className="text-xl font-bold text-primary flex items-center" href="#hero">
            <span className="relative z-10">
              <span className="text-glow text-foreground">M.Abdelbaset</span> Portfolio
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile toggle button */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="md:hidden p-2 text-foreground z-[1000]"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (خارج الـ container وبـ z-index أعلى) */}
      <div
        className={cn(
          "fixed inset-0 md:hidden flex flex-col items-center justify-center",
          "bg-background/75 backdrop-blur-md z-[999]",
          "transition-opacity duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* زرار إغلاق واضح فوق المينيو */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 p-2"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col text-xl space-y-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

