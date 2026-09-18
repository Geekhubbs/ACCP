export default function ProcessStepCard({
  number,
  title,
  description,
  className = "",
}) {
  return (
    <div
      className={`bg-white/10 rounded-xl p-5 flex flex-col gap-3 ${className}`}
    >
      <div className="h-8 w-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <h4 className="text-base font-bold text-white">{title}</h4>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  );
}
