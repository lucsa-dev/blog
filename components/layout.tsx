import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import ThemeToggle from './themeToggle'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <div className="p-3 fixed right-0 top-0">
          <ThemeToggle />
        </div>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
