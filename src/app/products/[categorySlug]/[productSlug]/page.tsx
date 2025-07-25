
'use client';
import { getProduct, getCategory, productData } from "../../categories";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, Star, CheckCircle, Zap, Shield, Thermometer, HardHat, Leaf, Waves, Gauge, Fan, Layers, GitCommitHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const performanceData = [
  { name: 'Efficiency', value: 98.5, full: 100 },
  { name: 'Load Capacity', value: 110, full: 120 },
  { name: 'Heat Dissipation', value: 85, full: 100 },
  { name: 'Voltage Reg.', value: 99, full: 100 },
];

export default function ProductDetailPage() {
    const params = useParams() as { categorySlug: string; productSlug: string; };
    const product = getProduct(params.categorySlug, params.productSlug);
    const category = getCategory(params.categorySlug);

    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        if (product) {
            setMainImage(product.image);
        }
    }, [product]);
    
    if (!product || !category) {
        notFound();
    }

    const galleryImages = product.gallery || (product.image ? [product.image] : []);

    const ClimaticClasses = () => (
        <div className="mt-16 md:mt-24">
            <h3 className="text-2xl font-bold text-primary">Climatic and Environmental Classes</h3>
            <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
            <p className="text-muted-foreground max-w-3xl mb-8">
                ARP Dry Type Transformers comply with international standards for climatic and environmental conditions. These transformers are designed to operate under the toughest conditions as outlined in IEC 60076-11. Below are the key classifications:
            </p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Climatic Class</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-semibold">Class C1</TableCell>
                        <TableCell>Suitable for operation at ambient temperatures above -5°C but can be exposed to temperatures down to -25°C during transport/storage.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-semibold">Class C2</TableCell>
                        <TableCell>Suitable for operation, transport, and storage at ambient temperatures down to -25°C.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-semibold">Class C3</TableCell>
                        <TableCell>Suitable for transport/storage down to -40°C and operation down to 25°C.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-semibold">Class C4</TableCell>
                        <TableCell>Suitable for transport/storage down to -50°C and operation down to 40°C.</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-semibold">Class C5</TableCell>
                        <TableCell>Suitable for transport/storage down to -60°C and operation down to 50°C.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );

    const WhyChooseARP = () => (
        <div className="mt-12">
            <h3 className="text-2xl font-bold text-primary">Why Choose ARP {product.title}?</h3>
            <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
            <p className="text-muted-foreground max-w-3xl">
                ARP's {product.title} offer unparalleled reliability and efficiency. With an emphasis on safety and performance, our products are ideal for use in various industrial and commercial applications. Designed to meet the highest environmental, climatic, and fire behaviour standards, our transformers ensure optimal operation even in the most demanding environments.
            </p>
        </div>
    );

    const CastResinTransformerContent = () => (
        <div className="mt-16 md:mt-24">
            <Tabs defaultValue="overview">
                <TabsList className="bg-transparent p-0 border-b w-full justify-start rounded-none">
                    <TabsTrigger value="overview" className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 rounded-none text-base">Overview</TabsTrigger>
                    <TabsTrigger value="benefits" className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 rounded-none text-base">Key Benefits</TabsTrigger>
                    <TabsTrigger value="applications" className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 rounded-none text-base">Applications</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6 text-muted-foreground prose prose-lg max-w-none">
                    <p>{product.longDescription}</p>
                </TabsContent>
                <TabsContent value="benefits" className="mt-6 text-muted-foreground prose prose-lg max-w-none">
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Enhanced Safety:</strong> Self-extinguishing and fire-resistant properties minimize fire hazards.</li>
                        <li><strong>Eco-Friendly:</strong> No risk of oil leakage, making them ideal for environmentally sensitive areas.</li>
                        <li><strong>Low Maintenance:</strong> Requires minimal upkeep compared to oil-filled transformers.</li>
                        <li><strong>High Reliability:</strong> Excellent resistance to short circuits and impulse voltages.</li>
                        <li><strong>Compact Design:</strong> Smaller footprint allows for flexible installation in confined spaces.</li>
                    </ul>
                </TabsContent>
                <TabsContent value="applications" className="mt-6 text-muted-foreground prose prose-lg max-w-none">
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Public Infrastructure:</strong> Airports, hospitals, subways, and high-rise buildings.</li>
                        <li><strong>Industrial Sector:</strong> Chemical plants, steel mills, and manufacturing facilities.</li>
                        <li><strong>Critical Power:</strong> Data centers, telecommunication hubs, and research labs.</li>
                        <li><strong>Renewable Energy:</strong> Wind farms, solar power plants, and biomass facilities.</li>
                        <li><strong>Specialized Environments:</strong> Marine vessels, offshore platforms, and underground mines.</li>
                    </ul>
                </TabsContent>
            </Tabs>
            <WhyChooseARP />
            <ClimaticClasses />
        </div>
    );

    const CopperFoilContent = () => {
        const features = [
            {
                title: 'Superior Electrical Conductivity',
                description: 'Our copper foils provide excellent electrical conductivity, minimizing power loss and ensuring efficient energy transmission in transformers.',
                icon: Gauge,
            },
            {
                title: 'Low Temperature Rise',
                description: 'The high conductivity and low contact resistance of our copper foils result in reduced temperature rise, ensuring stable transformer operation under high load conditions.',
                icon: Fan,
            },
            {
                title: 'Excellent Insulation',
                description: 'ARP transformer copper foils are coated with high-quality materials like polyester, polyetherimide, and polypropylene films, ensuring superior electrical insulation performance.',
                icon: Layers,
            },
            {
                title: 'High Mechanical Strength',
                description: 'The copper foils possess high mechanical strength, ensuring durability and reliability even under demanding transformer winding requirements.',
                icon: GitCommitHorizontal,
            },
        ];

        return (
            <div className="mt-16 md:mt-24 prose prose-lg max-w-none text-muted-foreground">
                <h2 className="text-3xl font-bold font-headline text-primary not-prose">Copper Foils for Transformers</h2>
                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                <p>Our Transformer Copper Foils are crucial components for high-performance transformers, offering exceptional conductivity and stability for long-term operation.</p>
                <p>Transformer copper foils are a vital part of transformer manufacturing. They are primarily used to connect the transformer core and output terminals. Made from high-quality oxygen-free copper, these foils offer excellent conductivity, low contact resistance, and minimal temperature rise, ensuring minimal power loss and stable transformer operation over time.</p>
                
                <div className="not-prose mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-accent-foreground">{feature.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mt-16 not-prose">Why Choose ARP Transformer Copper Foils</h3>
                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                <p>ARP Electric Solution provides high-quality transformer copper foils that are specifically engineered to meet the rigorous requirements of transformer manufacturing. Our foils are produced using top-grade oxygen-free copper and innovative production techniques to ensure optimal performance and longevity in power transformers, current transformers, and other transformer applications.</p>
            </div>
        );
    };
    
    const OilImmersedSpecs = () => {
        const [progressValues, setProgressValues] = useState([0, 0, 0, 0]);

        useEffect(() => {
            const timers = performanceData.map((item, index) =>
                setTimeout(() => {
                    setProgressValues(prev => {
                        const newValues = [...prev];
                        newValues[index] = (item.value / item.full) * 100;
                        return newValues;
                    });
                }, (index + 1) * 200)
            );
            return () => timers.forEach(clearTimeout);
        }, []);

        return (
            <div className="mt-16 md:mt-24">
                <h2 className="text-3xl font-bold font-headline text-primary">Technical Specifications</h2>
                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Specification</TableHead>
                                    <TableHead>Value</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {product.specs && Object.entries(product.specs).map(([key, value]) => (
                                    <TableRow key={key}>
                                        <TableCell className="font-semibold">{key}</TableCell>
                                        <TableCell>{value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="space-y-6 pt-2">
                         <h3 className="text-xl font-bold text-accent-foreground mb-4">Performance Metrics</h3>
                        {performanceData.map((item, index) => (
                            <div key={item.name}>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
                                    <span className="text-sm font-semibold text-primary">{item.value}%</span>
                                </div>
                                <Progress value={progressValues[index]} className="h-2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const renderProductContent = () => {
        switch (product.slug) {
            case 'cast-resin-transformers':
                return <CastResinTransformerContent />;
            case 'copper-foil':
                return <CopperFoilContent />;
            case 'oil-immersed-transformers':
                 return (
                    <>
                        <div className="mt-16 md:mt-24">
                            <h2 className="text-3xl font-bold font-headline text-primary">Full Description</h2>
                            <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                            <div className="prose prose-lg max-w-none text-muted-foreground">
                                <p>{product.longDescription}</p>
                            </div>
                        </div>
                        {product.features && (
                            <div className="mt-16 md:mt-24">
                                <h2 className="text-3xl font-bold font-headline text-primary">Why Choose {product.title}</h2>
                                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    <feature.icon className="w-8 h-8" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-accent-foreground">{feature.title}</h3>
                                                <p className="mt-2 text-muted-foreground">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <OilImmersedSpecs />
                    </>
                );
            default:
                return (
                    <>
                        <div className="mt-16 md:mt-24">
                            <h2 className="text-3xl font-bold font-headline text-primary">Full Description</h2>
                            <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                            <div className="prose prose-lg max-w-none text-muted-foreground">
                                <p>{product.longDescription}</p>
                            </div>
                        </div>
                        {product.features && (
                            <div className="mt-16 md:mt-24">
                                <h2 className="text-3xl font-bold font-headline text-primary">Why Choose {product.title}</h2>
                                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    <feature.icon className="w-8 h-8" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-accent-foreground">{feature.title}</h3>
                                                <p className="mt-2 text-muted-foreground">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                );
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-foreground animate-fadeIn">
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://placehold.co/1980x480.png')` }} data-ai-hint="industrial background technology">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container relative h-full flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">{product.title}</h1>
                </div>
            </div>

            <div className="container py-16 md:py-24">
                <div className="mb-8">
                     <div className="flex items-center text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors"><Home className="h-4 w-4" /></Link>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <Link href={`/products/${params.categorySlug}`} className="hover:text-primary transition-colors capitalize">{category.title}</Link>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <span className="font-medium text-foreground">{product.title}</span>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Left Sidebar */}
                    <aside className="md:col-span-1">
                         <div className="sticky top-24">
                            <div className="max-h-[calc(100vh-6rem)] overflow-y-auto pr-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Product Categories</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Accordion type="multiple" className="w-full" defaultValue={[params.categorySlug]}>
                                            {productData.map((category) => (
                                                <AccordionItem key={category.slug} value={category.slug}>
                                                    <AccordionTrigger className="font-semibold text-base hover:no-underline">
                                                        {category.title}
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <ul className="space-y-2 mt-2">
                                                            {category.products.map((p) => (
                                                                <li key={p.slug}>
                                                                    <Link href={`/products/${category.slug}/${p.slug}`} className={`block p-2 rounded-md text-sm transition-colors ${p.slug === product.slug ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}>
                                                                        {p.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </aside>

                    {/* Right Content */}
                    <main className="md:col-span-3">
                         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            <div className="lg:col-span-3">
                                <div className="w-full flex flex-col gap-4">
                                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border group">
                                        {mainImage && <Image
                                            src={mainImage}
                                            alt={product.title}
                                            data-ai-hint={product.hint}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />}
                                    </div>
                                    <div className="grid grid-cols-4 gap-4">
                                        {galleryImages.map((img, idx) => (
                                            <div key={idx} 
                                                className={`relative aspect-square rounded-md overflow-hidden cursor-pointer border-2 transition-all ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                                                onMouseEnter={() => setMainImage(img)}>
                                                <Image
                                                    src={img}
                                                    alt={`${product.title} thumbnail ${idx + 1}`}
                                                    data-ai-hint={product.hint}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2">
                                <h1 className="text-3xl font-bold font-headline text-primary">{product.title}</h1>
                                <p className="mt-4 text-muted-foreground">{product.description}</p>
                                <Card className="mt-6 bg-primary/5 border-primary/20">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-primary">Key Features</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> High Efficiency & Low Energy Loss</li>
                                            <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-blue-500" /> Superior Overload Capability</li>
                                            <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-red-500" /> Enhanced Safety and Protection</li>
                                            <li className="flex items-center gap-3"><Thermometer className="w-5 h-5 text-orange-500" /> Optimal Thermal Performance</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {renderProductContent()}
                        
                         <div className="mt-16 text-center">
                            <Button asChild size="lg" className="transition-transform hover:scale-105">
                                <Link href="/contact">Request a Quote</Link>
                            </Button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )

}
