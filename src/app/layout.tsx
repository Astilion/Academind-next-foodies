import './globals.css';
import type { Metadata } from "next";
import MainHeader from '../components/main-header';
import HeaderBackground from '../components/header-background';

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderBackground/>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
