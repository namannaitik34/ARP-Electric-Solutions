
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const productCategories = [
    {
        slug: 'transformers',
        title: 'Transformers',
        description: 'High-performance transformers for power distribution.',
        image: 'https://placehold.co/600x400.png',
        hint: 'power transformer station'
    },
    {
        slug: 'conductors',
        title: 'Conductors',
        description: 'A wide range of copper and aluminium conductors.',
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solution.firebasestorage.app/o/Products%2Fcopper-picc.jpg?alt=media&token=61977413-c47b-4dec-9236-efaf4c24d1ac',
        hint: 'copper wire'
    },
    {
        slug: 'materials-and-accessories',
        title: 'Materials & Accessories',
        description: 'Essential components for transformer manufacturing and maintenance.',
        image: 'https://placehold.co/600x400.png',
        hint: 'electrical components'
    },
    {
        slug: 'solutions-and-services',
        title: 'Solutions & Services',
        description: 'Advanced solutions for power quality, data centers, and more.',
        image: 'https://placehold.co/600x400.png',
        hint: 'server room'
    }
];

export default function ProductsPage() {
    return (
        <div className="bg-background text-foreground animate-fadeIn">
            <div className="container py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Products</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We provide a wide range of high-quality electrical products engineered for performance, reliability, and safety. Explore our product categories to find the right solution for your needs.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {productCategories.map(category => (
                        <Link key={category.slug} href={`/products/${category.slug}`} className="group block">
                            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <CardHeader className="p-0">
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            data-ai-hint={category.hint}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow flex flex-col">
                                    <h2 className="text-2xl font-bold text-accent-foreground">{category.title}</h2>
                                    <p className="mt-2 text-muted-foreground flex-grow">{category.description}</p>
                                    <div className="mt-4 flex items-center font-semibold text-primary">
                                        View Products
                                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
