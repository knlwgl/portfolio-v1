import { getBlogPosts } from 'app/blog/utils'
import { getProjects } from 'app/projects/utils'
import { getExperiences } from 'app/exp/utils'

export const baseUrl = 'localhost:3000'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.startedOn,
  }))

  let projects = getProjects().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: post.metadata.startedOn,
  }))

  let exps = getExperiences().map((post) => ({
    url: `${baseUrl}/exp/${post.slug}`,
    lastModified: post.metadata.startedOn,
  }))

  let routes = ['', '/blog', '/projects', '/exp'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs, ...projects, ...exps]
}
