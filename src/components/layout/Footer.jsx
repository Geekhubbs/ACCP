import { Link } from "react-router-dom";
import { Landmark, ShieldCheck } from "lucide-react";
import CalloutBox from "../ui/CalloutBox";
import {
  mmdaAssemblies,
  publicServices,
  footerSimpleLinks,
} from "../../data/footerLinks";

const HOME_QUICK_LINKS = [
  { label: "Report a Problem", href: "/report" },
  { label: "Track My Issue", href: "/track" },
  { label: "Participating MMDAs", href: "/mmdas" },
  { label: "Frequently Asked Questions", href: "/faqs" },
];

export default function Footer({ variant = "full" }) {
  const isSimple = variant === "simple";
  const isHome = variant === "home";

  return (
    <footer className="w-full bg-slate-50 border-t border-gray-100">
      <div
        className={`max-w-6xl mx-auto px-6 py-10 grid gap-8 ${
          isSimple
            ? "md:grid-cols-2"
            : isHome
              ? "md:grid-cols-3"
              : "md:grid-cols-4"
        }`}
      >
        {/* Brand column — always shown */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-brand-green text-white rounded-lg p-2">
              <Landmark size={20} />
            </div>
            <div>
              <p className="font-bold text-gray-900">Ashanti Civic</p>
              <p className="text-xs text-gray-500">
                {isHome
                  ? "Community Grievance & Reporting Platform"
                  : "Community Platform"}
              </p>
            </div>
          </div>

          {(isHome || (!isSimple && !isHome)) && (
            <p className="text-sm text-gray-600">
              {isHome
                ? "Empowering residents to collaborate directly with municipal assemblies for accountable, timely local service delivery across all 43 districts."
                : "Empowering residents of the Ashanti Region to collaborate directly with municipal assemblies. Transparent tracking, verifiable resolutions, and civic accountability under the Republic of Ghana Local Governance Act."}
            </p>
          )}

          {!isSimple && !isHome && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={14} />
              Official Open Civic Data Standard • Secure MMDA Routing
            </div>
          )}
        </div>

        {isSimple && (
          <div className="flex md:justify-end gap-6">
            {footerSimpleLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-gray-600 hover:text-brand-green"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {isHome && (
          <>
            <div>
              <p className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Quick Links
              </p>
              <ul className="flex flex-col gap-2">
                {HOME_QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-brand-green"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                Emergency Support
              </p>
              <CalloutBox
                label="Emergency Dispatch"
                title="112 / 191"
                description="24/7 National Hotline"
                tone="accent"
              />
              <div>
                <p className="font-semibold text-sm text-gray-900">
                  Ashanti Regional Coordinating Council
                </p>
                <p className="text-sm text-gray-600">
                  support@ashanticivic.gov.gh
                </p>
              </div>
            </div>
          </>
        )}

        {!isSimple && !isHome && (
          <>
            <div>
              <p className="font-semibold text-gray-900 mb-3">
                MMDA Assemblies
              </p>
              <ul className="flex flex-col gap-2">
                {mmdaAssemblies.map((item) => (
                  <li key={item} className="text-sm text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-3">
                Public Services
              </p>
              <ul className="flex flex-col gap-2">
                {publicServices.map((item) => (
                  <li key={item} className="text-sm text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-semibold text-gray-900">
                Civic Emergency & Help
              </p>
              <CalloutBox
                label="Regional Dispatch"
                title="112 / 191 (Police)"
                description="Toll-free 24/7 National Emergency"
                tone="accent"
              />
              <div>
                <p className="font-semibold text-sm text-gray-900">
                  Ashanti Regional Coordinating Council
                </p>
                <p className="text-sm text-gray-600">
                  Kumasi, Ashanti Region, Ghana
                </p>
                <p className="text-sm text-gray-600">
                  support@ashanticivic.gov.gh
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            © 2025 Ashanti Civic Community Platform.{" "}
            {isHome
              ? "Authorized public gateway."
              : isSimple
                ? "Certified public service gateway across Ashanti MMDAs."
                : "Certified public service gateway across Metropolitan, Municipal, and District Assemblies (MMDAs)."}
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-brand-green">
              Privacy Policy
            </a>
            <a href="/transparency" className="hover:text-brand-green">
              Transparency{!isSimple && !isHome && " & Charter"}
              {isHome && " Charter"}
            </a>
            {!isSimple && (
              <a href="/data-standards" className="hover:text-brand-green">
                Open Data Standards
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
