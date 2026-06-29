import { useEffect } from "react"

type SeoOptions = {
  title: string
  description?: string
}

const SITE_NAME = "Kingdom Builders Kids"

/**
 * Lightweight SEO helper: sets the document title and meta description per page.
 */
export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute("name", "description")
        document.head.appendChild(tag)
      }
      tag.setAttribute("content", description)
    }
  }, [title, description])
}
