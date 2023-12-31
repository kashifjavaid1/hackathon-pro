import './globals.css'
import { Inter } from 'next/font/google'
import Header from './(components)/header/header'
import Sidebar from './(components)/sidebar/sidebar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Student Management System',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Header/>
      <Sidebar/>
      <body className={inter.className}>{children}
     
      </body>
    </html>
  )
}
