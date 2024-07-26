import { Footer, Navbar } from '@/components'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adegoke Bestman - Developer & Designer',
  description: 'Adegoke Bestman personal portfolio',
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
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id=
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
      <Navbar />
        <div className='overflow-hidden mx-auto flex-col align-center justify-center py-6 md:px-5 px-2 xl:px-0 '>

        {children}
        {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
