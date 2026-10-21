import { resumeSections } from "./portfolio.ts";
import { portfolioProfiles, type ProfileKind } from "./config.ts";
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
    return {
      ...section,
      name:
        (content.sectionNames as Record<string, string>)[section.slug] ||
        section.name,
      items: orderBySlug(section.items, order).filter(
        (item) => !content.hiddenItems.includes(item.slug),
      ),
    };
  });
}
