
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const clerkFrontendApi = 'your-clerk-frontend-api';
  return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
  )
}
