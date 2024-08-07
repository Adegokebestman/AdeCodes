import { Footer, Navbar } from '@/components'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const NEXT_PUBLIC_GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const metadata: Metadata = {
  title: 'Adegoke Bestman - Frontend Developer & UI Designer',
  description: 'Adegoke Bestman personal portfolio website',
}


export default function RootLayout({

  children,
}: {
  children: React.ReactNode
})
{;

  return (
    <html lang="en">
      {/* Google tag */}
      <script
        strategy="afterInteractive"
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
       <script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body className={inter.className}>
      <Navbar />
        <div className='overflow-hidden mx-auto flex-col align-center justify-center py-6 md:px-5 px-2 xl:px-0 '>

        {children}
        {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
