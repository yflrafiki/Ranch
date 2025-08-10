import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const livestock = [
  { 
    name: 'Angus Cattle', 
    priceRange: '$1,800 - $2,500', 
    description: 'Renowned for their superior meat quality, our Angus cattle are grass-fed and raised in open pastures.', 
    imageUrl: 'https://media.istockphoto.com/id/2151351979/photo/angus-cow-calf-pair-in-herd-in-spring-pasture.webp?a=1&b=1&s=612x612&w=0&k=20&c=v76taonHGQ8upXfGLD4FY-gGgWP715f8jd8qyLo4zaI=',
    'data-ai-hint': 'Angus cattle'
  },
  { 
    name: 'Quarter Horses', 
    priceRange: '$5,000 - $15,000', 
    description: 'Versatile and good-natured, our Quarter Horses are perfect for both work and recreation. Excellent bloodlines.',
    imageUrl: 'https://media.istockphoto.com/id/91616312/photo/quarter-horse-galloping-across-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=C1nYQn2kudxv2OVYUpz4CjcR70N0OhSVFCBM4kL4wGM=',
    'data-ai-hint': 'Quarter horse'
  },
  { 
    name: 'Boer Goats', 
    priceRange: '$300 - $600', 
    description: 'Hardy and adaptable, Boer goats are an excellent choice for meat production. Well-cared-for and healthy.',
    imageUrl: 'https://media.istockphoto.com/id/486873140/photo/young-african-boer-goat-on-in-the-paddock-farm.webp?a=1&b=1&s=612x612&w=0&k=20&c=MUPpEuVM4bJYLe1fF3tv0ksOIysQuJRVM2hZ4_GBFYM=',
    'data-ai-hint': 'Boer goat'
  },
  { 
    name: 'Dorset Sheep', 
    priceRange: '$250 - $450', 
    description: 'Our Dorset sheep are known for their high-quality wool and mild-flavored meat. Great for breeding stock.',
    imageUrl: 'https://media.istockphoto.com/id/1483352103/photo/katahdin-sheep-ewe-just-before-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=FiA0HMMUy-unPn_UIwGg0JrWQx6kyK6TVljehWUe4Jw=',
    'data-ai-hint': 'Dorset sheep'
  },
];

export default function LivestockPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Livestock</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Healthy, well-cared-for animals from our family to yours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {livestock.map((animal) => (
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
    </div>
  );
}
