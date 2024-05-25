import type {Metadata} from 'next'
import './globals.css'
import Navbar from "./components/navbar"
import React from "react";

export const metadata: Metadata = {
    title: 'Office Nexus',
    description: 'Your Office Assistant',
}

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body>
          <div className="main">
              <div className='gradient'/>
          </div>
          {/**Calls the navbar to be present in all the pages */}
          <main className='app'>
              <Navbar/>
              {children}
          </main>
        </body>
        </html>
    )
}

export default RootLayout
