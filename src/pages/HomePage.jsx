import {
  ShieldCheck,
  Zap,
  MessageCircle,
  Camera,
  MapPin,
  Users,
  LogOut,
  ClipboardCheck,
  FileCheck,
  Megaphone,
  LogIn,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

import SiteHeader from "../components/layout/SiteHeader";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import SectionHeading from "../components/ui/SectionHeading";
import StatsBar from "../components/ui/StatsBar";
import TrustBadgeRow from "../components/ui/TrustBadgeRow";
import WorkflowStep from "../components/ui/WorkflowStep";
import TrustFeature from "../components/ui/TrustFeature";
import LiveTicketPreview from "../components/ui/LiveTicketPreview";
import CTABanner from "../components/ui/CTABanner";
import Card from "../components/ui/Card";
import liveTicketPhoto from "../assets/images/live-ticket-photo.jpg";

import {
  heroStats,
  trustBadges,
  workflowSteps,
  trustFeatures,
  liveTicketPreview,
} from "../data/homeContent";

const ICONS = {
  ShieldCheck,
  Zap,
  MessageCircle,
  Camera,
  MapPin,
  Users,
  LogOut,
  ClipboardCheck,
  FileCheck,
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SiteHeader />

      {/* Hero */}
      <section className="max-w-6xl w-full mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <Badge variant="brand" size="md" className="w-fit">
            <CheckCircle2 size={12} className="mr-1" />
            Official Public Gateway • Ashanti Region
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Report Community Problems.{" "}
            <span className="text-brand-green">Stay Connected.</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg">
            Connect directly with municipal assemblies across Kumasi and Ashanti
            districts to report roads, utilities, and sanitation issues with
            transparent tracking.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/report">
              <Button variant="accent" icon={Megaphone}>
                Report an Issue
              </Button>
            </Link>
            <Link to="/track">
              <Button variant="outline" icon={MapPin}>
                Track Status
              </Button>
            </Link>
          </div>

          <TrustBadgeRow
            items={trustBadges.map((item) => ({
              icon: ICONS[item.iconName],
              label: item.label,
            }))}
          />
        </div>

        <LiveTicketPreview {...liveTicketPreview} image={liveTicketPhoto} />
      </section>

      {/* Stats */}
      <section className="max-w-6xl w-full mx-auto px-6">
        <StatsBar stats={heroStats} />
      </section>

      {/* How It Works preview */}
      <section className="max-w-6xl w-full mx-auto px-6 py-16 flex flex-col gap-8">
        <SectionHeading
          eyebrow="Civic Workflow"
          title="How It Works"
          subtitle="Simple, transparent municipal problem resolution from submission to completion."
          align="center"
        />

        <div className="grid md:grid-cols-4 gap-4">
          {workflowSteps.map((step) => (
            <WorkflowStep
              key={step.step}
              icon={ICONS[step.iconName]}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {trustFeatures.map((feature) => (
              <TrustFeature
                key={feature.title}
                icon={ICONS[feature.iconName]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Card>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl w-full mx-auto px-6 pb-16">
        <CTABanner
          badgeIcon={Users}
          badgeLabel="Ashanti Citizen Action"
          title="Ready to Make a Difference in Ashanti?"
          subtitle="Join thousands of active citizens building cleaner, safer, and better communities across Kumasi and all 43 Ashanti districts."
          primaryAction={
            <Link to="/report">
              <Button variant="accent" icon={Megaphone} fullWidth>
                Submit a Report Now
              </Button>
            </Link>
          }
          secondaryAction={
            <Link to="/sign-in">
              <Button
                variant="outline"
                icon={LogIn}
                fullWidth
                className="bg-transparent text-black border-white/30 hover:bg-white/10 hover:text-black"
              >
                Sign In / Register
              </Button>
            </Link>
          }
        />
      </section>

      <Footer variant="home" />
    </div>
  );
}
