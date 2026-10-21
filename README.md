# Masih Tanoursaz

My personal portfolio, hosted at **[mhtcode.github.io](https://mhtcode.github.io/)**.

[![Deploy portfolio to GitHub Pages](https://github.com/mhtcode/mhtcode.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/mhtcode/mhtcode.github.io/actions/workflows/deploy.yml)

I'm a Computer Engineering graduate based in Toronto, interested in cloud, DevOps, and MLOps engineering. I work on containerized services, delivery automation, observability, and applied AI solutions. My academic work explores sustainable cloud systems and intelligent decision-making agents.

The site has two views with their own summaries, section order, and downloads:

- **[Engineering](https://mhtcode.github.io/)** leads with cloud infrastructure, DevOps, MLOps, applied AI projects, skills, and certifications. It includes my engineering resume.
- **[Academic](https://mhtcode.github.io/academic/)** leads with research, education, teaching, and academic projects. It includes my academic CV.

Both routes use the same verified career data, with separate content selections, section names, and priorities. Academic detail pages stay under `/academic/`; engineering pages keep their original URLs. The site is built with **Astro, TypeScript, and Tailwind CSS**, with light and dark themes and keyboard-accessible sections. The pinned header holds the profile links and theme control; on phones, it also opens a section drawer.

My portfolio is the broader picture of my work and interests. I keep resumes separate and tailor them to each role.

Teaching has a separate card and detail page for each course, with responsibilities, tools, and context beyond the short resume summary. The section gives the overall teaching period; individual course dates are included only when available. Both profiles include my volunteer work.

On small screens, scrolling away from the top smoothly reduces the pinned header to the portfolio title and menu icon. The profile links and theme control return only at the top of the page. The transition respects reduced-motion preferences.

## Run locally

Requires Node.js 24.

```sh
git clone https://github.com/mhtcode/mhtcode.github.io.git
cd mhtcode.github.io
npm ci
npm run dev
```

Open [localhost:4321](http://localhost:4321) to view the site.

## Build and check

```sh
npm run check
```

This builds the site and checks the generated pages, navigation targets, local assets, and resume PDF. The production output is written to `dist/`.

To preview the production build:

```sh
npm run preview
```

## Content and structure

| Path                          | Purpose                                                     |
| ----------------------------- | ----------------------------------------------------------- |
| `src/config.ts`               | Contact links, focused summaries, view order, and downloads |
| `src/portfolio.ts`            | All portfolio sections, entries, dates, and details         |
| `src/profiles.ts`             | Route-specific content selection and ordering               |
| `src/components/`             | Shared header, profile, cards, icons, and footer            |
| `src/pages/`                  | Homepage and individual resume pages                        |
| `src/styles/`                 | Theme, colors, and responsive styling                       |
| `public/`                     | Resume PDF, profile photo, and static assets                |
| `scripts/check-build.mjs`     | Checks for the generated site                               |
| `scripts/generate-resumes.py` | Academic CV baseline generator                              |

To update career information, edit an entry in `src/portfolio.ts`. Each entry keeps its own stable `slug`, dates, summary, and details together. In `src/config.ts`, each profile controls its section order, section names, hidden entries, introductions, and download. Add a new section to the relevant profile's `sectionOrder`; keep existing slugs when changing wording so shared links continue to work.

Project work periods come from my records and resumes. GitHub repository creation and commit dates help fill gaps; timeline notes distinguish original project work from later publication or archival dates.

The engineering download is my uploaded resume PDF, preserved as supplied. I replace it directly when I have a new version. The academic CV can be regenerated from the shared content with Python 3 and ReportLab:

```sh
python -m pip install reportlab
npm run resumes
```

The generator updates only the academic CV and leaves my uploaded engineering resume untouched. Both PDFs are committed files; the deployment workflow publishes the checked-in versions. I can replace either PDF or change a view's download link in `src/config.ts` independently.

## Deployment

Changes pushed to `main` are built and checked by GitHub Actions, then published to GitHub Pages. The [deployment workflow](.github/workflows/deploy.yml) handles the full process.

## Contact

[Email](mailto:tanoursazmasih@gmail.com) · [LinkedIn](https://www.linkedin.com/in/masih-tanoursaz) · [GitHub](https://github.com/mhtcode)

## License

Website code is available under the [MIT License](LICENSE.md), with the applicable [theme license](THEME-LICENSE.md) retained. My resume, photographs, and personal content are not covered by these source-code licenses.
