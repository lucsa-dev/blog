import Meta from './meta'
import ThemeToggle from './themeToggle'
import Logo from './logo'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return <>
      <Meta />
      <div className="min-h-screen">
        <div className="p-3 fixed right-0 top-0">
          <ThemeToggle />
        </div>
        <main>
            <div className="">
            {children}
              </div>
          </main>
      </div>
    </>
}

export default Layout
