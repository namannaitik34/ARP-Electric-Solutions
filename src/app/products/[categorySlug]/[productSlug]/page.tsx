
'use client';
import { getProduct } from "../../categories";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function ProductDetailPage({ params }: { params: { categorySlug: string, productSlug: string } }) {
    const product = getProduct(params.categorySlug, params.productSlug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-background text-foreground animate-fadeIn">
            <div className="container py-16 md:py-24">
                <div className="mb-12">
                     <div className="flex items-center text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary"><Home className="h-4 w-4" /></Link>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <Link href="/products" className="hover:text-primary">Products</Link>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <Link href={`/products/${params.categorySlug}`} className="hover:text-primary capitalize">{params.categorySlug.replace(/-/g, ' ')}</Link>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <span className="font-medium text-foreground">{product.title}</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={product.image}
                            alt={product.title}
                            data-ai-hint={product.hint}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{product.title}</h1>
                        <p className="mt-4 text-lg text-muted-foreground">{product.longDescription}</p>
                        
                        {product.specs && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-accent-foreground mb-4">Specifications</h2>
                                <Card>
                                    <Table>
                                        <TableBody>
                                            {Object.entries(product.specs).map(([key, value]) => (
                                                <TableRow key={key}>
                                                    <TableCell className="font-semibold">{key}</TableCell>
                                                    <TableCell>{value}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Card>
                            </div>
                        )}

                        <div className="mt-8">
                            <Button asChild size="lg">
                                <Link href="/contact">Request a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
