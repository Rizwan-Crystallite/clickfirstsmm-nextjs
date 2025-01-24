// Css
import "./globals.css"
// Fonts
import { fontSans } from "./fonts"
// Components
import { Footer, Header } from "@/components"
// Meta Data
export const metadata = {
  title: "Click First SMM",
  description: "Generated by Click First SMM",
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