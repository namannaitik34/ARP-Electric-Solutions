import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Zap, Wind, CircuitBoard, Bolt, Component } from "lucide-react";

const products = [
    { 
        id: 'transformers', 
        title: 'Transformers', 
        description: 'A comprehensive range of transformers for various applications, ensuring efficient power transfer and distribution.', 
        icon: CircuitBoard,
        image: 'https://placehold.co/600x400.png',
        hint: 'power transformer'
    },
    { 
        id: 'copper', 
        title: 'Copper', 
        description: 'High-quality copper products for electrical applications, known for their excellent conductivity.', 
        icon: Wind,
        image: 'https://firebasestorage.googleapis.com/v0/b/arp-electric-solution.firebasestorage.app/o/Products%2Fcopper-picc.jpg?alt=media&token=61977413-c47b-4dec-9236-efaf4c24d1ac',
        hint: 'metal core'
    },
    { 
        id: 'aluminium', 
        title: 'Aluminium', 
        description: 'Lightweight yet strong aluminium components essential for various electrical systems.', 
        icon: Zap,
        image: 'https://placehold.co/600x400.png',
        hint: 'copper foil'
    },
    {
        id: 'crgo',
        title: 'CRGO(Cold Rolled Grain Oriented Steel)',
        description: 'Specialized steel for high-performance transformer cores, minimizing energy losses.',
        icon: Component,
        image: 'https://placehold.co/600x400.png',
        hint: 'steel roll'
    },
    {
        id: 'transformer-accessories',
        title: 'Transformer Accessories',
        description: 'A range of essential accessories to ensure the optimal function and longevity of transformers.',
        icon: Component,
        image: 'https://placehold.co/600x400.png',
        hint: 'switchgear panel'
    },
    {
        id: 'crgo-steel',
        title: 'CRGO Steel',
        description: 'Cold-Rolled Grain-Oriented steel for manufacturing high-performance transformer cores. (Duplicate entry, will be removed or modified based on your specific product list)',
        icon: Component,
        image: 'https://placehold.co/600x400.png',
        hint: 'steel roll'
    },
    {
        id: 'data-center',
        title: 'Data Center',
        description: 'Electrical solutions specifically designed for the demanding power requirements of data centers.',
        icon: Bolt,
        image: 'https://placehold.co/600x400.png',
        hint: 'server room'
    },
    {
        id: 'apfc-harmonic-filter-ups',
        title: 'MV/LV APFC- Harmonic Filter & UPS',
        description: 'Advanced power factor correction, harmonic filtering, and UPS systems for stable and clean power.',
        icon: CircuitBoard,
        image: 'https://placehold.co/600x400.png',
        hint: 'power filter'
    }
];

export default function ProductsPage() {
    return (
        <div className="bg-background text-foreground animate-fadeIn">
            <div className="container py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Products</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We provide a wide range of high-quality electrical products engineered for performance, reliability, and safety.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(product => (
                        <Card key={product.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                             <CardHeader>
                                <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                                    <Image 
                                        src={product.image}
                                        alt={product.title}
                                        data-ai-hint={product.hint}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex items-center gap-4 pt-4">
                                     <product.icon className="w-8 h-8 text-primary shrink-0" />
                                     <CardTitle className="text-xl">{product.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{product.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
