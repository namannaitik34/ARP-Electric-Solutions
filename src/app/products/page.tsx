import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Zap, Wind, CircuitBoard, Bolt, Component } from "lucide-react";

const products = [
    { 
        id: 'power-transformer', 
        title: 'Power Transformer', 
        description: 'High-efficiency power transformers for industrial and commercial use, ensuring stable power distribution.', 
        icon: CircuitBoard,
        image: 'https://placehold.co/600x400.png',
        hint: 'power transformer'
    },
    { 
        id: 'ups-system', 
        title: 'UPS System', 
        description: 'Reliable Uninterruptible Power Supply systems to safeguard your critical equipment from power surges.', 
        icon: Bolt,
        image: 'https://placehold.co/600x400.png',
        hint: 'server room'
    },
    { 
        id: 'amorphous-core', 
        title: 'Amorphous Core', 
        description: 'Advanced amorphous cores that reduce energy loss and improve transformer efficiency.', 
        icon: Wind,
        image: 'https://placehold.co/600x400.png',
        hint: 'metal core'
    },
    { 
        id: 'copper-foil', 
        title: 'Copper Foil', 
        description: 'High-conductivity copper foil for applications in electronics, batteries, and shielding.', 
        icon: Zap,
        image: 'https://placehold.co/600x400.png',
        hint: 'copper foil'
    },
    {
        id: 'switchgear',
        title: 'MV/LV Switchgear',
        description: 'Medium and low voltage switchgear for reliable circuit protection and control.',
        icon: Component,
        image: 'https://placehold.co/600x400.png',
        hint: 'switchgear panel'
    },
    {
        id: 'crgo-steel',
        title: 'CRGO Steel',
        description: 'Cold-Rolled Grain-Oriented steel for manufacturing high-performance transformer cores.',
        icon: Component,
        image: 'https://placehold.co/600x400.png',
        hint: 'steel roll'
    }
];

export default function ProductsPage() {
    return (
        <div className="bg-background text-foreground">
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
