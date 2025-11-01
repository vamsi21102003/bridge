import './globals.css'

export const metadata = {
  title: 'AI Mentor - Your Personal Learning Coach',
  description: 'AI-powered mentor for learning, discipline, and personal growth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}