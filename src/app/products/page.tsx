
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronsUpDown } from "lucide-react";
import { productData } from "./categories";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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

                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Left Sidebar */}
                    <aside className="md:col-span-1">
                        <div className="sticky top-24">
                            <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Product Categories</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Accordion type="multiple" className="w-full" defaultValue={productData.map(c => c.slug)}>
                                            {productData.map((category) => (
                                                <AccordionItem key={category.slug} value={category.slug}>
                                                    <AccordionTrigger className="font-semibold text-base hover:no-underline">
                                                        {category.title}
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <ul className="space-y-2 mt-2">
                                                            {category.products.map((product) => (
                                                                <li key={product.slug}>
                                                                    <Link href={`/products/${category.slug}/${product.slug}`} className="block p-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                                                                        {product.title}
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
                    <main className="md:col-span-3 space-y-16">
                        {productData.map((category) => (
                            <section key={category.slug} id={category.slug}>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-3xl font-bold font-headline text-primary">{category.title}</h2>
                                    <Button asChild variant="ghost">
                                        <Link href={`/products/${category.slug}`} className="text-sm font-semibold">
                                            View All <ChevronRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                                    {category.products.map(product => (
                                       <Link key={product.slug} href={`/products/${category.slug}/${product.slug}`} className="group block h-full">
                                            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-transparent hover:border-primary">
                                                <CardHeader className="p-0">
                                                    <div className="relative w-full aspect-video">
                                                        <Image
                                                            src={product.image}
                                                            alt={product.title}
                                                            data-ai-hint={product.hint}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="p-4 flex-grow flex flex-col">
                                                    <h3 className="text-base font-semibold text-accent-foreground">{product.title}</h3>
                                                    <p className="mt-1 text-xs text-muted-foreground flex-grow">{product.description}</p>
                                                     <div className="mt-3 flex items-center text-xs font-semibold text-primary">
                                                        Learn More
                                                        <ChevronRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    )
}
