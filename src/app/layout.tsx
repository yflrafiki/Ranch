import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Lora } from 'next/font/google'
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'Golden Roger Ranch',
  description: 'A beautiful view of the ranch and its animals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-body antialiased`}>
          <div className="flex flex-col min-h-dvh">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="text-center py-6 bg-secondary mt-16">
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Golden Rogers Ranch. All Rights Reserved.</p>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}