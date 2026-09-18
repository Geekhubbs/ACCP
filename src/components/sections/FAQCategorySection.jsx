import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import AccordionItem from "../ui/AccordionItem";

export default function FAQCategorySection({
  icon,
  title,
  items,
  className = "",
}) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <SectionHeading icon={icon} title={title} />
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            question={item.question}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          >
            {item.answer}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}
