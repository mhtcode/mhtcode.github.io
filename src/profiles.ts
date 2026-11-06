import { resumeSections } from "./portfolio.ts";
import { portfolioProfiles, type ProfileKind } from "./config.ts";

const projectMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const seasonMonths: Record<string, number> = {
  Winter: 1,
  Spring: 3,
  Summer: 6,
  Fall: 9,
};

function projectStart(date?: string) {
  const [, period, year] = date?.match(/^(?:(\w+) )?(\d{4})$/) ?? [];
  if (!year) return 0;
  return (
    Number(year) * 12 +
    (seasonMonths[period] ?? projectMonths.indexOf(period) + 1)
  );
}

function orderBySlug<T extends { slug: string }>(
  items: T[],
  order: string[],
): T[] {
  const rank = (slug: string) => {
    const index = order.indexOf(slug);
    return index === -1 ? order.length : index;
  };
  return [...items].sort((a, b) => rank(a.slug) - rank(b.slug));
}
export function getProfileSections(profile: ProfileKind) {
  const content = portfolioProfiles[profile];
  return content.sectionOrder.map((slug) => {
    const section = resumeSections.find((entry) => entry.slug === slug);
    if (!section) throw new Error(`Unknown portfolio section: ${slug}`);
    const order =
      section.slug === "skills"
        ? content.skillOrder
        : section.slug === "projects"
          ? content.projectOrder
          : section.slug === "experience"
            ? content.experienceOrder
            : section.slug === "teaching-assistant"
              ? content.teachingOrder
              : [];
    const items = orderBySlug(section.items, order).filter(
      (item) => !content.hiddenItems.includes(item.slug),
    );
    if (section.slug === "projects") {
      items.sort((a, b) => projectStart(b.start) - projectStart(a.start));
    }
    return {
      ...section,
      name:
        (content.sectionNames as Record<string, string>)[section.slug] ||
        section.name,
      items,
    };
  });
}
