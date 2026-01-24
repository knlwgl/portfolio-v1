import path from 'path'
import { type Metadata, getMDXData } from 'app/lib/utils'

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}