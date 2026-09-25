import { useMemo, useState } from "react";
import { Search, UserPlus } from "lucide-react";

import MetricCard from "../../components/ui/admin/MetricCard";
import DataTable from "../../components/ui/admin/DataTable";
import Badge from "../../components/ui/Badge";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";

import { mmdaFilterOptions } from "../../data/admin/districts";
import {
  mockUsers,
  roleOptions,
  userStatusOptions,
} from "../../data/admin/mockUsers";
import { useSession } from "../../context/SessionContext";
import { scopeRows, isRegional } from "../../lib/scope";

const ROLE_BADGE = {
  Citizen: "neutral",
  Official: "info",
  Admin: "brand",
};

const STATUS_BADGE = {
  Active: "success",
  Suspended: "danger",
  "Pending Verification": "warning",
};

export default function Users() {
  const { user } = useSession();
  const regional = isRegional(user);

  const scopedUsers = useMemo(
    () => scopeRows(mockUsers, user, (u) => u.district),
    [user],
  );

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [district, setDistrict] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return scopedUsers.filter((u) => {
      const matchesSearch =
        !search.trim() ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchesRole = role === "all" || u.role === role;
      const matchesStatus = status === "all" || u.status === status;
      const matchesDistrict =
        district === "all" ||
        mmdaFilterOptions.find((d) => d.value === district)?.label ===
          u.district;

      return matchesSearch && matchesRole && matchesStatus && matchesDistrict;
    });
  }, [scopedUsers, search, role, district, status]);

  const metrics = useMemo(
    () => ({
      total: scopedUsers.length,
      citizens: scopedUsers.filter((u) => u.role === "Citizen").length,
      officials: scopedUsers.filter((u) => u.role === "Official").length,
      admins: scopedUsers.filter((u) => u.role === "Admin").length,
      pending: scopedUsers.filter((u) => u.status === "Pending Verification")
        .length,
    }),
    [scopedUsers],
  );

  const columns = [
    {
      key: "name",
      header: "User",
      render: (u) => (
        <div className="flex flex-col">
          <span className="font-medium text-slate-900">{u.name}</span>
          <span className="text-xs text-slate-400">{u.email}</span>
        </div>
      ),
    },
    {
      key: "role",
      header: "Role",
      render: (u) => <Badge variant={ROLE_BADGE[u.role]}>{u.role}</Badge>,
    },
    { key: "district", header: "District / MMDA" },
    {
      key: "status",
      header: "Status",
      render: (u) => <Badge variant={STATUS_BADGE[u.status]}>{u.status}</Badge>,
    },
    { key: "joined", header: "Joined" },
    {
      key: "reportsCount",
      header: "Reports",
      render: (u) => u.reportsCount.toLocaleString(),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Users</h1>
          <p className="text-sm text-slate-500">
            {regional
              ? "Citizens, officials, and administrators across the Ashanti Civic Platform."
              : `Citizens, officials, and administrators registered under ${user.jurisdictionName}.`}
          </p>
        </div>
        <Button variant="primary" icon={UserPlus}>
          Add Official
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <MetricCard
          label={regional ? "Total Users" : "Users in Jurisdiction"}
          value={metrics.total.toLocaleString()}
        />
        <MetricCard label="Citizens" value={metrics.citizens} />
        <MetricCard label="Officials" value={metrics.officials} />
        <MetricCard label="Admins" value={metrics.admins} />
        <MetricCard label="Pending Verification" value={metrics.pending} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col md:flex-row gap-3">
        <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name or email..."
            className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
          />
        </div>
        <Select value={role} onChange={setRole} options={roleOptions} />
        {regional && (
          <Select
            value={district}
            onChange={setDistrict}
            options={mmdaFilterOptions}
          />
        )}
        <Select
          value={status}
          onChange={setStatus}
          options={userStatusOptions}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-slate-900">
            Showing {filtered.length} of {scopedUsers.length} users
          </h2>
        </div>
        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="id"
          emptyLabel="No users match these filters."
        />
      </div>
    </div>
  );
}
