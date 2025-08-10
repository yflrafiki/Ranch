import { Gallery } from '@/components/gallery';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:py-16">
        <section className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary tracking-tight">Owned by The Miller Family</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-foreground/80">
            Welcome to RanchView, a sprawling expanse of natural beauty and rustic charm. Our home is nestled among rolling hills and lush pastures, where the sky is big and the air is fresh. We are dedicated to responsible farming and animal welfare, raising healthy livestock in a serene environment.
          </p>
        </section>
        <Gallery />
      </main>
      <footer className="text-center py-8 border-t border-primary/20 mt-16">
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} RanchView. All Rights Reserved.</p>
      </footer>
    </div>
  );
}