import fs from 'fs'
import path from 'path'
import { type Metadata, getMDXData } from 'app/lib/utils'

export function getProjects() {
  return getMDXData(path.join(process.cwd(), 'app', 'projects', 'projs'))
}