export default function AgreementCheckbox({
  checked,
  onChange,
  termsHref = "/terms",
  privacyHref = "/privacy",
  className = "",
}) {
  return (
    <label
      className={`flex items-start gap-2 text-sm text-gray-600 cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-brand-green"
      />
      <span>
        I agree to the{" "}
        <a href={termsHref} className="text-brand-green underline font-medium">
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href={privacyHref}
          className="text-brand-green underline font-medium"
        >
          Privacy Policy
        </a>
      </span>
    </label>
  );
}
