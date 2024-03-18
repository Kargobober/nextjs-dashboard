import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased это встроенный класс в Tailwind */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
