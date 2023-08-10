import clsx from 'clsx';
import { Spline_Sans_Mono, Work_Sans } from 'next/font/google';
import { cookies } from 'next/headers';

import { BLOG_TITLE, DARK_TOKENS, LIGHT_TOKENS } from '@/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RespectUserMotion from '@/components/RespectUserMotion/RespectUserMotion';

import './styles.css';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});

const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export const metadata = {
  title: BLOG_TITLE,
  description: 'A wonderful blog about JavaScript',
};

function RootLayout({ children }) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  return (
    <RespectUserMotion>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={theme}
        style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body>
          <Header theme={theme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </RespectUserMotion>
  );
}

export default RootLayout;
