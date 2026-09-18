import { useState } from "react";
import { ShieldCheck, Megaphone } from "lucide-react";

import SiteHeader from "../components/layout/SiteHeader";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import StatsBar from "../components/ui/StatsBar";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Select from "../components/ui/Select";
import SectionHeading from "../components/ui/SectionHeading";
import CTABanner from "../components/ui/CTABanner";

import FilterToolbar from "../components/sections/FilterToolbar";
import CaseStudyCard from "../components/sections/CaseStudyCard";
import ResolutionCard from "../components/sections/ResolutionCard";
import ProcessStepCard from "../components/sections/ProcessStepCard";

import { proofStats } from "../data/proofStats";
import { caseStudy } from "../data/caseStudy";
import { resolutions } from "../data/resolutions";
import { verificationProcess } from "../data/verificationProcess";

const DISTRICT_OPTIONS = [
  { value: "all", label: "All Ashanti MMDAs (43 Districts)" },
  { value: "kma", label: "Kumasi Metro (KMA)" },
  { value: "asokwa", label: "Asokwa Municipal" },
  { value: "kwadaso", label: "Kwadaso Municipal" },
  { value: "suame", label: "Suame Municipal" },
];

const DATE_OPTIONS = [
  { value: "30d", label: "Recently Resolved (Last 30 Days)" },
  { value: "90d", label: "Last 90 Days" },
  { value: "all", label: "All Time" },
];

const SORT_OPTIONS = [
  { value: "recent", label: "Most Recent Inspections" },
  { value: "fastest", label: "Fastest Resolutions" },
];

const CATEGORIES = [
  { id: "all", label: "All Categories" },
  { id: "roads", label: "Roads & Pavements" },
  { id: "lighting", label: "Street Lighting" },
  { id: "drainage", label: "Drainage & Culverts" },
  { id: "sanitation", label: "Sanitation & Waste" },
  { id: "water", label: "Water & Utilities" },
];

const PAGE_SIZE = 6;

export default function ProofOfWorkPage() {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("all");
  const [dateFilter, setDateFilter] = useState("30d");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("recent");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleResolutions = resolutions.slice(0, visibleCount);
  const hasMore = visibleCount < resolutions.length;

  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />

      <PageHero
        badge={
          <Badge variant="brand" size="md">
            Civic Transparency & Public Proof
          </Badge>
        }
        title="Verified Proof of Work. Real Community Impact."
        subtitle="Every resolved municipal issue across Kumasi and all 43 Ashanti districts requires certified before-and-after photographic evidence, engineering inspection sign-off, and community citizen verification before closure."
      />

      <main className="max-w-6xl mx-auto px-6 flex flex-col gap-10 pb-16">
        <FilterToolbar
          searchValue={search}
          onSearchChange={setSearch}
          districtOptions={DISTRICT_OPTIONS}
          district={district}
          onDistrictChange={setDistrict}
          dateOptions={DATE_OPTIONS}
          dateFilter={dateFilter}
          onDateFilterChange={setDateFilter}
          resultCount={14820}
          categories={CATEGORIES}
          activeCategory={category}
          onCategorySelect={setCategory}
        />

        <StatsBar stats={proofStats} />

        <CaseStudyCard {...caseStudy} />

        <div>
          <SectionHeading
            title="Recent Resolutions Across Ashanti"
            subtitle="Certified completed civic works with public photographic proof of work."
            trailing={
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 hidden md:inline">
                  Sorted by:
                </span>
                <Select
                  value={sort}
                  onChange={setSort}
                  options={SORT_OPTIONS}
                />
              </div>
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {visibleResolutions.map((resolution) => (
              <ResolutionCard
                key={resolution.id}
                image={resolution.image}
                ticketId={resolution.ticketId}
                location={resolution.location}
                title={resolution.title}
                description={resolution.description}
                fixedTime={resolution.fixedTime}
                inspector={resolution.inspector}
                onViewCertificate={() => {
                  // TODO: wire to certificate detail route
                }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 mt-8">
            {hasMore && (
              <Button
                variant="outline"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              >
                Load More Verified Resolutions
              </Button>
            )}
            <span className="text-xs text-gray-400">
              Showing {visibleResolutions.length} of{" "}
              {resolutions.length.toLocaleString()} total records across Ashanti
              Region
            </span>
          </div>
        </div>

        <div className="bg-brand-green rounded-2xl p-8 md:p-10 flex flex-col gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <Badge
              variant="accent"
              size="md"
              className="w-fit bg-white/10 text-brand-orange"
            >
              <ShieldCheck size={12} className="mr-1" />
              Public Accountability Standard
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              How Every Fix is Validated Before Ticket Closure
            </h2>
            <p className="text-white/70 text-sm md:text-base">
              Unlike traditional municipal portals, a ticket cannot be marked
              "Resolved" by administrative staff alone. Our strict 3-tier proof
              chain guarantees actual work on the ground.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {verificationProcess.map((step) => (
              <ProcessStepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        <CTABanner
          badgeIcon={Megaphone}
          badgeLabel="Ashanti Citizen Action"
          title="Ready to Make a Difference in Ashanti?"
          subtitle="Join thousands of active citizens building cleaner, safer, and better communities across Kumasi and all 43 Ashanti districts."
          primaryAction={
            <Button variant="accent" showArrow>
              Submit a Report Now
            </Button>
          }
          secondaryAction={
            <Button variant="outline">Sign In / Register</Button>
          }
        />
      </main>

      <Footer variant="home" />
    </div>
  );
}
