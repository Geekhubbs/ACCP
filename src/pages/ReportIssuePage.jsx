import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Construction,
  Droplet,
  Zap,
  Trash2,
  Waves,
  MoreHorizontal,
} from "lucide-react";

import SiteHeader from "../components/layout/SiteHeader";
import PageHero from "../components/ui/PageHero";
import StepIndicator from "../components/ui/StepIndicator";
import SelectableCard from "../components/ui/SelectableCard";
import FormField from "../components/forms/FormField";
import Textarea from "../components/forms/Textarea";
import FileDropzone from "../components/forms/FileDropzone";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import {
  categoryOptions,
  severityOptions,
  reportSteps,
} from "../data/reportOptions";

const CATEGORY_ICONS = {
  Construction,
  Droplet,
  Zap,
  Trash2,
  Waves,
  MoreHorizontal,
};

export default function ReportIssuePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "roads",
    severity: "medium",
    description: "",
    address: "",
    anonymous: false,
  });
  const [files, setFiles] = useState([]);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting report:", { ...form, files });
    // Wire up real submission later
    navigate("/track");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SiteHeader />

      <PageHero
        title="Report a Civic Issue"
        subtitle="Submit infrastructure and public service reports directly to your local assembly in Ashanti Region."
        dark
        align="center"
      >
        <StepIndicator steps={reportSteps} currentStep={1} />
      </PageHero>

      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-10 flex flex-col gap-6">
        <form onSubmit={handleSubmit}>
          <Card className="p-6 flex flex-col gap-6">
            <FormField
              label="Problem Title"
              placeholder="Severe Pothole Cluster on Bantama High St near Cultural Centre"
              value={form.title}
              onChange={(val) => updateField("title", val)}
              required
            />

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {categoryOptions.map((option) => (
                  <SelectableCard
                    key={option.id}
                    icon={CATEGORY_ICONS[option.iconName]}
                    label={option.label}
                    selected={form.category === option.id}
                    onClick={() => updateField("category", option.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Severity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {severityOptions.map((option) => (
                  <SelectableCard
                    key={option.id}
                    label={option.label}
                    subtext={option.subtext}
                    tone={option.tone}
                    selected={form.severity === option.id}
                    onClick={() => updateField("severity", option.id)}
                  />
                ))}
              </div>
            </div>

            <Textarea
              label="Description"
              placeholder="Describe the issue in detail..."
              value={form.description}
              onChange={(val) => updateField("description", val)}
              rows={4}
              required
            />

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Location & Address
              </label>
              <div className="flex gap-2">
                <FormField
                  placeholder="Bantama High Street, Opp. TotalEnergies"
                  value={form.address}
                  onChange={(val) => updateField("address", val)}
                  className="flex-1"
                />
                <Button type="button" variant="outline" icon={Waves}>
                  GPS Pin
                </Button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Photos or Evidence
              </label>
              <FileDropzone onFilesSelected={setFiles} />
              {files.length > 0 && (
                <ul className="mt-2 flex flex-col gap-1">
                  {files.map((file, index) => (
                    <li
                      key={`${file.name}-${index}`}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                      {file.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <label className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Submit Anonymously
                </p>
                <p className="text-xs text-gray-500">
                  Hide your profile details on public status tracking
                </p>
              </div>
              <input
                type="checkbox"
                checked={form.anonymous}
                onChange={(e) => updateField("anonymous", e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 accent-brand-green shrink-0"
              />
            </label>
          </Card>

          <Button
            type="submit"
            variant="primary"
            showArrow
            fullWidth
            className="mt-6"
          >
            Submit Report
          </Button>
        </form>
      </main>
    </div>
  );
}
