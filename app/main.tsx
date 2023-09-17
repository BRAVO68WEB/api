import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

interface SiteData {
  title: string
  children?: any
}

const Layout = (props: SiteData) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>${props.title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico">
    </head>
    <body>
      ${props.children}
    </body>
  </html>`

const Content = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <h1>Hello from {props.name}</h1>
  </Layout>
)

app.get('/', (c) => {
  const name = 'B68 API'
  const props = {
    name: name,
    siteData: {
      title: 'B68 API',
    },
  }
  return c.html(<Content {...props} />)
})

export default app