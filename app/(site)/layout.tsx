import { Footer, Navbar } from '@/components'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adecodes - Developer & Designer',
  description: 'Adecode - Adegoke Bestman',
}


export default function RootLayout({

  children,
}: {
  children: React.ReactNode
})
{;

  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <div className='overflow-hidden mx-auto flex-col align-center justify-center py-6 md:px-5 px-2 xl:px-0 '>

        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
