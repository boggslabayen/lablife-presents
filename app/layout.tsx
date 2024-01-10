import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunitosans = Nunito_Sans({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Lablife Presents: The Safe place for Ideas',
//   description: 'a captivating 2-hour journey of creative insights with industry maestros',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/public/favicon.ico' sizes="any"/>
      </head>
      <body className={nunitosans.className}>{children}</body>
    </html>
  )
}
