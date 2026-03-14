import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

const BASE_URL = 'https://nworahebukaaugustus.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `${BASE_URL}/project/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...projectUrls,
    {
      url: `${BASE_URL}/admin`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ]
}
