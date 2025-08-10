"use client"
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

type AnimalImage = {
  id: string;
  url: string;
  type: string;
  alt: string;
  'data-ai-hint': string;
};

// Mock data simulating Firestore fetch
const allImages: AnimalImage[] = [
    { id: '1', url: 'https://placehold.co/400x400.png', type: 'cattle', alt: 'A brown cow in a grassy field', 'data-ai-hint': 'cattle field' },
    { id: '2', url: 'https://placehold.co/400x400.png', type: 'horse', alt: 'A majestic white horse running through a pasture', 'data-ai-hint': 'horse pasture' },
    { id: '3', url: 'https://placehold.co/400x400.png', type: 'cattle', alt: 'A herd of black and white cattle grazing', 'data-ai-hint': 'cattle grazing' },
    { id: '4', url: 'https://placehold.co/400x400.png', type: 'sheep', alt: 'A flock of fluffy sheep on a hillside', 'data-ai-hint': 'sheep hillside' },
    { id: '5', url: 'https://placehold.co/400x400.png', type: 'horse', alt: 'A close-up of a brown horse\'s face', 'data-ai-hint': 'horse face' },
    { id: '6', url: 'https://placehold.co/400x400.png', type: 'chickens', alt: 'Chickens pecking at the ground in a farmyard', 'data-ai-hint': 'chickens farmyard' },
    { id: '7', url: 'https://placehold.co/400x400.png', type: 'pigs', alt: 'A piglet relaxing in the mud', 'data-ai-hint': 'pig mud' },
    { id: '8', url: 'https://placehold.co/400x400.png', type: 'cattle', alt: 'A calf standing next to its mother', 'data-ai-hint': 'cattle calf' },
    { id: '9', url: 'https://placehold.co/400x400.png', type: 'horse', alt: 'Two horses standing side-by-side in a field', 'data-ai-hint': 'two horses' },
    { id: '10', url: 'https://placehold.co/400x400.png', type: 'goats', alt: 'A goat climbing on a rock', 'data-ai-hint': 'goat rock' },
    { id: '11', url: 'https://placehold.co/400x400.png', type: 'sheep', alt: 'A black sheep amongst a white flock', 'data-ai-hint': 'black sheep' },
    { id: '12', url: 'https://placehold.co/400x400.png', type: 'horse', alt: 'A person riding a horse at sunset', 'data-ai-hint': 'horse riding sunset' },
];

export function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState<AnimalImage[]>([]);
  const [loading, setLoading] = useState(true);

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
      image.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, images]);

  return (
    <section aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="text-4xl font-bold font-headline text-center mb-8 text-primary">Our Animals</h2>
        <div className="relative mb-8 max-w-lg mx-auto">
            <label htmlFor="search-gallery" className="sr-only">Search Gallery</label>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
                id="search-gallery"
                type="text"
                placeholder="Search by animal type (e.g., cattle, horses)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-11 w-full bg-background/80"
            />
        </div>
        
        {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton key={index} className="w-full h-64 md:h-80 rounded-lg" />
                ))}
            </div>
        ) : (
            <>
                {filteredImages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {filteredImages.map(image => (
                            <Card key={image.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group rounded-lg border-primary/20">
                                <CardContent className="p-0">
                                    <div className="aspect-square w-full overflow-hidden">
                                        <Image
                                            src={image.url}
                                            alt={image.alt}
                                            width={400}
                                            height={400}
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
    </section>
  );
}
