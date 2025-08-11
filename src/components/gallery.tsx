"use client"
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

type AnimalImage = {
  id: string;
  url: string;
  type: string;
  alt: string;
  'data-ai-hint': string;
};

// Mock data simulating Firestore fetch
const allImages: AnimalImage[] = [
    { id: '1', url: 'https://media.istockphoto.com/id/2219390601/photo/brown-cow-grazing-peacefully-in-a-vibrant-green-pasture-under-a-bright-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=7bBeJP_QqcRqwSbLoF_Enjme4bN6d2Rm-aPycYQjBDw=', type: 'cattle', alt: 'A brown cow in a grassy field under a blue sky', 'data-ai-hint': 'cattle field' },
    { id: '2', url: 'https://media.istockphoto.com/id/2226030831/photo/manitoba-canada-countryside.webp?a=1&b=1&s=612x612&w=0&k=20&c=E_R76zxGG3vcF8MQ_1IVhRzoJSuy8uP5Zrh82U-yBMk=', type: 'horse', alt: 'A majestic white horse running through a sunlit pasture', 'data-ai-hint': 'horse pasture' },
    { id: '3', url: 'https://media.istockphoto.com/id/2175983532/photo/dairy-cows-grazing-in-lush-pasture.webp?a=1&b=1&s=612x612&w=0&k=20&c=pDs92WsGl6Y5pS5eCJN2N_0TeOzHFrEeAjOqhlXykow=', type: 'cattle', alt: 'A herd of black and white Holstein cattle grazing peacefully', 'data-ai-hint': 'cattle grazing' },
    { id: '4', url: 'https://media.istockphoto.com/id/2148188816/photo/aerial-view-of-a-flock-of-sheep-grazing-sheep-grazing-on-a-meadow-in-ireland-aerial-view-of-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=NB-Z8cyFhp9jX_qYMrjDLHLJRlvPAwoY7OQxJ8CFXjQ=', type: 'sheep', alt: 'A flock of fluffy white sheep on a vibrant green hillside', 'data-ai-hint': 'sheep hillside' },
    { id: '5', url: 'https://media.istockphoto.com/id/526038687/photo/portrait-of-a-chestniut-stallion.webp?a=1&b=1&s=612x612&w=0&k=20&c=JuTrDKvLVjA_95qsf-0tLCp8GRPIM6zz8hpWDWNoEjI=', type: 'horse', alt: 'A stunning close-up of a brown horse\'s gentle face', 'data-ai-hint': 'horse face' },
    { id: '6', url: 'https://media.istockphoto.com/id/2168168829/photo/chickens-at-a-farm.webp?a=1&b=1&s=612x612&w=0&k=20&c=WZCJjqGoFwCRoRTrTEA0SwJlYtnag2DNUasvYtU635o=', type: 'chickens', alt: 'Brown and white chickens pecking at the ground in a rustic farmyard', 'data-ai-hint': 'chickens farmyard' },
    { id: '7', url: 'https://media.istockphoto.com/id/964058494/photo/organic-piglet-take-a-mud-bath-and-posing-in-front-of-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=xVlx_ZtxtYS4JlNyBXNi8cjIHPw4_-Ij5dnF5dHeqrA=', type: 'pigs', alt: 'An adorable piglet with a curly tail relaxing in the sunlit mud', 'data-ai-hint': 'piglet mud' },
    { id: '8', url: 'https://media.istockphoto.com/id/2170525166/photo/black-white-hereford-cow-brown-white-young-calf.webp?a=1&b=1&s=612x612&w=0&k=20&c=-YidO5Gy8UqgxZIAppNUPgMXp__9Lrov9ftBObosWKs=', type: 'cattle', alt: 'A young calf with large curious eyes standing next to its mother', 'data-ai-hint': 'cattle calf' },
    { id: '9', url: 'https://media.istockphoto.com/id/2201754737/photo/two-ponies-interacting-on-a-grass-field-in-a-natural-outdoor-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=jF8q-FPTsqtXPxnUPkm5fgHnqYXDMSlmkkg0sqQzHDI=', type: 'horse', alt: 'Two beautiful horses, one black and one brown, standing side-by-side in a field', 'data-ai-hint': 'two horses' },
    { id: '10', url: 'https://media.istockphoto.com/id/1194703639/photo/wild-mountain-goats-of-the-colorado-rocky-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=iWxzMimRC5yKw25OhbAPN-ojB-5_7krpJI6n8IN5SXI=', type: 'goats', alt: 'A nimble goat with impressive horns climbing on a rock outcropping', 'data-ai-hint': 'goat rock' },
    { id: '11', url: 'https://media.istockphoto.com/id/184867755/photo/black-sheep-of-family.webp?a=1&b=1&s=612x612&w=0&k=20&c=HzzDon1tnP2BuyEz1vyYVnf8SKnIzXx7z5aLChQ7D2I=', type: 'sheep', alt: 'A single black sheep standing out amongst a large flock of white sheep', 'data-ai-hint': 'black sheep' },
    { id: '12', url: 'https://media.istockphoto.com/id/1397152328/photo/a-cowboy-on-a-horse-springing-up-and-a-riding-horse-silhouetted-against-the-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=J3sI13FA7RG9aETduVctjbrRUVqR46GGxevtRTrhxnQ=', type: 'horse', alt: 'A silhouette of a person riding a horse against a dramatic sunset', 'data-ai-hint': 'horse riding' },
];

export function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState<AnimalImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<AnimalImage | null>(null);

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  // Simulate fetching data on component mount
  useEffect(() => {
    // In a real app, you would fetch this from Firestore and listen for real-time updates
    setTimeout(() => {
        setImages(allImages);
        setLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  const filteredImages = useMemo(() => {
    if (!searchTerm) {
      return images;
    }
    return images.filter(image =>
       image.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.alt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, images]);

  const featuredImages = useMemo(() => {
    return images.slice(0, 5); // Feature the first 5 images in the carousel
  }, [images]);

  return (
    <section aria-labelledby="gallery-heading">
         <div className="text-center mb-12">
            <h1 id="gallery-heading" className="text-4xl md:text-5xl font-bold font-headline text-primary">Gallery</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                A glimpse into life at Golden Roger Ranch.
            </p>
        </div>

        {loading ? (
             <Skeleton className="w-full h-[400px] md:h-[600px] rounded-lg bg-secondary mb-12" />
        ) : (
            <Carousel
                 plugins={[plugin.current]}
                onMouseEnter={() => plugin.current.stop()}
                onMouseLeave={() => plugin.current.reset()}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-5xl mx-auto mb-20"
            >
                <CarouselContent>
                    {featuredImages.map((image) => (
                        <CarouselItem key={image.id}>
                             <Card className="overflow-hidden">
                                <CardContent className="p-0">
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        width={1200}
                                        height={800}
                                        className="object-cover w-full h-[400px] md:h-[600px]"
                                        data-ai-hint={image['data-ai-hint']}
                                    />
                                </CardContent>
                             </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-16" />
                <CarouselNext className="mr-16" />
            </Carousel>
        )}
        
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">All Photos</h2>
        <div className="relative mb-8 max-w-lg mx-auto">
            <label htmlFor="search-gallery" className="sr-only">Search Gallery</label>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
                id="search-gallery"
                type="text"
                placeholder="Search by animal type or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-11 w-full bg-secondary/80 focus:bg-secondary border-0"
            />
        </div>
        
        {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton key={index} className="w-full h-64 md:h-80 rounded-lg bg-secondary" />
                ))}
            </div>
        ) : (
            <>
                {filteredImages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {filteredImages.map(image => (
                            <Card key={image.id} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 group rounded-lg border-primary/10 hover:border-primary/30" onClick={() => setSelectedImage(image)}>
                                <CardContent className="p-0">
                                    <div className="aspect-square w-full overflow-hidden">
                                        <Image
                                            src={image.url}
                                            alt={image.alt}
                                            width={600}
                                            height={600}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                            data-ai-hint={image['data-ai-hint']}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-center mt-8 text-lg text-muted-foreground">No images found for &quot;{searchTerm}&quot;.</p>
                )}
            </>
        )}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                {selectedImage && (
                  <>
                    <DialogTitle className="sr-only">{selectedImage.alt}</DialogTitle>
                    <DialogDescription className="sr-only">A larger view of the gallery image: {selectedImage.alt}</DialogDescription>
                    <Image
                        src={selectedImage.url}
                        alt={selectedImage.alt}
                        width={1200}
                        height={800}
                        className="object-contain w-full h-auto rounded-lg"
                        data-ai-hint={selectedImage['data-ai-hint']}
                    />
                  </>
                )}
            </DialogContent>
        </Dialog>
    </section>
  );
}
