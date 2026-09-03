import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Produtos", to: "/products" },
    { label: "Blog", to: "/blog" },
    { label: "Perfil", to: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F0F13]/85 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-[0.16em]"
        >
          NEX<span className="text-[#8257E5]">ORA</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-2 md:flex">

          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-[#8257E5]/15 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
          >
            🛒

            {/* Lógica futura: quantidade real */}
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8257E5] text-[10px] font-bold">
              2
            </span>
          </Link>

          {/* Avatar */}
          <Link
            to="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8257E5] to-violet-900 font-bold"
          >
            A
          </Link>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl border border-white/10 bg-white/5 p-3 md:hidden"
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">

          <nav className="grid gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

        </div>
      )}
    </header>
  );
}