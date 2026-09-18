import { Plus, CheckSquare } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/layout/SiteHeader";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import MapPreview from "../components/ui/MapPreview";
import CalloutBox from "../components/ui/CalloutBox";
import StageCard from "../components/sections/StageCard";
import ChecklistCard from "../components/sections/ChecklistCard";
import { stages } from "../data/stages";
import { doItems, dontItems } from "../data/checklist";

import bantamaMap from "../assets/images/bantama-map.jpg";
import capturePhoto from "../assets/images/capture-photo.jpg";
import fieldInspectionPhoto from "../assets/images/field-inspection.jpg";
import signoffPhoto from "../assets/images/signoff-photo.jpg";

function renderStageMedia(stage) {
  if (stage.mediaType === "map") {
    return (
      <MapPreview
        image={bantamaMap}
        pinLabel={stage.mediaProps?.pinLabel}
        height="h-32"
      />
    );
  }
  if (stage.mediaType === "callout") {
    return <CalloutBox icon={CheckSquare} {...stage.mediaProps} />;
  }
  if (stage.number === "01") {
    return (
      <img
        src={capturePhoto}
        alt={stage.title}
        className="rounded-lg w-full h-32 object-cover"
      />
    );
  }
  if (stage.number === "04") {
    return (
      <img
        src={fieldInspectionPhoto}
        alt={stage.title}
        className="rounded-lg w-full h-32 object-cover"
      />
    );
  }
  if (stage.number === "05") {
    return (
      <img
        src={signoffPhoto}
        alt={stage.title}
        className="rounded-lg w-full h-32 object-cover"
      />
    );
  }
  return null;
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <PageHero
        title="How Civic Reporting Works in Ashanti Region"
        subtitle="Learn how your local defect reports are verified by municipal authorities and resolved across Ashanti district assemblies."
        align="center"
      >
        <div className="flex justify-center">
          <Link to="/report">
            <Button variant="accent" icon={Plus}>
              Report an Issue
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="bg-slate-50 py-14 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <SectionHeading
            eyebrow="End-to-End Transparency"
            title="The 5 Stages of MMDA Resolution"
            subtitle="Every issue logged triggers statutory municipal workflows under Ashanti Regional Coordinating Council oversight."
            align="center"
          />

          <div className="flex flex-col gap-4">
            {stages.map((stage) => (
              <StageCard
                key={stage.number}
                number={stage.number}
                title={stage.title}
                description={stage.description}
                numberVariant={stage.numberVariant}
                media={renderStageMedia(stage)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <SectionHeading
            eyebrow="Reporting Guidelines"
            title="Do's and Don'ts"
            subtitle="Follow these straightforward guidelines to ensure rapid municipal action on your report."
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <ChecklistCard tone="do" title="Recommended (Do)" items={doItems} />
            <ChecklistCard
              tone="dont"
              title="Prohibited (Don't)"
              items={dontItems}
            />
          </div>
        </div>
      </section>

      <Footer variant="simple" />
    </div>
  );
}
