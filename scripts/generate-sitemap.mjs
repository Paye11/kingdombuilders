import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const contentPath = join(root, "src/lib/content.ts")
const sitePath = join(root, "src/lib/site.ts")
const outputPath = join(root, "public/sitemap.xml")
const robotsPath = join(root, "public/robots.txt")

const siteSource = readFileSync(sitePath, "utf8")
const siteUrlMatch = siteSource.match(/url:\s*"([^"]+)"/)
const siteUrl = siteUrlMatch?.[1]?.replace(/\/$/, "")

if (!siteUrl) {
  throw new Error("Could not read site.url from src/lib/site.ts")
}

const contentSource = readFileSync(contentPath, "utf8")
const programsBlock = contentSource.match(/export const programs[\s\S]*?^\]/m)?.[0] ?? ""
const programSlugs = [...programsBlock.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1])

const staticPages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/our-team", changefreq: "monthly", priority: "0.7" },
  { path: "/success-stories", changefreq: "monthly", priority: "0.8" },
  { path: "/gallery", changefreq: "monthly", priority: "0.7" },
  { path: "/get-involved", changefreq: "monthly", priority: "0.8" },
  { path: "/donate", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
]

const programPages = programSlugs.map((slug) => ({
  path: `/programs/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
}))

const lastmod = new Date().toISOString().slice(0, 10)

const urls = [...staticPages, ...programPages]
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(outputPath, sitemap, "utf8")

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

writeFileSync(robotsPath, robots, "utf8")
console.log(`Generated sitemap with ${staticPages.length + programPages.length} URLs at public/sitemap.xml`)
