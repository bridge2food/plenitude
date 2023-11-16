import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function handler(req, res) {
  const contentDirectory = path.join(process.cwd(), 'content', 'resources')
  const fileNames = fs.readdirSync(contentDirectory)

  const allResources = fileNames.map((fileName) => {
    const filePath = path.join(contentDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
      filename: fileName,
      slug: fileName.replace('.md', ''),
      data,
      content,
    }
  })

  res.status(200).json({ resources: allResources })
}
