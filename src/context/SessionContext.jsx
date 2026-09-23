import { createContext, useContext, useMemo, useState } from "react";
import { mmdaList } from "../data/admin/districts";

const SessionContext = createContext(null);

export const REGIONAL_USER = {
  name: "Kwame Boateng",
  role: "Regional Admin",
  jurisdictionType: "Regional",
  jurisdictionCode: "REGION",
  jurisdictionName: "Ashanti Region (All MMDAs)",
};

const metropolitan = mmdaList.find((d) => d.type === "Metropolitan");
const municipalities = mmdaList.filter((d) => d.type === "Municipal");
const districts = mmdaList.filter((d) => d.type === "District");

export function buildUserForJurisdiction(jurisdictionType, code) {
  if (jurisdictionType === "Regional") return REGIONAL_USER;

  const pool =
    jurisdictionType === "Metropolitan"
      ? [metropolitan]
      : jurisdictionType === "Municipal"
        ? municipalities
        : districts;
  const mmda = pool.find((d) => d.code === code) ?? pool[0];

  return {
    name: `${mmda.name.split(" ")[0]} Desk Officer`,
    role: `${jurisdictionType} Admin`,
    jurisdictionType,
    jurisdictionCode: mmda.code,
    jurisdictionName: mmda.name,
  };
}

// Options for the dev role switcher in AdminTopbar
export const jurisdictionOptions = {
  Metropolitan: metropolitan ? [metropolitan] : [],
  Municipal: municipalities,
  District: districts,
};

export function SessionProvider({ children }) {
  const [user, setUser] = useState(REGIONAL_USER);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within a SessionProvider");
  return ctx;
}
