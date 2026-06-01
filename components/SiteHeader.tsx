"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/register", label: "Register" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/rules", label: "Rules" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export function SiteHeader() {
  const path = usePathname();

  return (
    <header>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 22,
          padding: "16px 24px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          aria-label="Janx Striper Tournament home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              overflow: "hidden",
              flexShrink: 0,
              border: "1px solid rgba(255,255,255,.14)",
            }}
          >
            <Image
              src="/flag-icon.png"
              alt="Janx Tournament flag"
              width={42}
              height={42}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontWeight: 850,
                fontSize: 21,
                letterSpacing: "-.4px",
                color: "white",
              }}
            >
              Janx Striper Tournament
            </div>
            <div className="small" style={{ fontSize: 13 }}>
              York, Maine • Lobster in the Rough (HQ)
            </div>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            flexWrap: "wrap",
          }}
        >
          {nav.map((item) => {
            const active =
              item.href === "/" ? path === "/" : path?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="pill"
                style={{
                  color: active ? "white" : undefined,
                  borderBottom: active ? "2px solid var(--blue)" : undefined,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
