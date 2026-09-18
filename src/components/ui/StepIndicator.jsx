export default function StepIndicator({ steps, currentStep, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isDone = stepNumber < currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step} className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div
                className={`
                  h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                  ${isActive ? "bg-brand-orange text-white" : ""}
                  ${isDone ? "bg-white text-brand-green" : ""}
                  ${!isActive && !isDone ? "bg-white/20 text-white" : ""}
                `}
              >
                {stepNumber}
              </div>
              <span
                className={`text-sm font-medium ${
                  isActive || isDone ? "text-white" : "text-white/60"
                }`}
              >
                {step}
              </span>
            </div>
            {!isLast && <div className="w-8 h-px bg-white/30" />}
          </div>
        );
      })}
    </div>
  );
}
