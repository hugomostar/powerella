import glob from 'fast-glob'
import * as path from 'path'

export interface Article {
  title: string
  description: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(articleFilename: string, locale: string): Promise<ArticleWithSlug & { component: any }> {
  let { article, default: component } = await import(
    `../../content/articles/${locale}/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
    component,
  }
}

export async function getAllArticles(locale: string): Promise<(ArticleWithSlug & { component: any })[]> {
  let articleFilenames = await glob(['*.mdx', '*/page.mdx'], {
    cwd: `content/articles/${locale}`,
  })

  let articles = await Promise.all(articleFilenames.map((articleFilename) => importArticle(articleFilename, locale)))

  return articles.sort((a, z) => new Date(z.date).getTime() - new Date(a.date).getTime())
}

export async function getArticle(slug: string, locale: string) {
  let articles = await getAllArticles(locale);
  return articles.find((article) => article.slug === slug)
}
