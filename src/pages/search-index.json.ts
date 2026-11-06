import { portfolioProfiles, siteConfig } from "../config";
import { resumeSections } from "../portfolio";
import { getPortfolioTag } from "../portfolio-tags";
import { getProfileSections } from "../profiles";

export interface SearchEntry {
  title: string;
  section: string;
  tag?: string;
  href: string;
  academicHref?: string;
  body: string;
}

export function GET() {
  const engineering = getProfileSections("engineering");
  const academic = getProfileSections("academic");
  const entries: SearchEntry[] = [
    ...Object.entries(portfolioProfiles).map(([profile, content]) => ({
      title: content.label,
      section: siteConfig.name,
      href: profile === "academic" ? "/academic/" : "/",
      body: [
        content.summary,
        content.subtitle,
        siteConfig.location,
        siteConfig.social.email,
        ...("researchInterests" in content ? content.researchInterests : []),
      ].join(" "),
    })),
    ...engineering.flatMap((section) => {
      if (!section.description) return [];
      return [
        {
          title: section.name,
          section: "Portfolio section",
          href: `/#${section.slug}`,
          academicHref: academic.some(({ slug }) => slug === section.slug)
            ? `/academic/#${section.slug}`
            : undefined,
          body: section.description,
        },
      ];
    }),
    ...resumeSections.flatMap((section) => {
      const engineeringSection = engineering.find(
        ({ slug }) => slug === section.slug,
      );
      const academicSection = academic.find(
        ({ slug }) => slug === section.slug,
      );
      return section.items.map((item) => {
        const href = `/${section.slug}/${item.slug}/`;
        const inAcademic = academicSection?.items.some(
          ({ slug }) => slug === item.slug,
        );
        const academicHref = inAcademic ? `/academic${href}` : undefined;
        const inEngineering = engineeringSection?.items.some(
          ({ slug }) => slug === item.slug,
        );
        return {
          title: item.title,
          section: engineeringSection?.name ?? section.name,
          tag: getPortfolioTag(item, section.slug),
          href: !inEngineering && academicHref ? academicHref : href,
          academicHref,
          body: [
            item.organization,
            item.description,
            item.start,
            item.end,
            ...(item.paragraphs ?? []),
            ...(item.bullets ?? []),
            ...(item.skills ?? []),
          ]
            .filter(Boolean)
            .join(" "),
        };
      });
    }),
  ];
  return Response.json(entries);
}
