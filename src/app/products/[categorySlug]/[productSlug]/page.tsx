
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
import type { Product } from "../../categories";
import { cn } from "@/lib/utils";

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

    const ProductFeaturesGrid = ({ features }: { features: Product['features'] }) => {
        if (!features || features.length === 0) {
            return null;
        }
    
        return (
            <div className="not-prose mt-16">
                 <h3 className="text-2xl font-bold text-primary mb-8">Key Features & Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex gap-6 items-start group transition-transform duration-300 hover:-translate-y-2">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <feature.icon className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-accent-foreground">{feature.title}</h4>
                                <p className="mt-2 text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const CustomProductSection = ({ section }: { section: Product['customSection'] }) => {
        if (!section) return null;

        return (
            <div className="mt-16 md:mt-24 bg-primary/5 p-8 md:p-12 rounded-lg">
                <h3 className="text-2xl font-bold text-primary">{section.title}</h3>
                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                <p className="text-muted-foreground max-w-3xl">{section.description}</p>
            </div>
        );
    };

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
            <ProductFeaturesGrid features={product.features} />
            <CustomProductSection section={product.customSection} />
            <ClimaticClasses />
        </div>
    );
    
    const SuperEnameledCopperContent = () => {
        const wireSpecHeaders = [
            'Types',
            'Modified Polyester 130°C',
            'Modified Polyester 155°C',
            'Polysterimide 180°C',
            'Dual Coated Wire PE/PEI + PAI 200°C',
        ];

        const wireSpecBody = [
            {
                type: 'Range - Copper',
                specs: ['0.06 to 5.0 mm', '0.06 to 3.0 mm', '0.06 to 5.0 mm', '0.06 to 4.0 mm'],
            },
            {
                type: 'Range - Aluminium',
                specs: ['0.25 to 5.0 mm', '0.25 to 5.0 mm', '0.25 to 5.0 mm', '0.25 to 5.0 mm'],
            },
            {
                type: 'Specifications - Copper',
                specs: [
                    'IS 13730-34\nIEC 60317-34\nIS 13730-9\nIEC 60317-9',
                    'IS 13730-3\nIEC 60317-3',
                    'IS 13730-8\nIEC 60317-8\nIS 13730-15\nIEC 60317-15',
                    'IS 13730-13\nIEC 60317-13\nNEMA MW\n35A/35C\nIEC 60317-25',
                ],
            },
            {
                type: 'Specifications - Aluminium',
                specs: ['for 1.00 mm wire', 'for 1.00 mm wire', 'for 1.00 mm wire', 'for Aluminium'],
            },
        ];

        return (
            <>
                <div className="mt-16 md:mt-24 prose prose-lg max-w-none text-muted-foreground">
                    <h2 className="text-3xl font-bold font-headline text-primary not-prose">About Super Enameled Copper</h2>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <p>{product.longDescription}</p>
                </div>
                
                <WhyChooseARP />
                <ProductFeaturesGrid features={product.features} />
                <CustomProductSection section={product.customSection} />

                <div className="not-prose mt-16">
                    <h3 className="text-2xl font-bold text-primary">Wire Specifications</h3>
                     <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {wireSpecHeaders.map((header) => (
                                    <TableHead key={header} className="font-bold">{header.split('\n').map((line, i) => <div key={i}>{line}</div>)}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {wireSpecBody.map((row) => (
                                <TableRow key={row.type}>
                                    <TableCell className="font-semibold">{row.type}</TableCell>
                                    {row.specs.map((spec, i) => (
                                        <TableCell key={i}>{spec.split('\n').map((line, j) => <div key={j}>{line}</div>)}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </>
        )
    };

    const CopperFoilContent = () => {

        const specifications = [
            { spec: 'Thickness', details: '0.025–0.2 mm' },
            { spec: 'Width', details: 'Up to 1000 mm' },
            { spec: 'Electrical Conductivity', details: '≥ 100% IACS (International Annealed Copper Standard)' },
            { spec: 'Application', details: 'Power Transformers, Current Transformers, Instrument Transformers' },
            { spec: 'Standards', details: 'ASTM B152, IEC 60228' },
        ];

        return (
            <div className="mt-16 md:mt-24 prose prose-lg max-w-none text-muted-foreground">
                <h2 className="text-3xl font-bold font-headline text-primary not-prose">Copper Foils for Transformers</h2>
                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                <p>Our Transformer Copper Foils are crucial components for high-performance transformers, offering exceptional conductivity and stability for long-term operation.</p>
                <p>Transformer copper foils are a vital part of transformer manufacturing. They are primarily used to connect the transformer core and output terminals. Made from high-quality oxygen-free copper, these foils offer excellent conductivity, low contact resistance, and minimal temperature rise, ensuring minimal power loss and stable transformer operation over time.</p>
                
                <h3 className="text-2xl font-bold text-primary mt-16 not-prose">Why Choose ARP Transformer Copper Foils</h3>
                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                <p>ARP Electric Solution provides high-quality transformer copper foils that are specifically engineered to meet the rigorous requirements of transformer manufacturing. Our foils are produced using top-grade oxygen-free copper and innovative production techniques to ensure optimal performance and longevity in power transformers, current transformers, and other transformer applications.</p>
            
                 <ProductFeaturesGrid features={product.features} />

                <div className="not-prose mt-16">
                    <h3 className="text-2xl font-bold text-primary">Specifications</h3>
                     <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <p className="text-muted-foreground max-w-3xl mb-8">
                        Our Transformer Copper Foils are available in various specifications, offering the flexibility needed for different transformer applications. Here are the key specifications:
                    </p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">Specification</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {specifications.map((item) => (
                                <TableRow key={item.spec}>
                                    <TableCell className="font-semibold">{item.spec}</TableCell>
                                    <TableCell>{item.details}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <CustomProductSection section={product.customSection} />
            </div>
        );
    };

    const CopperCtcContent = () => (
        <>
            <div className="mt-16 md:mt-24">
                <h2 className="text-3xl font-bold font-headline text-primary">About {product.title}</h2>
                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>{product.longDescription}</p>
                </div>
            </div>

            <WhyChooseARP />
            <ProductFeaturesGrid features={product.features} />
            <CustomProductSection section={product.customSection} />
            
            <div className="mt-16 md:mt-24 prose prose-lg max-w-none text-muted-foreground">
                <h3 className="text-2xl font-bold text-primary not-prose">Advantages of Copper CTC</h3>
                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                <p>
                    By increasing the number of strips in a CTC, the conductor's area is subdivided further compared to a single solid conductor. This leads to several benefits:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Reduction of electrical losses.</li>
                    <li>Increased flexibility, making it easier to wind into tight spaces.</li>
                    <li>Optimized size of the winding for better utilization of space.</li>
                    <li>Enhanced transformer efficiency and reduced manufacturing costs.</li>
                </ul>

                <h3 className="text-2xl font-bold text-primary mt-12 not-prose">Insulation Options</h3>
                <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                <p>
                    CTCs can be insulated with a variety of materials, from pure cellulose kraft paper to high-performance insulators like thermo-stabilized paper, micro-crepe, polyester, and aramids, all of which support higher thermal classes. These insulation options ensure the Copper CTC can meet demanding operational conditions, such as high temperatures and electrical stresses.
                </p>
            </div>
        </>
    );

    const CopperPiccContent = () => {
        const specifications = [
            { spec: 'Conductor Standards', details: 'IEC, IS, DIN, BS' },
            { spec: 'Width', details: '5 mm to 20 mm' },
            { spec: 'Thickness', details: '0.8 mm to 9 mm' },
            { spec: 'Periphery of Rectangular Conductor', details: '50 mm max' },
            { spec: 'Conductor Width to Thickness Ratio', details: '10:1' },
            { spec: 'Insulation Thickness', details: '0.3 mm to 6 mm' },
            { spec: 'Insulation Types', details: 'Kraft Paper, Thermally Stabilised Paper, Diamond Dotted Epoxy Paper, NomexTM, Polyester, Mica' },
            { spec: 'Type of Lapping', details: 'Butt Lapped, 30-50% Overlapped, Interlocked (in various combinations of paper and tape widths)' },
            { spec: 'Applications', details: 'Transformer windings, power cables, electrical devices' },
        ];

        return (
            <>
                <div className="mt-16 md:mt-24">
                    <h2 className="text-3xl font-bold font-headline text-primary">About {product.title}</h2>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p>{product.longDescription}</p>
                    </div>
                </div>

                <WhyChooseARP />
                <ProductFeaturesGrid features={product.features} />
                <CustomProductSection section={product.customSection} />

                <div className="not-prose mt-16">
                    <h3 className="text-2xl font-bold text-primary">Technical Specifications</h3>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <p className="text-muted-foreground max-w-3xl mb-8">
                        Our Copper PICC is available in various specifications, ensuring optimal performance for a wide range of electrical applications. Below are the key technical specifications and features:
                    </p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[300px]">Specification</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {specifications.map((item) => (
                                <TableRow key={item.spec}>
                                    <TableCell className="font-semibold">{item.spec}</TableCell>
                                    <TableCell>{item.details}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="mt-16 md:mt-24">
                    <h3 className="text-2xl font-bold text-primary">Ensuring Long-Term Reliability</h3>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <p className="text-muted-foreground max-w-3xl">
                        At ARP Electric Solution, we prioritize performance, safety, and durability. Our Copper PICC is crafted to meet global standards, ensuring long-term reliability and minimal maintenance for high-power electrical applications.
                    </p>
                </div>
            </>
        );
    };

    const AluminiumFoilContent = () => {
        const specifications = [
            { spec: 'Thickness', details: '0.01 mm to 0.10 mm' },
            { spec: 'Width', details: 'Up to 1500 mm' },
            { spec: 'Conductivity', details: 'Excellent electrical conductivity' },
            { spec: 'Resistance to Corrosion', details: 'Highly resistant to corrosion and oxidation' },
            { spec: 'Applications', details: 'Food packaging, electrical cables, heat exchangers, insulation, and more' },
        ];

        return (
            <div className="mt-16 md:mt-24">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                     <h2 className="text-3xl font-bold font-headline text-primary not-prose">About Aluminium Foil</h2>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <p>{product.longDescription}</p>
                </div>
                <WhyChooseARP />
                <ProductFeaturesGrid features={product.features} />
                <CustomProductSection section={product.customSection} />

                <div className="not-prose mt-8">
                    <h3 className="text-2xl font-bold text-primary">Technical Specifications</h3>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">Specification</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {specifications.map((item) => (
                                <TableRow key={item.spec}>
                                    <TableCell className="font-semibold">{item.spec}</TableCell>
                                    <TableCell>{item.details}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-primary">Innovative Solutions for Every Need</h3>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p>At ARP Electric Solution, we leverage the latest technologies to produce Aluminium Foil that offers superior performance across various industries. Our commitment to quality ensures that every roll of aluminium foil meets the highest standards of strength, flexibility, and resistance to environmental factors.</p>
                    </div>
                </div>
            </div>
        );
    };

    const SuperEnameledAluminiumContent = () => {
        const specifications = [
            { spec: 'Thickness', details: '0.10 mm to 3.00 mm' },
            { spec: 'Coating Type', details: 'Polyurethane, Polyester, or Epoxy' },
            { spec: 'Electrical Insulation', details: 'Excellent insulation properties for safe electrical performance' },
            { spec: 'Heat Resistance', details: 'Withstands temperatures up to 200°C' },
            { spec: 'Applications', details: 'Electrical motors, transformers, generators, and other electrical windings' },
        ];

        return (
            <div className="mt-16 md:mt-24">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                     <h2 className="text-3xl font-bold font-headline text-primary not-prose">About Super Enameled Aluminium</h2>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <p>{product.longDescription}</p>
                </div>
                <WhyChooseARP />
                <ProductFeaturesGrid features={product.features} />
                <CustomProductSection section={product.customSection} />

                <div className="not-prose mt-8">
                    <h3 className="text-2xl font-bold text-primary">Technical Specifications</h3>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                     <p className="text-muted-foreground max-w-3xl mb-8">
                        Our Super Enameled Aluminium is manufactured to the highest standards and is suitable for a range of applications. Below are the key technical specifications and features:
                    </p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">Specification</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {specifications.map((item) => (
                                <TableRow key={item.spec}>
                                    <TableCell className="font-semibold">{item.spec}</TableCell>
                                    <TableCell>{item.details}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-primary">Reliable Performance in Every Application</h3>
                    <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p>At ARP Electric Solution, we use advanced technologies and quality control measures to ensure that our Super Enameled Aluminium meets the highest standards of performance and durability. Whether you are manufacturing electrical motors, transformers, or other high-performance electrical components, our product ensures superior performance and reliability.</p>
                    </div>
                </div>
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
            case 'super-enameled-copper':
                return <SuperEnameledCopperContent />;
            case 'copper-ctc':
                return <CopperCtcContent />;
            case 'copper-picc':
                return <CopperPiccContent />;
            case 'aluminium-foil':
                return <AluminiumFoilContent />;
            case 'super-enameled-aluminium':
                return <SuperEnameledAluminiumContent />;
            default:
                return (
                    <>
                        <div className="mt-16 md:mt-24">
                            <h2 className="text-3xl font-bold font-headline text-primary">About {product.title}</h2>
                            <div className="w-16 h-1 bg-primary/30 mt-2 mb-4"></div>
                            <div className="prose prose-lg max-w-none text-muted-foreground">
                                <p>{product.longDescription}</p>
                            </div>
                        </div>
                        
                        <WhyChooseARP />
                        
                        <ProductFeaturesGrid features={product.features} />
                        
                        <CustomProductSection section={product.customSection} />

                        {product.slug === 'oil-immersed-transformers' && <OilImmersedSpecs />}
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
                                                                    <Link href={`/products/${category.slug}/${p.slug}`} className={cn(`block p-2 rounded-md text-sm transition-colors`, p.slug === product.slug ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground')}>
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
                                {product.features && product.features.length > 0 && (
                                    <Card className="mt-6 bg-primary/5 border-primary/20">
                                        <CardHeader>
                                            <CardTitle className="text-lg text-primary">Key Features</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3 text-muted-foreground">
                                                {product.features.map((feature, index) => (
                                                    <li key={index} className="flex items-center gap-3">
                                                        <feature.icon className="w-5 h-5 text-primary" /> 
                                                        {feature.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                )}
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

