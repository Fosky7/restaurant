import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Menu", href: "/#menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Hours", href: "/#hours" },
  { label: "Contact", href: "/#contact" },
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Reservations", href: "/reservations" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/") && href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path === '/' || path === location.pathname) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // For navigation to other pages with a hash, React Router will handle the path change
        // The scrollIntoView will then be handled on the new page if necessary, not here.
        // We let the default Link behavior take over for cross-page navigation with a hash
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="font-display text-xl font-bold text-primary" aria-label="Olive & Ember homepage">
          Olive &amp; Ember
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-accent"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
        <div
          className={`flex-grow-0 md:flex-grow md:flex justify-center md:overflow-x-auto md:[-ms-overflow-style:'none'] md:[scrollbar-width:'none'] ${isMobileMenuOpen ? "absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md flex flex-col items-center py-4 border-b border-border" : "hidden md:flex"}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className={`flex ${isMobileMenuOpen ? "flex-col gap-4" : "items-center gap-8"} text-sm py-2 px-4`}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={(e) => handleNavLinkClick(e, l.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                  aria-label={l.label}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/reservations"
          className="hidden md:flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Reserve
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
