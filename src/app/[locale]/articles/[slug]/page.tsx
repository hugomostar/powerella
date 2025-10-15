import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { getAllArticles, getArticle } from '@/lib/articles'

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
    return await getAllArticles(locale)
}

export async function generateMetadata({ params }: { params: { slug: string, locale: string } }): Promise<Metadata | undefined> {
    let article = await getArticle(params.slug, params.locale)

    if (!article) {
        return
    }

    return {
        title: article.title,
        description: article.description,
    }
}

export default async function ArticlePage({ params: paramsPromise }: { params: Promise<{ slug: string, locale: string }> }) {
    const params = await paramsPromise
    let article = await getArticle(params.slug, params.locale)

    if (!article) {
        notFound()
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {article.component({ isRssFeed: false })}
        </Suspense>
    )
}