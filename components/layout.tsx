import Meta from "./meta";
import ThemeToggle from "./themeToggle";
import Logo from "./logo";
import { Menu, Layout } from "antd";

const { Header, Content, Footer } = Layout;
type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const LayoutBlog = ({ preview, children }: Props) => {
  return (
    <div className="min-h-screen px-4">
      <Meta />
      <div className="flex p-3">
        <div className="flex-1 mt-2">
          <Logo />
        </div>
        <div className="flex-none p-3">
          <ThemeToggle />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default LayoutBlog;
