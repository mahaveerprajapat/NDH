// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'NDH Logistic Pro - Worldwide Shipping & Supply Chain Solutions',
//   description: 'Leading logistics company providing comprehensive shipping, warehousing, and supply chain management services worldwide. Fast, reliable, and cost-effective solutions.',
//   keywords: 'logistics, shipping, supply chain, warehousing, freight, international shipping, cargo',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }



// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

// ✅ Load Urbanist font with required weights
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NDH Logistic Pro - Worldwide Shipping & Supply Chain Solutions',
  description: 'Leading logistics company providing comprehensive shipping, warehousing, and supply chain management services worldwide. Fast, reliable, and cost-effective solutions.',
  keywords: 'logistics, shipping, supply chain, warehousing, freight, international shipping, cargo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
