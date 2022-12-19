import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import App from '../components/App'
import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_domain}
        clientId={process.env.NEXT_PUBLIC_clientId}
        redirectUri={process.env.NEXT_PUBLIC_auth_redirectUri}
      >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Auth0Provider>
    </>
  )
}
