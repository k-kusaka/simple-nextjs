import '@/app/globals.css';
import { Header, Sidebar } from '@/components';
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={notoSansJP.className}>
        <div className='flex min-h-screen flex-col'>
          <div className='fixed left-0 top-0 z-50 h-16 w-full bg-baseWhite'>
            <div className='mx-auto h-full max-w-320 px-4'>
              <Header />
            </div>
          </div>
          <div className='flex flex-1 bg-baseBlue pt-16'>
            <div className='h-448 mx-auto flex max-w-320 flex-1 flex-row'>
              <div className='mx-4 my-8 flex min-w-52 max-w-52 flex-col'>
                <Sidebar />
              </div>
              <div className='mx-4 my-8 flex w-full flex-col rounded-md bg-baseWhite'>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
