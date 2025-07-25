
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getCategory } from "../categories";
import { ChevronRight, Home } from "lucide-react";
import { notFound } from "next/navigation";

export default function ProductCategoryPage({ params }: { params: { categorySlug: string } }) {
    const category = getCategory(params.categorySlug);

    if (!category) {
        notFound();
    }

    return (
        <div className="bg-background text-foreground animate-fadeIn">
            <div className="container py-16 md:py-24">
                <div className="mb-12">
                     <div className="flex items-center text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary">
                            <Home className="h-4 w-4" />
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <Link href="/products" className="hover:text-primary">Products</Link>
                        <ChevronRight className="h-4 w-4 mx-1" />
                        <span className="font-medium text-foreground">{category.title}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mt-4">{category.title}</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                        {category.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map(product => (
                       <Link key={product.slug} href={`/products/${category.slug}/${product.slug}`} className="group block">
                            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <CardHeader className="p-0">
                                    <div className="relative w-full aspect-[4/3]">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            data-ai-hint={product.hint}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-semibold text-accent-foreground">{product.title}</h3>
                                    <p className="mt-2 text-muted-foreground flex-grow">{product.description}</p>
                                     <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                                        Learn More
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
