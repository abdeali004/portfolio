# Abdeali Stationwala Portfoilio Website

# About the Developer
Hi, my name is Abdeali Stationwala and I am a Software Engineer. I am the creator and developer of this Portfolio.

## Deploy checklist

CSS/JS assets are served with a long, immutable cache (`netlify.toml`) and are safe to
cache that aggressively **only** because every `<link>`/`<script>` reference to a local
`css/`/`js/` file in `index.html` and `certificates.html` carries a `?v=X.Y.Z` query
string. Whenever a deploy changes any file under `css/` or `js/`, bump that version
string on every tag referencing it — otherwise returning visitors keep the old cached
file for up to a year.
