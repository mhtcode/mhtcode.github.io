# Masih Tanoursaz

My personal portfolio, hosted at **[mhtcode.github.io](https://mhtcode.github.io/)**.

[![Deploy portfolio to GitHub Pages](https://github.com/mhtcode/mhtcode.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/mhtcode/mhtcode.github.io/actions/workflows/deploy.yml)

I'm a Computer Engineering graduate based in Toronto. I work on software, cloud infrastructure, applied AI, and data systems, with interests in sustainable computing research and product development. This website brings together my projects, research, hands-on experience, AWS certifications, teaching, and community work.

The site is built with **Astro, TypeScript, and Tailwind CSS**. It includes light and dark themes, eight portfolio sections, individual detail pages, and a downloadable DevOps resume.

My portfolio is the broader picture of my work and interests. I keep resumes separate and tailor them to each role.

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

| Path                      | Purpose                                             |
| ------------------------- | --------------------------------------------------- |
| `src/config.ts`           | Profile, contact links, and resume download         |
| `src/portfolio.ts`        | All portfolio sections, entries, dates, and details |
| `src/components/`         | Shared header, profile, cards, icons, and footer    |
| `src/pages/`              | Homepage and individual resume pages                |
| `src/styles/`             | Theme, colors, and responsive styling               |
| `public/`                 | Resume PDF, profile photo, and static assets        |
| `scripts/check-build.mjs` | Checks for the generated site                       |

To update the portfolio, edit an entry in `src/portfolio.ts`. Each entry keeps its own stable `slug`, dates, summary, and details together. Adding or reordering entries also updates the homepage cards and detail pages. Edit `src/config.ts` for the introduction, contact links, or resume download. Keep existing slugs when changing wording so shared links continue to work.

The downloadable resume is independent of the portfolio entries. I can replace that PDF, or point the download to another version, without narrowing the rest of the site to one job.

## Deployment

Changes pushed to `main` are built and checked by GitHub Actions, then published to GitHub Pages. The [deployment workflow](.github/workflows/deploy.yml) handles the full process.

## Contact

[Email](mailto:tanoursazmasih@gmail.com) · [LinkedIn](https://www.linkedin.com/in/masih-tanoursaz) · [GitHub](https://github.com/mhtcode)

## License

Website code is available under the [MIT License](LICENSE.md), with the applicable [theme license](THEME-LICENSE.md) retained. My resume, photographs, and personal content are not covered by these source-code licenses.
