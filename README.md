# site-astro

Personal site built with Astro from Markdown files. GitHub Actions builds it on every push to `main`
and publishes to GitHub Pages. Live at https://siddharthshekharr.github.io/site-astro/

Requires Node 22.12 or newer to build locally (the Actions runner provides it). No client JavaScript ships.

## Add a post

1. Create `src/content/blog/<slug>.md` with front matter `title`, `description`, `date: YYYY-MM-DD`. The filename is the URL: `/blog/<slug>/`.
2. Write the body in Markdown. Headings start at `##`.
3. `git add src/content/blog/<slug>.md && git commit -m "feat(blog): add <slug>" && git push`. Live in about 90 seconds.

`draft: true` keeps a post out of the list, feed and sitemap (the repo is still public).

## Update Reading or Routine

Edit `src/content/pages/reading.md` or `routine.md`, set `updated:` to today, commit `docs(routine): ...`, push.
A page without `updated:` fails the build on purpose.

## Local build (optional)

`npm install` then `npm run build`; `npm run preview` serves `dist/`.

## Promote to the root site

1. `gh repo rename siddharthshekharr.github.io`
2. Delete the `base:` line in `astro.config.mjs`
3. Push. The site moves to https://siddharthshekharr.github.io/

## Yearly

`npx @astrojs/upgrade`, `npm run build`, push. Check the action tags in `.github/workflows/deploy.yml` against the Astro deploy guide.
