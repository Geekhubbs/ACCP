import Card from "../ui/Card";

export default function StageCard({
  number,
  title,
  description,
  numberVariant = "default",
  media,
  className = "",
}) {
  const numberStyles =
    numberVariant === "accent"
      ? "bg-brand-orange text-white"
      : "bg-brand-green text-white";

  return (
    <Card className={`p-0 ${className}`}>
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        <div
          className={`shrink-0 h-10 w-10 rounded-lg flex items-center justify-center font-bold text-sm ${numberStyles}`}
        >
          {number}
        </div>

        <div className="flex-1 flex flex-col gap-1">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {media && <div className="w-full md:w-64 shrink-0">{media}</div>}
      </div>
    </Card>
  );
}
