import { Search, Bell, User } from "lucide-react";

export default function AdminTopbar({ regionLabel = "Ashanti Region • ARCC Authorized" }) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-3">
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
        <Search size={16} className="text-slate-400" />
        <input
          type="text"
          placeholder="Search tickets, MMDAs, officials, rules..."
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      <span className="hidden shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 md:inline-flex">
        {regionLabel}
      </span>

      <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100">
        <Bell size={18} />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500" />
      </button>

      <div className="flex items-center gap-2 rounded-full bg-slate-50 px-2 py-1.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-white">
          <User size={14} />
        </div>
        <span className="text-sm font-medium text-slate-700">Administrator</span>
      </div>
    </header>
  );
}