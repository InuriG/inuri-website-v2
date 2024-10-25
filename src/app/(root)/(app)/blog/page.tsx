import type { Metadata } from 'next'
import { getBlogPosts } from '@/utils/get-blog-posts'
import PageTitle from '../components/PageTitle'
import BlogPostItem from './components/BlogPostItem'

export const metadata: Metadata = {
  title: 'Blog - Inuri Gunasekara',
  openGraph: {
    title: 'Blog - Inuri Gunasekara',
    url: '/blog',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default async function BlogPage() {
  const blogs = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  return (
    <>
      <PageTitle title="Blog" />
      <ul className="grid grid-cols-1 gap-3 md:mb-5">
        {blogs.map((post) => (
          <li key={post.slug}>
            <BlogPostItem post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}
