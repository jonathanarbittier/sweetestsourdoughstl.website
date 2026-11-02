"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import SiteLogo from "./SiteLogo";
import { HOTPLATE_URL, SITE_NAV_LINKS } from "./site-links";

export default function SiteHeader() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const closeMobileMenu = () => mobileMenu.current?.removeAttribute("open");

  return (
    <header className="site-header">
      <SiteLogo />
      <nav className="desktop-nav" aria-label="Main navigation">
        {SITE_NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>
        ))}
        <a href={HOTPLATE_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">Order Now</a>
      </nav>
      <details className="mobile-menu" ref={mobileMenu} onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMobileMenu();
          mobileMenu.current?.querySelector("summary")?.focus();
        }
      }}>
        <summary className="menu-button" aria-label="Main menu"><span></span><span></span></summary>
        <nav aria-label="Mobile navigation">
          {SITE_NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={closeMobileMenu}>{label}</Link>
          ))}
          <a href={HOTPLATE_URL} className="mobile-nav-cta" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Order Now</a>
        </nav>
      </details>
    </header>
  );
}
