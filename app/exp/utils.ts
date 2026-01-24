import path from 'path'
import { type Metadata, getMDXData } from 'app/lib/utils'

export function getExperiences() {
  return getMDXData(path.join(process.cwd(), 'app', 'exp', 'posts'))
}