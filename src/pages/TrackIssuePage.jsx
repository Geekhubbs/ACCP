import { useState } from "react";
import SiteHeader from "../components/layout/SiteHeader";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import SearchBar from "../components/ui/SearchBar";
import MapPreview from "../components/ui/MapPreview";
import TicketSummaryCard from "../components/sections/TicketSummaryCard";
import LifecycleStepper from "../components/sections/LifecycleStepper";
import EvidenceCard from "../components/sections/EvidenceCard";
import { mockTicket } from "../data/lifecycleSteps";
import { Hash } from "lucide-react";

// Temporary placeholders until real photos/map screenshots are added
import fieldEvidencePhoto from "../assets/images/field-evidence-photo.jpg";
import bantamaMap from "../assets/images/bantama-map.jpg";

export default function TrackIssuePage() {
  const [searchValue, setSearchValue] = useState(mockTicket.ticketId);
  const ticket = mockTicket; // Later: fetch/find ticket based on searchValue

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <PageHero
        title="Track Problem Report"
        subtitle="Real-time dispatch milestones and verified resolutions across Ashanti Region."
        dark
        align="center"
      >
        <SearchBar
          leadingIcon={Hash}
          value={searchValue}
          onChange={setSearchValue}
          onSubmit={(val) => console.log("Track ticket:", val)}
          placeholder="ACCP-GH-2026-4891"
          buttonLabel="Track"
          buttonVariant="accent"
        />
      </PageHero>

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10 flex flex-col gap-6">
        <TicketSummaryCard
          ticketId={ticket.ticketId}
          status={ticket.status}
          assembly={ticket.assembly}
          title={ticket.title}
          address={ticket.address}
          stats={ticket.stats}
          onAddEvidence={() => console.log("Add evidence")}
          onShare={() => console.log("Share")}
        />

        <LifecycleStepper steps={ticket.lifecycle} />

        <div className="grid md:grid-cols-2 gap-6">
          <EvidenceCard
            image={fieldEvidencePhoto}
            overlayTag={ticket.evidence.overlayTag}
            captionTitle={ticket.evidence.captionTitle}
            captionDescription={ticket.evidence.captionDescription}
          />
          <MapPreview
            image={bantamaMap}
            pinLabel={ticket.location.pinLabel}
            coordinates={ticket.location.coordinates}
            subLabel={ticket.location.subLabel}
          />
        </div>
      </main>

      <Footer variant="full" />
    </div>
  );
}
