
'use client';
import { getProduct, getCategory } from "../../categories";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, Star, CheckCircle, Zap, Shield, Thermometer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useState } from "react";

const performanceData = [
  { name: 'Efficiency', value: 98.5, full: 100 },
  { name: 'Load Capacity', value: 110, full: 120 },
  { name: 'Heat Dissipation', value: 85, full: 100 },
  { name: 'Voltage Reg.', value: 99, full: 100 },
];

export default function ProductDetailPage({ params }: { params: { categorySlug: string, productSlug: string } }) {
    const product = getProduct(params.categorySlug, params.productSlug);
    const category = getCategory(params.categorySlug);
    const [mainImage, setMainImage] = useState(product?.image || 'https://placehold.co/800x600.png');
    
    if (!product || !category) {
        notFound();
    }

    const galleryImages = [
        product.image,
        'https://placehold.co/400x400.png',
        'https://placehold.co/400x400.png',
        'https://placehold.co/400x400.png',
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-foreground animate-fadeIn">
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

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Image Gallery */}
                    <div className="flex flex-col gap-4">
                         <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg border group">
                            <Image
                                src={mainImage}
                                alt={product.title}
                                data-ai-hint={product.hint}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
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

                    {/* Right Column: Product Details */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{product.title}</h1>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex items-center gap-1 text-amber-500">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current/50 stroke-current" />
                            </div>
                            <span className="text-muted-foreground text-sm">(125 reviews)</span>
                        </div>
                        <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
                        
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

                        <div className="mt-8">
                            <Button asChild size="lg" className="w-full md:w-auto transition-transform hover:scale-105">
                                <Link href="/contact">Request a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Tabs Section for more details */}
                <div className="mt-16 md:mt-24">
                     <Tabs defaultValue="description" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-primary/10">
                            <TabsTrigger value="description">Full Description</TabsTrigger>
                            <TabsTrigger value="specifications">Technical Specifications</TabsTrigger>
                            <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
                        </TabsList>
                        <TabsContent value="description" className="py-6 px-2 text-muted-foreground text-base">
                            <p>{product.longDescription}</p>
                        </TabsContent>
                        <TabsContent value="specifications" className="py-6">
                             <div className="grid md:grid-cols-2 gap-8 items-center">
                                {product.specs && (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Specification</TableHead>
                                                <TableHead>Value</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {Object.entries(product.specs).map(([key, value]) => (
                                                <TableRow key={key}>
                                                    <TableCell className="font-semibold">{key}</TableCell>
                                                    <TableCell>{value}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
                                <div className="h-80 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={performanceData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis type="number" />
                                            <YAxis dataKey="name" type="category" width={100} />
                                            <Tooltip
                                              contentStyle={{
                                                  backgroundColor: 'hsl(var(--background))',
                                                  borderColor: 'hsl(var(--border))'
                                              }}
                                            />
                                            <Legend />
                                            <Bar dataKey="value" name="Performance" fill="hsl(var(--primary))" background={{ fill: 'hsl(var(--muted))' }} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                             </div>
                        </TabsContent>
                        <TabsContent value="reviews" className="py-6">
                            <p className="text-center text-muted-foreground">Customer reviews are coming soon!</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
