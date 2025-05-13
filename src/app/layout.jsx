import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Doc50'
}

const navbar = (
  <Navbar
    logo={<b>Doc50</b>}
  />
)
const footer = (
  <Footer style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
    <div>© {new Date().getFullYear()} Doc50</div>
    <div>These docs are unofficial. Doc50 is not endorsed by or otherwise affiliated with Harvard, EdX or CS50.</div>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/727021/doc50/tree/main"
          footer={footer}
          navigation={false}
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}