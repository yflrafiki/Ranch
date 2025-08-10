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
    { id: '1', url: 'https://placehold.co/600x600.png', type: 'cattle', alt: 'A brown cow in a grassy field under a blue sky', 'data-ai-hint': 'cattle field' },
    { id: '2', url: 'https://placehold.co/600x600.png', type: 'horse', alt: 'A majestic white horse running through a sunlit pasture', 'data-ai-hint': 'horse pasture' },
    { id: '3', url: 'https://placehold.co/600x600.png', type: 'cattle', alt: 'A herd of black and white Holstein cattle grazing peacefully', 'data-ai-hint': 'cattle grazing' },
    { id: '4', url: 'https://placehold.co/600x600.png', type: 'sheep', alt: 'A flock of fluffy white sheep on a vibrant green hillside', 'data-ai-hint': 'sheep hillside' },
    { id: '5', url: 'https://placehold.co/600x600.png', type: 'horse', alt: 'A stunning close-up of a brown horse\'s gentle face', 'data-ai-hint': 'horse face' },
    { id: '6', url: 'https://placehold.co/600x600.png', type: 'chickens', alt: 'Brown and white chickens pecking at the ground in a rustic farmyard', 'data-ai-hint': 'chickens farmyard' },
    { id: '7', url: 'https://placehold.co/600x600.png', type: 'pigs', alt: 'An adorable piglet with a curly tail relaxing in the sunlit mud', 'data-ai-hint': 'piglet mud' },
    { id: '8', url: 'https://placehold.co/600x600.png', type: 'cattle', alt: 'A young calf with large curious eyes standing next to its mother', 'data-ai-hint': 'cattle calf' },
    { id: '9', url: 'https://placehold.co/600x600.png', type: 'horse', alt: 'Two beautiful horses, one black and one brown, standing side-by-side in a field', 'data-ai-hint': 'two horses' },
    { id: '10', url: 'https://placehold.co/600x600.png', type: 'goats', alt: 'A nimble goat with impressive horns climbing on a rock outcropping', 'data-ai-hint': 'goat rock' },
    { id: '11', url: 'https://placehold.co/600x600.png', type: 'sheep', alt: 'A single black sheep standing out amongst a large flock of white sheep', 'data-ai-hint': 'black sheep' },
    { id: '12', url: 'https://placehold.co/600x600.png', type: 'horse', alt: 'A silhouette of a person riding a horse against a dramatic sunset', 'data-ai-hint': 'horse riding' },
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
        <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold font-headline text-center mb-12 text-primary">Our Animals</h2>
        <div className="relative mb-8 max-w-lg mx-auto">
            <label htmlFor="search-gallery" className="sr-only">Search Gallery</label>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
                id="search-gallery"
                type="text"
                placeholder="Search by animal type (e.g., cattle, horses)..."
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
                            <Card key={image.id} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 group rounded-lg border-primary/10 hover:border-primary/30">
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
    </section>
  );
}
