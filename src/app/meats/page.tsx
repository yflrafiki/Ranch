import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const meatProducts = [
  {
    name: "Grass-Fed Ground Beef",
    price: "$9.99/lb",
    description: "Lean and flavorful, perfect for burgers, tacos, and your favorite recipes.",
    imageUrl: "https://placehold.co/600x400.png",
    'data-ai-hint': 'ground beef'
  },
  {
    name: "Ribeye Steak",
    price: "$24.99/lb",
    description: "Generously marbled for a rich, beefy flavor and tender texture. A steakhouse classic.",
    imageUrl: "https://placehold.co/600x400.png",
    'data-ai-hint': 'ribeye steak'
  },
  {
    name: "Pork Sausages",
    price: "$8.49/lb",
    description: "Our classic family recipe, seasoned to perfection. Great for breakfast or grilling.",
    imageUrl: "https://placehold.co/600x400.png",
    'data-ai-hint': 'sausages'
  },
  {
    name: "Leg of Lamb",
    price: "$18.99/lb",
    description: "A tender and succulent cut that makes a stunning centerpiece for any special occasion.",
    imageUrl: "https://placehold.co/600x400.png",
    'data-ai-hint': 'leg of lamb'
  }
];

export default function MeatsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Farm-to-Table Meats</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Taste the difference that quality and care make.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {meatProducts.map((product) => (
          <Card key={product.name} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={600}
                height={400}
                className="object-cover w-full h-48"
                data-ai-hint={product['data-ai-hint']}
              />
            </CardHeader>
            <CardContent className="p-4 flex flex-col flex-grow">
              <CardTitle className="text-xl font-headline text-primary">{product.name}</CardTitle>
              <p className="text-lg font-semibold my-1">{product.price}</p>
              <CardDescription className="text-sm flex-grow">{product.description}</CardDescription>
              <Button className="mt-4 w-full">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
