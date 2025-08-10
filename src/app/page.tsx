import Image from 'next/image';
import { Gallery } from '@/components/gallery';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="relative w-full h-[60vh] md:h-[70vh]">
        <Image 
            src="https://placehold.co/1920x1080.png" 
            data-ai-hint="ranch landscape" 
            alt="Banner image of a sprawling ranch with a large house and acres of land" 
            layout="fill" 
            objectFit="cover" 
            priority
            className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight">RanchView</h1>
            <p className="mt-2 text-xl md:text-2xl font-headline">A glimpse into our world</p>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:py-16">
        <section className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl font-bold font-headline text-primary">Owned by The Miller Family</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-foreground/80">
            Welcome to RanchView, a sprawling expanse of natural beauty and rustic charm. Our home is nestled among rolling hills and lush pastures, where the sky is big and the air is fresh. We are dedicated to responsible farming and animal welfare, raising healthy livestock in a serene environment.
          </p>
        </section>
        <Gallery />
      </main>
      <footer className="text-center py-6 border-t border-primary/20 mt-16">
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} RanchView. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
