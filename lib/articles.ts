import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDir = path.join(process.cwd(), 'articles');

export function getArticlesData() {
  const fileNames = fs.readdirSync(articlesDir)
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const articlePath = path.join(articlesDir, fileName)
    const contents = fs.readFileSync(articlePath, 'utf-8')

    const matterResult = matter(contents)

    return {
      id, ...matterResult.data
    }
  })
  return allData
}