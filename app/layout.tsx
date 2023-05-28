import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
  title: 'Viztopia',
  description: 'Create and share your Fair Use Visualizers'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
