import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dedeard from '@/assets/dedeard.jpg'
import { RESUME_URL } from '@/constans/common'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'About - Inuri Gunasekar',
  openGraph: {
    title: 'About - Inuri Gunasekara',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={dedeard} alt="Foto dede ariansya" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">I’m Inuri Gunasekara</h2>
          <div className="mb-6">
            <p className="mb-1">
              ICT Undergraduate at the University of Sri Jayewardenapura, Sri Lanka. <br /> I focus on crafting code that not only meets technical requirements but is also intuitive and accessible for future developers.
            </p>
          </div>           
          <h2 className="mb-2 text-xl font-bold">Tech I love</h2>
          <div className="mb-6">
            <p className="mb-1">Python, TypeScript, Next.js, React, JavaScript, Tailwind CSS.</p>
          </div>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
