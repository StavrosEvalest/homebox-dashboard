import 'styles/globals.css'

export const metadata = {
  title: 'Homebox Dashboard',
  description: 'Simplify Bills. Amplify Life.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
