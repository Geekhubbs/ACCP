const WIDTH = 640;
const HEIGHT = 220;
const PAD_LEFT = 12;
const PAD_RIGHT = 12;
const PAD_TOP = 16;
const PAD_BOTTOM = 28;

function buildPoints(series, key, max) {
  const innerW = WIDTH - PAD_LEFT - PAD_RIGHT;
  const innerH = HEIGHT - PAD_TOP - PAD_BOTTOM;
  const step = series.length > 1 ? innerW / (series.length - 1) : 0;
  return series.map((d, i) => {
    const x = PAD_LEFT + step * i;
    const y = PAD_TOP + innerH - (d[key] / max) * innerH;
    return { x, y, value: d[key] };
  });
}

function pathFrom(points) {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");
}

function areaFrom(points) {
  const baseline = HEIGHT - PAD_BOTTOM;
  const line = pathFrom(points);
  return `${line} L${points[points.length - 1].x.toFixed(1)},${baseline} L${points[0].x.toFixed(1)},${baseline} Z`;
}

export default function ActivityChart({ series }) {
  const max =
    Math.max(...series.map((d) => Math.max(d.submissions, d.resolutions))) *
    1.15;
  const submissionPoints = buildPoints(series, "submissions", max);
  const resolutionPoints = buildPoints(series, "resolutions", max);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full h-auto"
      role="img"
      aria-label="Report activity and resolution velocity chart"
    >
      {/* gridlines */}
      {[0.25, 0.5, 0.75, 1].map((f) => (
        <line
          key={f}
          x1={PAD_LEFT}
          x2={WIDTH - PAD_RIGHT}
          y1={PAD_TOP + (HEIGHT - PAD_TOP - PAD_BOTTOM) * (1 - f)}
          y2={PAD_TOP + (HEIGHT - PAD_TOP - PAD_BOTTOM) * (1 - f)}
          className="stroke-slate-100"
          strokeWidth={1}
        />
      ))}

      <path d={areaFrom(submissionPoints)} className="fill-brand-orange/10" />
      <path d={areaFrom(resolutionPoints)} className="fill-brand-green/10" />

      <path
        d={pathFrom(submissionPoints)}
        fill="none"
        className="stroke-brand-orange"
        strokeWidth={2}
      />
      <path
        d={pathFrom(resolutionPoints)}
        fill="none"
        className="stroke-brand-green"
        strokeWidth={2}
      />

      {submissionPoints.map((p, i) => (
        <circle
          key={`s-${i}`}
          cx={p.x}
          cy={p.y}
          r={3}
          className="fill-brand-orange"
        />
      ))}
      {resolutionPoints.map((p, i) => (
        <circle
          key={`r-${i}`}
          cx={p.x}
          cy={p.y}
          r={3}
          className="fill-brand-green"
        />
      ))}

      {series.map((d, i) => (
        <text
          key={d.label}
          x={submissionPoints[i].x}
          y={HEIGHT - 8}
          textAnchor="middle"
          className="fill-slate-400"
          fontSize={10}
        >
          {d.label}
        </text>
      ))}

      {series.map((d, i) =>
        d.note ? (
          <text
            key={`note-${i}`}
            x={submissionPoints[i].x}
            y={PAD_TOP - 4}
            textAnchor="middle"
            className="fill-rose-500"
            fontSize={9}
            fontWeight={600}
          >
            {d.note}
          </text>
        ) : null,
      )}
    </svg>
  );
}
