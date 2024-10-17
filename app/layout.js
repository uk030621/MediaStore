// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Next.js App',
  description: 'Responsive Next.js App with Header and Footer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <a href="/" className="logo">My Media Store <span className='text-5xl'>📺</span></a>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Store</Link></li>
              <li><Link href="/services">Bonus</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>{children}</main>
        
        <footer>
          <p>© 2024 LWJ Media Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

