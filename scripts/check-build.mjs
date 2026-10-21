import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const html = readFileSync("dist/index.html", "utf8");
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
assert.equal(
  new Set(detailRoutes).size,
  detailRoutes.length,
  "Every entry must have a unique detail URL",
);
assert.equal(
  pages.length,
  detailRoutes.length + 1,
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
