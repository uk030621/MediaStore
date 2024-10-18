// app/layout.js
import './globals.css';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'; // Import the CSS module

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
            {/*<a href="/" className="logo">Media Library <span className='text-5xl'>📺</span></a>*/}
            <Image
            className='logo'
              src="/lion.jpg"
              width={100}
              height={70}
              alt="Picture of the author"
            />
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Library</Link></li>
              <li><Link href="/services">Bonus</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>{children}</main>
        
        <footer>
          <p>© 2024 LWJ Media Library. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

