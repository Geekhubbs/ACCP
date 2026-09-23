import { useState } from "react";
import {
  Landmark,
  MessageSquareText,
  Zap,
  ShieldCheck,
  History,
  Save,
  CheckCircle2,
  AlertTriangle,
  Lock,
  MapPin,
} from "lucide-react";

import RequireRegional from "../../components/layout/RequireRegional";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";
import FormField from "../../components/forms/FormField";
import Toggle from "../../components/ui/admin/Toggle";

import {
  settingsTabs,
  telecomTrunkOptions,
  timezoneOptions,
  retentionOptions,
} from "../../data/admin/settingsOptions";

function SectionCard({ icon: Icon, title, subtitle, sectionNo, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {Icon && (
            <div className="h-9 w-9 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
              <Icon size={18} />
            </div>
          )}
          <div>
            <h3 className="font-bold text-slate-900">{title}</h3>
            {subtitle && (
              <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
        {sectionNo && (
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 shrink-0">
            Section {sectionNo}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function ToggleRow({ label, description, checked, onChange, badge }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-slate-100 p-3">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-slate-800">{label}</p>
          {badge}
        </div>
        {description && (
          <p className="text-xs text-slate-500 mt-0.5">{description}</p>
        )}
      </div>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  const [legalName, setLegalName] = useState(
    "Ashanti Civic Community Platform (ACCP)",
  );
  const [custodian, setCustodian] = useState(
    "Ashanti Regional Coordinating Council (ARCC)",
  );
  const [vernacularDispatch, setVernacularDispatch] = useState(true);
  const [autoDispatch, setAutoDispatch] = useState(true);
  const [senderId, setSenderId] = useState("ASHANTI-CIVIC");
  const [notifyOnAcceptance, setNotifyOnAcceptance] = useState(true);
  const [notifyOnResolution, setNotifyOnResolution] = useState(true);
  const [notifyAssemblyMember, setNotifyAssemblyMember] = useState(false);
  const [identityMasking, setIdentityMasking] = useState(true);
  const [retention, setRetention] = useState("7y");
  const [telecomTrunk, setTelecomTrunk] = useState("telecel-mtn");
  const [timezone, setTimezone] = useState("gmt");

  const [dirty, setDirty] = useState(false);
  const markDirty = (setter) => (val) => {
    setter(val);
    setDirty(true);
  };

  const handleSave = () => {
    // TODO: PATCH /admin/settings
    console.log("Saving platform settings...");
    setDirty(false);
  };

  return (
    <RequireRegional pageName="Platform & System Settings">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
              System Control Node • ARCC Core v3.8.4
            </span>
            <h1 className="text-2xl font-bold text-slate-900 mt-1">
              Platform &amp; System Settings
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Configure regional gateway parameters, automated routing
              thresholds, citizen notification channels, and statutory data
              protection policies.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" icon={History}>
              Audit History
            </Button>
            <Button
              variant="primary"
              icon={Save}
              onClick={handleSave}
              disabled={!dirty}
            >
              Save Changes
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-1">
          {settingsTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-brand-green text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab !== "general" ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-sm text-slate-500">
            {settingsTabs.find((t) => t.id === activeTab)?.label} controls go
            here — not built yet.
          </div>
        ) : (
          <>
            {/* Gateway status banner */}
            <div className="bg-brand-green rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <ShieldCheck size={22} className="text-white shrink-0" />
                <div>
                  <p className="text-white font-bold">
                    Ashanti Region Administrative Gateway Active
                  </p>
                  <p className="text-white/70 text-sm">
                    Enforcing sovereign jurisdiction policies across 43
                    Metropolitan, Municipal &amp; District Assemblies (MMDAs).
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 bg-white/10 rounded-lg px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <div className="text-white text-xs">
                  <p className="uppercase tracking-wide text-white/60">
                    Active Node Sync
                  </p>
                  <p className="font-semibold">Kumasi Central Node (ARCC-01)</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Last synced 4 minutes ago with ARCC Regional Server (Node:
              KS-ARCC-01)
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Left column */}
              <div className="flex flex-col gap-5">
                <SectionCard
                  icon={Landmark}
                  title="Regional Identity & Jurisdiction"
                  subtitle="Sovereign mandate parameters & regional boundaries"
                  sectionNo="01"
                >
                  <FormField
                    label="Platform Legal Name"
                    value={legalName}
                    onChange={markDirty(setLegalName)}
                  />
                  <FormField
                    label="Regional Authority Custodian"
                    value={custodian}
                    onChange={markDirty(setCustodian)}
                  />

                  <ToggleRow
                    label="Default Language & Vernacular Dispatch"
                    description="English (Official) default with automated Asante Twi translation for USSD & SMS outreach."
                    checked={vernacularDispatch}
                    onChange={markDirty(setVernacularDispatch)}
                    badge={
                      <Badge variant="success" size="sm">
                        Twi - Asante Active
                      </Badge>
                    }
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Regional Timezone
                      </label>
                      <Select
                        value={timezone}
                        onChange={markDirty(setTimezone)}
                        options={timezoneOptions}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Enforced MMDA Boundary
                      </label>
                      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-slate-700">
                        <MapPin size={14} className="text-slate-400" /> 43
                        Assemblies (100% Locked)
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-50 border border-slate-100 p-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Ashanti Regional Coordinate Mesh
                      </p>
                      <p className="text-xs text-slate-500">
                        Boundaries aligned with National Land Use Spatial
                        Authority (LUSPA)
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure Nodes
                    </Button>
                  </div>
                </SectionCard>

                <SectionCard
                  icon={Zap}
                  title="Automated Dispatch & SLA Engine"
                  subtitle="Incident routing triggers & escalation protocol timings"
                  sectionNo="02"
                >
                  <ToggleRow
                    label="Global Auto-Dispatch Engine"
                    description="Instantly route incoming verified citizen reports directly to designated MMDA engineer desks and sector agencies (GWCL, ECG, Urban Roads) without manual clearance queue."
                    checked={autoDispatch}
                    onChange={markDirty(setAutoDispatch)}
                    badge={
                      <Badge variant="success" size="sm">
                        Automated
                      </Badge>
                    }
                  />

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg border border-rose-200 bg-rose-50 p-3">
                      <p className="text-[10px] font-semibold uppercase text-rose-600 flex items-center gap-1">
                        <AlertTriangle size={10} /> Critical P0
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        Emergency SLA — flash floods, fallen mains, road
                        collapse
                      </p>
                      <p className="text-xl font-bold text-slate-900 mt-2">
                        12 Hours
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Escalate to Director
                      </p>
                    </div>
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                      <p className="text-[10px] font-semibold uppercase text-amber-600">
                        Standard P2
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        Municipal SLA — waste clearing, streetlights, drainage
                      </p>
                      <p className="text-xl font-bold text-slate-900 mt-2">
                        48 Hours
                      </p>
                      <p className="text-[10px] text-slate-400">MMDA Desk</p>
                    </div>
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                      <p className="text-[10px] font-semibold uppercase text-emerald-600">
                        Resolution
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        Citizen Buffer — public audit window prior to closure
                      </p>
                      <p className="text-xl font-bold text-slate-900 mt-2">
                        72 Hours
                      </p>
                      <p className="text-[10px] text-slate-400">Auto-resolve</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 flex items-start gap-1.5">
                    <AlertTriangle
                      size={12}
                      className="mt-0.5 shrink-0 text-amber-500"
                    />
                    Unacknowledged P0 issues auto-trigger SMS escalation alerts
                    directly to the Regional Coordinating Director's emergency
                    hotline.
                  </p>
                </SectionCard>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-5">
                <SectionCard
                  icon={MessageSquareText}
                  title="Citizen Communication & SMS Gateway"
                  subtitle="Telephony trunking & citizen status notifications"
                  sectionNo="03"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Primary Telecom Trunk
                      </label>
                      <Select
                        value={telecomTrunk}
                        onChange={markDirty(setTelecomTrunk)}
                        options={telecomTrunkOptions}
                        className="w-full"
                      />
                      <p className="text-[11px] text-slate-400 mt-1">
                        99.94% throughput delivery within Ashanti.
                      </p>
                    </div>
                    <FormField
                      label="Registered Sender ID"
                      icon={CheckCircle2}
                      value={senderId}
                      onChange={markDirty(setSenderId)}
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full text-left rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    USSD Offline Citizen Portal →
                  </button>

                  <div>
                    <p className="text-sm font-semibold text-slate-800 mb-2">
                      Automated Dispatch Notifiers
                    </p>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-start gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={notifyOnAcceptance}
                          onChange={(e) =>
                            markDirty(setNotifyOnAcceptance)(e.target.checked)
                          }
                          className="mt-0.5 accent-brand-green"
                        />
                        <span>
                          <span className="font-medium text-slate-800">
                            Send automated SMS on report acceptance & ticket
                            generation
                          </span>
                          <br />
                          <span className="text-xs text-slate-500">
                            Dispatches ACCP tracking ticket code & assigned MMDA
                            within 90 seconds.
                          </span>
                        </span>
                      </label>
                      <label className="flex items-start gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={notifyOnResolution}
                          onChange={(e) =>
                            markDirty(setNotifyOnResolution)(e.target.checked)
                          }
                          className="mt-0.5 accent-brand-green"
                        />
                        <span>
                          <span className="font-medium text-slate-800">
                            Send photographic proof of resolution link via SMS
                          </span>
                          <br />
                          <span className="text-xs text-slate-500">
                            Attaches encrypted tiny-URL displaying contractor
                            repair photo for citizen sign-off.
                          </span>
                        </span>
                      </label>
                      <label className="flex items-start gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={notifyAssemblyMember}
                          onChange={(e) =>
                            markDirty(setNotifyAssemblyMember)(e.target.checked)
                          }
                          className="mt-0.5 accent-brand-green"
                        />
                        <span>
                          <span className="font-medium text-slate-800">
                            Notify Assembly Member on new reports in their
                            electoral area
                          </span>
                          <br />
                          <span className="text-xs text-slate-500">
                            Direct SMS digest sent at 08:00 and 17:00 daily to
                            elected local representatives.
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </SectionCard>

                <SectionCard
                  icon={Lock}
                  title="Data Protection & Legal Compliance"
                  subtitle="National governance frameworks & privacy filters"
                  sectionNo="04"
                >
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-3 flex items-start gap-3">
                    <ShieldCheck
                      size={18}
                      className="text-brand-green mt-0.5 shrink-0"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                        Ghana Data Protection Commission{" "}
                        <CheckCircle2 size={14} className="text-emerald-600" />
                      </p>
                      <p className="text-xs text-slate-500">
                        Certified Data Controller • Registration:
                        DPC/PUB/2023/ARCC-094
                      </p>
                      <p className="text-xs text-slate-500">
                        Compliant with Data Protection Act, 2012 (Act 843)
                      </p>
                    </div>
                  </div>

                  <ToggleRow
                    label="Citizen Identity Masking"
                    description="Automatically redact phone numbers, full names, and biometric exif data before photos are published into the public municipal resolution gallery."
                    checked={identityMasking}
                    onChange={markDirty(setIdentityMasking)}
                    badge={
                      <Badge variant="accent" size="sm">
                        Privacy Default
                      </Badge>
                    }
                  />

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Incident Record Retention Policy
                    </label>
                    <Select
                      value={retention}
                      onChange={markDirty(setRetention)}
                      options={retentionOptions}
                      className="w-full"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Mandated by Ghana Public Records Administration Act.
                      Automatically moves to cold immutable storage after
                      duration.
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-900 text-slate-300 px-3 py-2 text-[11px] font-mono flex items-center justify-between">
                    <span>SHA-256 Config Sig: a4f8...B9bc-ARCC-2024</span>
                    <span className="text-slate-500">Immutable Hash</span>
                  </div>
                </SectionCard>
              </div>
            </div>

            {dirty && (
              <div className="sticky bottom-4 self-end flex items-center gap-2 rounded-lg border border-slate-200 bg-white shadow-lg px-4 py-3">
                <span className="text-sm text-slate-600">
                  You have unsaved changes
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDirty(false)}
                >
                  Discard
                </Button>
                <Button variant="primary" size="sm" onClick={handleSave}>
                  Save Platform Settings
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </RequireRegional>
  );
}
