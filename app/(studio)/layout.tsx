import '../globals.css'
// import type { Metadata } from 'next'


// export const metadata: Metadata = {
//   title: 'Admin Panel - Adecodes',
//   description: 'Admin Panel - Adegoke Bestman',
// }

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>


          {children}

      </body>
    </html>
  )
}
