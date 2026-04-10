# JCS Cast Bio CMS Starter

This starter is tailored for the GitHub Pages site at:

https://jsh2374-gif.github.io/JCS/

## What it does

- lets cast add or update their bios in `/admin/`
- uploads headshots into `images/cast/`
- stores one JSON file per performer in `data/cast-members/`
- rebuilds `data/cast.json` automatically with GitHub Actions
- powers a public `bios.html` page from the JSON data

## Important setup note

This uses Decap CMS with the GitHub backend. For live editing, you still need to set up GitHub authentication for the CMS admin.

## Files to add to your repo

- `admin/index.html`
- `admin/config.yml`
- `bios.html`
- `data/cast-members/`
- `data/cast.json`
- `images/cast/`
- `scripts/build-cast-json.js`
- `.github/workflows/build-cast-json.yml`

## Repo-specific settings already filled in

- Repo: `jsh2374-gif/JCS`
- Site URL: `https://jsh2374-gif.github.io/JCS/`
- Public image path: `/JCS/images/cast`

## Recommended next steps

1. Upload these files into the repo.
2. Put the workflow file in `.github/workflows/build-cast-json.yml`.
3. Add real headshots into `images/cast/`.
4. Replace sample JSON entries with your full cast.
5. Add a link to `/JCS/admin/` for staff only, not the public.
6. Set up Decap GitHub auth before inviting cast to use it.

## Easier fallback option

If you do not want to deal with GitHub auth yet, use a Google Form + Sheet first, and I can wire the site to read from exported JSON later.
