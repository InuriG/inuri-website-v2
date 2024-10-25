import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import FormSignGuestbook from './components/FormSignGuestbook'
// Removed GuestbookMessages import
// import GuestbookMessages from './components/GuestbookMessages'
// Removed loadMessages function as it's no longer needed
// import { collection, limit, getDocs, orderBy, query } from 'firebase/firestore'
// import { db } from '@/utils/firebase'
// import { IGuestbookMessage } from '@/types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Guestbook - Dede Ariansya',
  openGraph: {
    title: 'Guestbook - Dede Ariansya',
    url: '/guestbook',
  },
  alternates: {
    canonical: '/guestbook',
  },
}

export default async function GuestbookPage() {
  // Removed messages fetching logic
  // const messages = await loadMessages()

  return (
    <>
      <PageTitle title="G-book" />
      <FormSignGuestbook />
      {/* Removed GuestbookMessages component */}
      {/* <GuestbookMessages initialMessages={JSON.stringify(messages)} /> */}
    </>
  )
}

// Removed loadMessages function as it's no longer needed
// const loadMessages = async () => {
//   const colRef = collection(db, 'guestbook')
//   const q = query(colRef, orderBy('createdAt', 'desc'), limit(100))

//   const querySnapshot = await getDocs(q)

//   const messages: IGuestbookMessage[] = []
//   querySnapshot.forEach((doc) => {
//     messages.push({ _id: doc.id, ...doc.data() } as IGuestbookMessage)
//   })

//   return messages
// }
