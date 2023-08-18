import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Layout from '@/Components/Layout'

export default function App({ Component, pageProps }) {
  return <SessionProvider>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </SessionProvider>
}
