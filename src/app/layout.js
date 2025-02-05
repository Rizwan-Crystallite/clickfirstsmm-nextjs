// Css
import "./build.css"
// Fonts
import { fontSans } from "./fonts"
// Components
import { Footer, Header } from "@/components"
// Meta Data
export const metadata = {
  metadataBase: new URL('https://www.clickfirstsmm.com'),
  title: "Leading Social Media Marketing Agency in US - ClickfirstSMM",
  description: "Elevate your brand with our expert social media marketing agency to boost engagement, increase followers, and drive conversions. Connect with us",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased font-sans font-normal`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}