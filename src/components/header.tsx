import Image from 'next/image';
import { Mountain } from 'lucide-react';

export function Header() {
  return (
    <header className="relative w-full h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <Image 
            src="https://plus.unsplash.com/premium_photo-1677575241227-d23219bef088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuY2h8ZW58MHx8MHx8fDA%3D" 
            data-ai-hint="ranch landscape" 
            alt="Banner image of a sprawling ranch with a large house and acres of land" 
            layout="fill" 
            objectFit="cover" 
            priority
            className="brightness-75"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <div className="flex items-center gap-4 mb-4">
                <Mountain className="h-12 w-12 text-primary" />
                <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tight">RanchView</h1>
            </div>
            <p className="mt-2 text-xl md:text-2xl font-body">A glimpse into our world</p>
        </div>
    </header>
  );
}