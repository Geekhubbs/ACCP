import { useState, useMemo } from "react";
import SiteHeader from "../components/layout/SiteHeader";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import SearchBar from "../components/ui/SearchBar";
import CategoryFilterBar from "../components/sections/CategoryFilterBar";
import FAQCategorySection from "../components/sections/FAQCategorySection";
import { faqCategories, faqSections } from "../data/faqItems";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleSections = useMemo(() => {
    return faqSections.filter((section) => {
      const matchesCategory =
        activeCategory === "all" || section.id === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        section.title.toLowerCase().includes(query) ||
        section.items.some(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query),
        )
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SiteHeader />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find clear answers on reporting community issues, statutory resolution timelines, privacy protections, and ticket tracking across all 43 Assemblies in the Ashanti Region."
      >
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSubmit={setSearchQuery}
          placeholder="Search questions (e.g., SLA, anonymous reporting, KMA, road repairs, GWCL)..."
          buttonLabel="Find Answers"
        />
      </PageHero>

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 pb-16 flex flex-col gap-10">
        <CategoryFilterBar
          categories={faqCategories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {visibleSections.length > 0 ? (
          visibleSections.map((section) => (
            <FAQCategorySection
              key={section.id}
              icon={section.icon}
              title={section.title}
              items={section.items}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">
            No matching questions found. Try a different search term.
          </p>
        )}
      </main>

      <Footer variant="full" />
    </div>
  );
}
