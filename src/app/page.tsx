import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[75vh] bg-secondary">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image 
            src="https://images.unsplash.com/photo-1701602029591-ed354736e28c?w=1920&auto=format&fit=crop&q=80" 
            data-ai-hint="ranch landscape" 
            alt="Banner image of a sprawling ranch with a large house and acres of land" 
            layout="fill" 
            objectFit="cover" 
            priority
            className="opacity-50"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Welcome to Golden Rogers Ranch</h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl font-body">Quality Livestock & Meats, Raised with Care.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/livestock">View Our Livestock</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/meats">Shop Our Meats</Link>
              </Button>
            </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6 lg:py-24 bg-background">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">About the Golden Rogers</h2>
            <p className='text-xl font-semibold'>Founded by Anthony E. Rogers</p>
            <p className="text-lg leading-relaxed text-foreground/80">
              For three generations, the Rogers family has been dedicated to responsible farming and animal welfare on the sprawling expanse of Golden Ranch. Our home is nestled among rolling hills and lush pastures, where we raise healthy, happy livestock in a serene environment. We believe in tradition, hard work, and a deep respect for the land.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              We're proud to offer our community the finest quality livestock and farm-to-table meats, continuing a legacy of excellence that you can taste.
            </p>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              data-ai-hint="family portrait"
              alt="A portrait of the Rogers family"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}