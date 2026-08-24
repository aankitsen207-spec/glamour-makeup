import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata = {
  title: 'Glamour Makeup - Premium Beauty Products',
  description: 'Discover the best glamour makeup products for professional beauty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
