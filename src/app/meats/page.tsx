import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const meatProducts = [
  {
    name: "Grass-Fed Ground Beef",
    price: "$9.99/lb",
    description: "Lean and flavorful, perfect for burgers, tacos, and your favorite recipes.",
    imageUrl: "https://media.istockphoto.com/id/1053197860/photo/fresh-raw-angus-beef-meat-whole-ground-and-chopped-on-parchment-paper.webp?a=1&b=1&s=612x612&w=0&k=20&c=KLkOBhrLXLU87sW5tOrqyxuPECox0oKxjjcdAJDej5w=",
    'data-ai-hint': 'ground beef'
  },
  {
    name: "Ribeye Steak",
    price: "$24.99/lb",
    description: "Generously marbled for a rich, beefy flavor and tender texture. A steakhouse classic.",
    imageUrl: "https://media.istockphoto.com/id/1502917902/photo/the-king-of-steaks-the-tomahawk.webp?a=1&b=1&s=612x612&w=0&k=20&c=w70L5jmoCPt4E9F3gboaYB11RBqwvPLj7on3LwshPqE=",
    'data-ai-hint': 'ribeye steak'
  },
  {
    name: "Pork Sausages",
    price: "$8.49/lb",
    description: "Our classic family recipe, seasoned to perfection. Great for breakfast or grilling.",
    imageUrl: "https://media.istockphoto.com/id/170222471/photo/cooked-sausage-piled-together-with-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=58IQVXFbDydt1qvGnZN09qiPobiCZHHAAef4zPUlU8A=",
    'data-ai-hint': 'sausages'
  },
  {
    name: "Leg of Lamb",
    price: "$18.99/lb",
    description: "A tender and succulent cut that makes a stunning centerpiece for any special occasion.",
    imageUrl: "https://media.istockphoto.com/id/899698866/photo/close-up-of-rib-roast.webp?a=1&b=1&s=612x612&w=0&k=20&c=7d1yvyu1HNPKaxlmjtCvmSizTIUqv8JBYY51QpM1gnk=",
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
