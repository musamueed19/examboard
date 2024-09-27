import "./globals.css";
import HomeLayout from "./HomeLayout";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* {children} */}
        <HomeLayout children={children} activeTab={'home'} />
      </body>
    </html>
  );
}