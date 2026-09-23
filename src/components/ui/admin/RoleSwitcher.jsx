import { FlaskConical } from "lucide-react";
import {
  useSession,
  buildUserForJurisdiction,
  jurisdictionOptions,
  REGIONAL_USER,
} from "../../../context/SessionContext";

const LEVELS = ["Regional", "Metropolitan", "Municipal", "District"];

export default function RoleSwitcher() {
  const { user, setUser } = useSession();

  const handleLevelChange = (level) => {
    if (level === "Regional") {
      setUser(REGIONAL_USER);
      return;
    }
    const pool = jurisdictionOptions[level];
    setUser(buildUserForJurisdiction(level, pool[0]?.code));
  };

  const handleMmdaChange = (code) => {
    setUser(buildUserForJurisdiction(user.jurisdictionType, code));
  };

  const options = jurisdictionOptions[user.jurisdictionType] ?? [];

  return (
    <div className="flex items-center gap-2 rounded-lg border border-dashed border-amber-300 bg-amber-50 px-2.5 py-1.5">
      <FlaskConical size={13} className="text-amber-600 shrink-0" />
      <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-600 shrink-0">
        Preview as
      </span>
      <select
        value={user.jurisdictionType}
        onChange={(e) => handleLevelChange(e.target.value)}
        className="bg-transparent text-xs font-medium text-slate-700 outline-none cursor-pointer"
      >
        {LEVELS.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
      {options.length > 1 && (
        <select
          value={user.jurisdictionCode}
          onChange={(e) => handleMmdaChange(e.target.value)}
          className="bg-transparent text-xs font-medium text-slate-700 outline-none cursor-pointer max-w-[170px]"
        >
          {options.map((d) => (
            <option key={d.code} value={d.code}>
              {d.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
