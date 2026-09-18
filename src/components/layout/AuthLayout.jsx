import BackLink from "../ui/BackLink";
import authPattern from "../../assets/images/auth-side-pattern.jpg";

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <div
        className="hidden md:flex md:w-[58%] h-full bg-cover bg-center items-center justify-center relative"
        style={{ backgroundImage: `url(${authPattern})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        {(title || subtitle) && (
          <div className="relative z-10 text-center px-10 flex flex-col gap-3">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-white/80 text-base max-w-sm mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="w-full md:w-[42%] h-full flex flex-col bg-white">
        <div className="px-6 md:px-10 pt-6 shrink-0">
          <BackLink />
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-10 pb-10">
          <div className="w-full flex flex-col gap-6 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
