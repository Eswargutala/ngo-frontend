import type { Metadata } from 'next';
import { Providers } from './providers';
import IntroLoader from '@/components/IntroLoader';
import '../styles/globals.css'; // keep this if your css is in src/styles

export const metadata: Metadata = {
  title: 'Lakhil Raj Welfare Foundation',
  description: 'NGO Supporting communities through sustainable commerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <IntroLoader>{children}</IntroLoader>
        </Providers>
      </body>
    </html>
  );
}
