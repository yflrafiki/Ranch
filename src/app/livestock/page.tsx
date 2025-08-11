"use client"
import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const livestock = [
  { 
    name: 'Angus Cattle', 
    priceRange: '$1,800 - $2,500', 
    description: 'Renowned for their superior meat quality, our Angus cattle are grass-fed and raised in open pastures.', 
    imageUrl: 'https://media.istockphoto.com/id/2151351979/photo/angus-cow-calf-pair-in-herd-in-spring-pasture.webp?a=1&b=1&s=612x612&w=0&k=20&c=v76taonHGQ8upXfGLD4FY-gGgWP715f8jd8qyLo4zaI=',
    'data-ai-hint': 'Angus cattle',
    category: 'Cattle',
  },
  { 
    name: 'Quarter Horses', 
    priceRange: '$5,000 - $15,000', 
    description: 'Versatile and good-natured, our Quarter Horses are perfect for both work and recreation. Excellent bloodlines.',
    imageUrl: 'https://media.istockphoto.com/id/91616312/photo/quarter-horse-galloping-across-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=C1nYQn2kudxv2OVYUpz4CjcR70N0OhSVFCBM4kL4wGM=',
    'data-ai-hint': 'Quarter horse',
    category: 'Horses',
  },
  { 
    name: 'Boer Goats', 
    priceRange: '$300 - $600', 
    description: 'Hardy and adaptable, Boer goats are an excellent choice for meat production. Well-cared-for and healthy.',
    imageUrl: 'https://media.istockphoto.com/id/486873140/photo/young-african-boer-goat-on-in-the-paddock-farm.webp?a=1&b=1&s=612x612&w=0&k=20&c=MUPpEuVM4bJYLe1fF3tv0ksOIysQuJRVM2hZ4_GBFYM=',
    'data-ai-hint': 'Boer goat',
    category: 'Goats',
  },
  { 
    name: 'Dorset Sheep', 
    priceRange: '$250 - $450', 
    description: 'Our Dorset sheep are known for their high-quality wool and mild-flavored meat. Great for breeding stock.',
    imageUrl: 'https://media.istockphoto.com/id/1483352103/photo/katahdin-sheep-ewe-just-before-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=FiA0HMMUy-unPn_UIwGg0JrWQx6kyK6TVljehWUe4Jw=',
    'data-ai-hint': 'Dorset sheep',
    category: 'Sheep',
  },
   {
    name: 'Hereford Cattle',
    priceRange: '$1,700 - $2,400',
    description: 'Known for their docile nature and excellent maternal qualities, Herefords are a versatile breed.',
    imageUrl: 'https://media.istockphoto.com/id/865401848/photo/brown-and-white-cow-grazing-on-green-pasture-field-farm-dairy.webp?a=1&b=1&s=612x612&w=0&k=20&c=wRbbgrgcm1hBokEmPpKKwMcL4dvIULNxFHko2uE-wgA=',
    'data-ai-hint': 'Hereford cattle',
    category: 'Cattle',
  },
  {
    name: 'American Paint Horse',
    priceRange: '$4,000 - $12,000',
    description: 'Prized for their unique coloring and stock horse build, they excel in a variety of equestrian disciplines.',
    imageUrl: 'https://media.istockphoto.com/id/156268948/photo/lovely-paint-horse.webp?a=1&b=1&s=612x612&w=0&k=20&c=mgJRDuxDv9E9ImiFXnNPoDEO_zi_Gj0a723NMU-U_JQ=',
    'data-ai-hint': 'Paint horse',
    category: 'Horses',
  },
  {
    name: 'Kiko Goats',
    priceRange: '$400 - $700',
    description: 'Kikos are resilient and known for their survivability and growth rate, making them excellent for meat.',
    imageUrl: 'https://media.istockphoto.com/id/1204676069/photo/breeding-goats-in-a-farm.webp?a=1&b=1&s=612x612&w=0&k=20&c=flYZRpOJR8EeS984nDZYJlMtGskSRf81i2uP1WBQ25c=',
    'data-ai-hint': 'Kiko goat',
    category: 'Goats',
  },
  {
    name: 'Suffolk Sheep',
    priceRange: '$300 - $500',
    description: 'A popular breed for meat production, known for their fast growth and high-quality carcasses.',
    imageUrl: 'https://media.istockphoto.com/id/479446775/photo/sheep.webp?a=1&b=1&s=612x612&w=0&k=20&c=H2BG_9waPO97CjqOPbjeIYWcDkfNwP4baupG0kzMEBw=',
    'data-ai-hint': 'Suffolk sheep',
    category: 'Sheep',
  },
  {
    name: 'Californian Rabbits',
    priceRange: '$40 - $80',
    description: 'Known for their excellent meat-to-bone ratio and gentle temperament, making them ideal for small-scale farming.',
    imageUrl: 'https://media.istockphoto.com/id/1126077948/photo/rabbit.webp?a=1&b=1&s=612x612&w=0&k=20&c=z6WSwGsP17QrwHcRwS0pAXE9cScaLHLfN_ikTi_GoyE=',
    'data-ai-hint': 'Californian rabbit',
    category: 'Small Animals',
  },
   {
    name: 'New Zealand White Rabbits',
    priceRange: '$45 - $90',
    description: 'A popular meat and show breed, known for their fast growth and good meat-to-bone ratio.',
    imageUrl: 'https://media.istockphoto.com/id/186535510/photo/bunny-rabbit.webp?a=1&b=1&s=612x612&w=0&k=20&c=z4QkZKCBkBOR7sQ7SHNrDPYwBX6eyFziM2rrciXgzKI=',
    'data-ai-hint': 'New Zealand White rabbit',
    category: 'Small Animals',
  },
  {
    name: 'Flemish Giant Rabbits',
    priceRange: '$50 - $100',
    description: 'One of the largest domestic rabbit breeds, known for their docile nature and often kept as pets.',
    imageUrl: 'https://media.istockphoto.com/id/524709602/photo/flemish-giant-rabbit-is-sitting-in-my-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gdci9jNI5G_8RBWYumAAIdZvgVAJ0F3CZ1aFvERbzIs=',
    'data-ai-hint': 'Flemish Giant rabbit',
    category: 'Small Animals',
  },
  {
    name: 'Rhode Island Red Chickens',
    priceRange: '$15 - $30',
    description: 'A dual-purpose breed, excellent for both egg laying and meat production. Hardy and reliable.',
    imageUrl: 'https://media.istockphoto.com/id/115761915/photo/backyard-chickens.webp?a=1&b=1&s=612x612&w=0&k=20&c=5ugt38mp9DK8fUJOFavB-Moypx9YDvHUaFc7JWZPp60=',
    'data-ai-hint': 'Rhode Island Red chicken',
    category: 'Poultry',
  },
  {
    name: 'Leghorn Hens',
    priceRange: '$20 - $35',
    description: 'Prolific layers of large white eggs, our Leghorn hens are a top choice for egg production.',
    imageUrl: 'https://media.istockphoto.com/id/1488559788/photo/chicken-farming-animals-and-background-field-for-sustainable-production-agriculture-growth.webp?a=1&b=1&s=612x612&w=0&k=20&c=z5ub4hiHY0uwF2_wZKZaLMJnKgVyTJ9S9pMdWxbYF1I=',
    'data-ai-hint': 'Leghorn hen',
    category: 'Poultry',
  },
  {
    name: 'Plymouth Rock Chickens',
    priceRange: '$20 - $40',
    description: 'A dual-purpose breed from America, valued for its meat and brown eggs. Friendly and hardy.',
    imageUrl: 'https://media.istockphoto.com/id/487226211/photo/barred-plymouth-rock-chickens-fed-outdoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=caS3ud-LFW46reCtxZRb-3HYqGu317N7gIy78T3QZhA=',
    'data-ai-hint': 'Plymouth Rock chicken',
    category: 'Poultry',
  },
  {
    name: 'Sussex Hens',
    priceRange: '$25 - $45',
    description: 'A classic British breed, great layers of tinted eggs and have a calm, friendly temperament.',
    imageUrl: 'https://media.istockphoto.com/id/2148234356/photo/sussex-rooster-and-hens.webp?a=1&b=1&s=612x612&w=0&k=20&c=gFcg4KPUKXhHCvTQBb9YMtuSKjVcQ9ocV623eCR2Ft0=',
    'data-ai-hint': 'Sussex hen',
    category: 'Poultry',
  },
   {
    name: 'Orpington Chickens',
    priceRange: '$30 - $50',
    description: 'Big, friendly birds known for their fluffy feathers and good egg-laying capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1472430023262-9a743f7570cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T3JwaW5ndG9uJTIwQ2hpY2tlbnMlMjBCaWclMkMlMjBmcmllbmRseSUyMGJpcmRzJTIwa25vd24lMjBmb3IlMjB0aGVpciUyMGZsdWZmeSUyMGZlYXRoZXJzJTIwYW5kJTIwZ29vZCUyMGVnZyUyMGxheWluZyUyMGNhcGFiaWxpdGllcy58ZW58MHx8MHx8fDA%3D',
    'data-ai-hint': 'Orpington chicken',
    category: 'Poultry',
  },
  {
    name: 'Berkshire Pigs',
    priceRange: '$400 - $800',
    description: 'Prized for its rich flavor, juiciness, and tenderness, Berkshire pork is a gourmet choice.',
    imageUrl: 'https://media.istockphoto.com/id/139666575/photo/three-pigs.webp?a=1&b=1&s=612x612&w=0&k=20&c=PaRfgnRLed2al22X4eaKH9cVaOIM3Gx-lTTNYQ3nDeI=',
    'data-ai-hint': 'Berkshire pig',
    category: 'Pigs',
  }
];

const categories = ["All", ...Array.from(new Set(livestock.map(item => item.category)))];

export default function LivestockPage() {
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredLivestock = useMemo(() => {
      return livestock.filter((animal) => {
        const matchesCategory = selectedCategory === "All" || animal.category === selectedCategory;
        const matchesSearch = !searchTerm || animal.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Livestock</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Healthy, well-cared-for animals from our family to yours.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="relative max-w-lg mx-auto w-full">
            <label htmlFor="search-livestock" className="sr-only">Search Livestock</label>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
                id="search-livestock"
                type="text"
                placeholder="Search by animal name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-11 w-full bg-secondary/80 focus:bg-secondary border-0"
            />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                >
                    {category}
                </Button>
            ))}
        </div>
      </div>

      {filteredLivestock.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {filteredLivestock.map((animal) => (
            <Card key={animal.name} className="overflow-hidden shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                    src={animal.imageUrl}
                    alt={animal.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64"
                    data-ai-hint={animal['data-ai-hint']}
                  />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-headline text-primary">{animal.name}</CardTitle>
                <p className="text-xl font-semibold my-2">{animal.priceRange}</p>
                <CardDescription className="text-base">{animal.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">No animals found.</p>
            {(searchTerm || selectedCategory !== 'All') && (
                <Button variant="link" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                    Clear Filters
                </Button>
            )}
        </div>
      )}
    </div>
  );
}
