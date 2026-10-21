import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { resumeSections } from "../src/portfolio.ts";
import { portfolioProfiles } from "../src/config.ts";

const html = readFileSync("dist/index.html", "utf8");
assert.ok(
  existsSync("dist/academic/index.html"),
  "A separate academic portfolio must be generated",
);
const academic = readFileSync("dist/academic/index.html", "utf8");
assert.match(html, /Cloud, DevOps &amp; MLOps Engineer<\/p>/);
assert.match(academic, /Cloud Computing &amp; Applied AI Research/);
assert.match(html, />About me<\/h2>/);
assert.doesNotMatch(
  academic,
  /href="\/research\/research-interests\/" class="resume-card/,
);
for (const content of [html, academic]) {
  assert.match(content, /id="section-menu-toggle"/);
  assert.match(content, /<dialog[^>]+id="section-drawer"/);
  assert.match(content, /aria-label="Close sections menu"/);
}
assert.match(html, /data-default-section="experience"/);
assert.match(academic, /data-default-section="research"/);
assert.match(academic, /Masih_Tanoursaz_Academic_CV\.pdf/);
assert.doesNotMatch(academic, /href="\/Masih_Tanoursaz_Resume_DevOps\.pdf"/);
assert.match(html, /href="\/academic\/"/);
assert.match(academic, /href="\/"/);
for (const [name, content] of [
  ["Engineering", html],
  ["Academic", academic],
]) {
  const identifiers = [...content.matchAll(/\bid="([^"]+)"/g)].map(
    (match) => match[1],
  );
  assert.equal(
    identifiers.length,
    new Set(identifiers).size,
    `${name}: unique IDs`,
  );
  const categories = [...content.matchAll(/data-tab="([^"]+)"/g)].map(
    (match) => match[1],
  );
  assert.equal(
    new Set(categories).size,
    categories.length,
    `${name}: unique categories`,
  );
  for (const category of categories) {
    assert.ok(
      content.includes(`id="tab-${category}"`),
      `${name}: missing ${category} panel`,
    );
    assert.ok(
      content.includes(`aria-controls="tab-${category}"`),
      `${name}: missing panel relationship`,
    );
  }
}
for (const project of resumeSections.find(
  (section) => section.slug === "projects",
).items) {
  assert.ok(project.start, `Project date required: ${project.title}`);
  assert.ok(
    readFileSync(`dist/projects/${project.slug}/index.html`, "utf8").includes(
      project.start,
    ),
    `Date must appear on ${project.title}`,
  );
}
assert.ok(
  readFileSync("dist/Masih_Tanoursaz_Academic_CV.pdf")
    .subarray(0, 5)
    .equals(Buffer.from("%PDF-")),
  "Academic CV must be a valid PDF",
);
assert.match(html, /<title>Masih Tanoursaz/);
assert.match(html, /tanoursazmasih@gmail\.com/);
assert.match(html, /role="tablist"/, "Resume category tabs must be present");
assert.match(html, /id="theme-toggle"/, "Theme toggle must be present");
assert.match(html, /aria-controls="tab-education"/);
assert.ok(
  existsSync("dist/education/computer-engineering/index.html"),
  "Education details must be generated",
);
assert.equal(
  (html.match(/<h1[\s>]/g) || []).length,
  1,
  "Exactly one primary heading",
);
assert.doesNotMatch(
  html,
  /Lorem ipsum|your-email@example|Senior Software Engineer|Tech Company/,
);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(ids.length, new Set(ids).size, "Section IDs must be unique");
for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
  if (href.startsWith("#"))
    assert.ok(ids.includes(href.slice(1)), `Missing anchor ${href}`);
  else if (href.startsWith("/") && !href.startsWith("//")) {
    assert.ok(
      existsSync(resolve("dist", href.slice(1).split("#")[0])),
      `Missing asset ${href}`,
    );
  }
}
assert.ok(
  readFileSync("dist/Masih_Tanoursaz_Resume_DevOps.pdf")
    .subarray(0, 5)
    .equals(Buffer.from("%PDF-")),
);
assert.match(html, /https:\/\/mhtcode\.github\.io\//);
const tabs = [...html.matchAll(/data-tab="([^"]+)"/g)].map((match) => match[1]);
assert.ok(tabs.length > 0, "Portfolio sections must be present");
assert.equal(new Set(tabs).size, tabs.length, "Unique categories");
for (const tab of tabs) {
  assert.ok(ids.includes(`tab-${tab}`), `Missing panel for ${tab}`);
  assert.ok(ids.includes(`tab-button-${tab}`), `Missing tab button for ${tab}`);
}
function findPages(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? findPages(resolve(dir, entry.name))
      : entry.name.endsWith(".html")
        ? [resolve(dir, entry.name)]
        : [],
  );
}
const pages = findPages(resolve("dist"));
const detailRoutes = [
  ...html.matchAll(/<a href="([^"]+)" class="resume-card /g),
].map((match) => match[1]);
const academicRoutes = [
  ...academic.matchAll(/<a href="([^"]+)" class="resume-card /g),
].map((match) => match[1]);
assert.deepEqual(
  new Set(academicRoutes),
  new Set(
    resumeSections.flatMap((section) =>
      section.items
        .filter(
          (item) => !portfolioProfiles.academic.hiddenItems.includes(item.slug),
        )
        .map((item) => `/${section.slug}/${item.slug}/`),
    ),
  ),
  "Academic view must show the intended entries without the duplicate interests card",
);
assert.equal(
  detailRoutes.length,
  resumeSections.reduce((count, section) => count + section.items.length, 0),
  "Every shared entry must appear in the portfolio",
);
assert.equal(
  new Set(detailRoutes).size,
  detailRoutes.length,
  "Every entry must have a unique detail URL",
);
assert.equal(
  pages.length,
  detailRoutes.length + 2,
  "Every portfolio entry must produce a detail page",
);
for (const page of pages) {
  const content = readFileSync(page, "utf8");
  assert.equal(
    (content.match(/<h1[\s>]/g) || []).length,
    1,
    `One primary heading in ${page}`,
  );
  assert.doesNotMatch(
    content,
    /Lorem ipsum|your-email@example|linkedin\.com\/in\/yourprofile/,
    `Only Masih's resume content in ${page}`,
  );
  for (const [, path] of content.matchAll(/(?:href|src)="(\/[^\"]*)"/g)) {
    const [pathname, hash] = path.split("#");
    const target = resolve("dist", pathname.replace(/^\//, ""));
    assert.ok(
      existsSync(target),
      `Missing local route or asset: ${path} in ${page}`,
    );
    if (hash) {
      const destination =
        pathname === "/"
          ? html
          : readFileSync(resolve(target, "index.html"), "utf8");
      assert.ok(
        destination.includes(`id="${hash}"`) ||
          destination.includes(`data-tab="${hash}"`),
        `Unknown section ${path}`,
      );
    }
  }
}
console.log(
  `Build checks passed: ${pages.length} pages, ${tabs.length} tabs, personal content, local routes, images, metadata, headings, resume PDF.`,
);
