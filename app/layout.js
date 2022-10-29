import Link from "next/link"
import {Inter} from "@next/font/google"

const inter = Inter()

export default function RootLayout({ children }) {
  return <html className={inter.className}>
    <head>
      <title>Kodeapik | Home</title>
    </head>
    <body>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </nav>
      <div>
        {children}
      </div>
      </body>
  </html>
}
