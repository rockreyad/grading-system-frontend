import MainNavigation from "../components/ui/MainNavigation";
import "../styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="shadow-md">
          <MainNavigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
