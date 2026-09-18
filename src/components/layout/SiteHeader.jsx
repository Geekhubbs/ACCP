import { useLocation } from "react-router-dom";
import { User } from "lucide-react";
import BrandLock from "../ui/BrandLock";
import NavLink from "../ui/NavLink";
import Button from "../ui/Button";
import { navLinks } from "../../data/navLinks";

export default function SiteHeader({ isAuthenticated = false }) {
  const location = useLocation();

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <BrandLock showBadge />

      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((item) => (
          <NavLink
            key={item.href}
            label={item.label}
            to={item.href}
            active={location.pathname === item.href}
          />
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {!isAuthenticated && <NavLink label="Sign In" to="/sign-in" />}
        <div className="h-9 w-9 rounded-full bg-brand-green text-white flex items-center justify-center">
          <User size={18} />
        </div>
      </div>
    </header>
  );
}
