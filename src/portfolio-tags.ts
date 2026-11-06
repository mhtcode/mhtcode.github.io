import type { ResumeItem } from "./portfolio";

const sectionTags: Record<string, string> = {
  education: "Education",
  certifications: "Certification",
  research: "Research",
  "teaching-assistant": "Teaching",
  community: "Volunteer",
  skills: "Skills",
  experience: "Experience",
  projects: "Project",
};

export function getPortfolioTag(item: ResumeItem, category: string) {
  return item.tag ?? sectionTags[category];
}
