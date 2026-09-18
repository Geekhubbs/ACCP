const HOVER_STYLES = "transition-shadow duration-200 hover:shadow-md";

export default function Card({
  children,
  hoverable = false,
  bordered = true,
  className = "",
  ...props
}) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-sm ${
        bordered ? "border border-gray-200" : ""
      } ${hoverable ? HOVER_STYLES : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

Card.Image = function CardImage({ src, alt = "", className = "", ...props }) {
  return (
    <div className="relative w-full h-40 bg-gray-100">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        {...props}
      />
    </div>
  );
};

Card.Overlay = function CardOverlay({
  children,
  position = "top-left",
  className = "",
}) {
  const POSITION_STYLES = {
    "top-left": "top-3 left-3",
    "top-right": "top-3 right-3",
    "bottom-left": "bottom-3 left-3",
    "bottom-right": "bottom-3 right-3",
  };
  return (
    <div className={`absolute ${POSITION_STYLES[position]} ${className}`}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className = "", ...props }) {
  return (
    <div className={`p-5 ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Icon = function CardIcon({ children, className = "" }) {
  return (
    <div
      className={`inline-flex items-center justify-center h-10 w-10 rounded-lg bg-brand-green/10 text-brand-green mb-4 ${className}`}
    >
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ children, className = "", ...props }) {
  return (
    <h3
      className={`text-lg font-semibold text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

Card.Description = function CardDescription({
  children,
  className = "",
  ...props
}) {
  return (
    <p className={`text-sm text-gray-600 mt-1 ${className}`} {...props}>
      {children}
    </p>
  );
};

Card.Footer = function CardFooter({ children, className = "", ...props }) {
  return (
    <div className={`p-5 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};
