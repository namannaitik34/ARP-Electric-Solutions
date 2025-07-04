'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircuitBoard, Bolt, Zap, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InteractiveCard from "@/components/InteractiveCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SkewedCubeStack from '@/components/SkewedCubeStack';
import { useEffect } from 'react';
import { useState } from "react";

const featuredServices = [
  {
    title: "Power Transformers",
    description: "Robust and efficient transformers for power distribution networks.",
    icon: CircuitBoard,
    href: "/services#transformers",
  },
  {
    title: "UPS Systems",
    description: "Ensure uninterrupted power for your critical operations with our UPS solutions.",
    icon: Bolt,
    href: "/services#ups-systems",
  },
  {
    title: "Specialty Cores",
    description: "Advanced amorphous and nanocrystalline cores for high-tech applications.",
    icon: Wind,
    href: "/services#amorphous-core",
  },
  {
    title: "Conductive Materials",
    description: "High-grade copper foils and busbars for superior electrical conductivity.",
    icon: Zap,
    href: "/services#copper-foil"
  },
];

const products = [
  {
    id: 1,
    name: "Power Transformer",
    imageSrc: "/images/power-transformer.jpg", // Replace with actual image path
    description: "High-quality transformers for efficient power transmission.",
  },
  {
    id: 2,
    name: "Distribution Transformer",
    imageSrc: "/images/distribution-transformer.jpg", // Replace with actual image path
    description: "Reliable distribution transformers for various applications.",
  },
  {
    id: 3,
    name: "Dry Type Transformer",
    imageSrc: "/images/dry-type-transformer.jpg", // Replace with actual image path
    description: "Safe and environmentally friendly dry type transformers.",
  },
  {
    id: 4,
    name: "Specialty Transformer",
    imageSrc: "/images/specialty-transformer.jpg", // Replace with actual image path
    description: "Custom-designed transformers for unique requirements.",
  },
];
const transformerAccessories = [
  { id: 1, name: "Bushings", description: "High-voltage and low-voltage bushings" },
  { id: 2, name: "Cooling Fans", description: "Efficient cooling systems" },
  { id: 3, name: "Oil Conservators", description: "For oil expansion and contraction" },
 { id: 4, name: "Buchholz Relays", description: "Gas and oil actuated protective relays" },
  { id: 5, name: "Tap Changers", description: "On-load and off-load tap changers" },
  { id: 6, name: "Pressure Relief Devices", description: "For protection against internal faults" },
  { id: 7, name: "Temperature Indicators", description: "Winding and oil temperature indicators" },
 { id: 8, name: "Moisture Absorbers", description: "Silica gel breathers" },
 { id: 9, name: "Control Cabinets", description: "For monitoring and control" },
 { id: 10, name: "Radiators", description: "For heat dissipation" },
  { id: 11, name: "Terminal Connectors", description: "Various types and sizes" },
 { id: 12, name: "Gaskets and Sealing", description: "Oil-resistant gaskets" },
 { id: 13, name: "Insulating Paper", description: "For winding insulation" },
  { id: 14, name: "Transformer Oil", description: "High-quality insulating oil" },
 { id: 15, name: "Arresters", description: "Surge arresters for protection" },
 { id: 16, name: "Monitoring Systems", description: "Online monitoring solutions" },
 { id: 17, name: "Valves", description: "Drain and sampling valves" },
 { id: 18, name: "Cable Boxes", description: "For cable termination" },
  { id: 19, name: "Protective Relays", description: "Differential and overcurrent relays" },
  { id: 20, name: "Bushings CTs", description: "Current transformers for metering and protection" },
  { id: 21, name: "Fan Control Panels", description: "Automatic fan control systems" },
];



export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Electrical components background"
            data-ai-hint="electrical components"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        </div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-primary-foreground">
            Empowering Industries with Reliable Electrical Solutions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            ARP Electric Solution delivers top-tier electrical components, from transformers to custom-designed cores, ensuring your operations run smoothly and efficiently.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">About ARP Electric Solution</h2>
            <p className="mt-4 text-muted-foreground">
              With over 20 years of experience, ARP Electric Solution is a trusted product solution provider in the fields of power transmission, distribution, and transformer technologies. Our expertise spans across raw materials, transformer accessories, CRGO, copper foil, CTC, PICC, super enameled wire, MV/LV APFC systems, harmonic filters, UPS and data centers, ring main units (RMU), and MV/LV switchgear.
              <br/> We strictly adhere to ANSI, IEC, and BS standards, delivering cost-effective, reliable, and innovative solutions tailored to meet the evolving demands of clients worldwide.
              <br/>At ARP Electric Solution, we are committed to providing superior service in a dynamic, market-driven environment. Our divisions are dedicated to delivering tailored, comprehensive, and technology-driven solutions in the electrical sector. We take pride in our forward-thinking approach and continuously strive to stay ahead through technological innovations and process expertise, offering one-stop solutions that ensure quality, efficiency, and customer satisfaction.

            </p>
            <Button asChild className="mt-6">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Factory interior"
              data-ai-hint="factory interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">
              Our Core Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We offer a wide range of products designed to meet the diverse needs of
              modern industries.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Card className="h-full transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl bg-card group-hover:bg-accent">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-full transition-colors duration-300 group-hover:bg-primary">
                      <service.icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
                      Learn more{" "}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Product Showcase Intro Section */}
      <section className="py-20 md:py-28 bg-blue-950 text-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center relative">
          {/* Design Element */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-px bg-white h-24 opacity-50 hidden md:block"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-24 bg-primary hidden md:block"></div>

          <div>
            <p className="text-sm uppercase tracking-wider text-primary">We Are AKS International FZC</p>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mt-2">
              Our Products
              <br/>
              For the Power
              <br/>
              Industry
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              Explore our wide range of high-quality power transmission, distribution, transformer solutions, Raw Material, Transformer Accessories, CRGO, Copper Foil, CTC, PICC, Super Enameled, MV/LV APFC, Harmonic Filter, UPS and Data Center, Ring Main Unit (RMU), MV/LV Switchgear etc,
              designed to meet the needs of clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 md:py-24 bg-gray-100"> {/* Added a light gray background */}
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Product Showcase</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Explore some of our featured products.
            </p>
          </div>

          <div className="mt-12">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
                opts={{
                  align: "start",
                }}
              >
              <CarouselContent className="-ml-6">
                {[...Array(14)].map((_, index) => (
                  <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/4">
                    <InteractiveCard />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      {/* ANSI Standard Compliance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-600">Global Standards Compliance</p>
            <h2 className="text-3xl font-bold font-headline text-gray-900 mt-2">
              ANSI Standard
            </h2>
            {/* Visual Separator Placeholder */}
            <div className="w-16 h-1 bg-primary mt-4"></div>
            <p className="mt-6 text-gray-700">
              Our products are designed under ANSI standards are known for their robust performance, reliability, and compliance with global requirements. These products are engineered to cater to industrial needs where precision and dependability are paramount.
            </p>
            {/* Read More Link Placeholder */}
            <div className="mt-6">
              <Link href="#" className="text-primary font-semibold flex items-center group">
                READ MORE
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
          {/* Right Column (Image Placeholder) */}
          <div className="flex justify-center items-center">
            {/* Replace with your image or visual element */}
            <div className="w-full max-w-sm h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
              Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* IEC Standard Compliance Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-600">Precision Engineering</p>
            <h2 className="text-3xl font-bold font-headline text-gray-900 mt-2">
              IEC Standard
            </h2>
            {/* Visual Separator Placeholder */}
            <div className="w-16 h-1 bg-primary mt-4"></div>
            <p className="mt-6 text-gray-700">
              Our IEC compliant products are designed to deliver unparalleled efficiency and adaptability. Built to meet international standards, they ensure superior power distribution and long-term reliability for diverse applications.
            </p>
            {/* Read More Link Placeholder */}
            <div className="mt-6">
              <Link href="#" className="text-primary font-semibold flex items-center group">
                READ MORE
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
          {/* Right Column (Image Placeholder) */}
          <div className="flex justify-center items-center">
            {/* Replace with your image or visual element */}
            <div className="w-full max-w-sm h-64 bg-gray-300 flex items-center justify-center text-gray-600 rounded-lg">
              Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* BS Standard Compliance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-600">Quality and Reliability</p>
            <h2 className="text-3xl font-bold font-headline text-gray-900 mt-2">
              BS Standard
            </h2>
            {/* Visual Separator Placeholder */}
            <div className="w-16 h-1 bg-primary mt-4"></div>
            <p className="mt-6 text-gray-700">
              Adhering to British Standards, our products guarantee exceptional quality and reliability. These standards ensure that our electrical solutions meet rigorous safety and performance benchmarks, providing peace of mind for critical applications.
            </p>
            {/* Read More Link Placeholder */}
            <div className="mt-6">
              <Link href="#" className="text-primary font-semibold flex items-center group">
                READ MORE
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
          {/* Right Column (Image Placeholder) */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
              Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section (Cards) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Our Product Categories</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Explore our key product and accessory categories.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Transformer Accessories Card */}
            <Link href="#transformer-accessories" className="group block">
              <div className="h-full rounded-lg border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary">
                <h3 className="text-xl font-semibold text-primary">Transformer Accessories</h3>
                <p className="mt-4 text-muted-foreground text-sm">
                  From tanks and radiators to bushings and tap changers, we offer a comprehensive range of transformer accessories to enhance performance.
                </p>
              </div>
            </Link>

            {/* Oil-Immersed Transformers Card */}
            <Link href="#oil-immersed-transformers" className="group block">
              <div className="h-full rounded-lg border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary">
                <h3 className="text-xl font-semibold text-primary">Oil-Immersed Transformers</h3>
                <p className="mt-4 text-muted-foreground text-sm">
                  Engineered for durability and efficiency, our oil-immersed transformers are ideal for high-performance power transmission and distribution.
                </p>
              </div>
            </Link>


            {/* Cast Resin Transformers Card */}
            <Link href="#cast-resin-transformers" className="group block">
              <div className="h-full rounded-lg border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary">
                <h3 className="text-xl font-semibold text-primary">Cast Resin Transformers</h3>
                <p className="mt-4 text-muted-foreground text-sm">
                  Designed with cutting-edge technology, our resin transformers provide reliable and safe solutions for various industrial applications.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Transformer Accessories Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Transformer Accessories</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A comprehensive range of accessories to complement your transformers.
            </p>
          </div>
          <div className="mt-12">
            <div className="relative overflow-hidden rounded-lg">
              <div className="raining-electrical-elements pointer-events-none absolute inset-0 z-0">
                {/* Generate raining elements */}
                {Array.from({ length: 50 }).map((_, index) => (
                  <div
                    key={index}
                    className="electrical-element"
                  ></div>
                ))}
              </div>
              <TransformerAccessoriesTable />
            </div>
          </div>
        </div>
      </section>

      {/* Oil-Immersed Transformers Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary-foreground">Oil-Immersed Transformers</h2>
            <p className="mt-4 text-primary-foreground/80">
              Our oil-immersed transformers are designed for exceptional performance and reliability in a wide range of applications. Built with high-quality materials and advanced manufacturing techniques, they provide efficient power transmission and distribution. Ideal for both utility and industrial use, these transformers ensure stable and safe operation even in demanding environments.
            </p>
            <ul className="list-disc pl-0 mt-4 space-y-2">
              <li>Rigorous quality checks for durability and efficiency</li>
              <li>Customizable designs to meet specific requirements</li>
              <li>Compliance with international safety and performance standards</li>
              <li>Low maintenance and long service life</li>
              <li>Environmentally friendly options available</li>
            </ul>
          </div>
          <SkewedCubeStack />
        </div>
      </section>

      {/* Cast Resin Transformers Section */}
      <section className="py-16 md:py-24 bg-gray-200 text-gray-800">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <p className="text-sm uppercase tracking-wider text-primary">We are AKS International FZC</p>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mt-2">
              Cast Resin Transformers: Reliable, Efficient, and Safe
              <br />
              Power Solutions
            </h2>
            {/* Placeholder for Tabs */}
            <div className="mt-8 flex space-x-6">
              <div className="cursor-pointer border-b-2 border-primary pb-2 text-primary font-semibold">Overview</div>
              <div className="cursor-pointer text-gray-600 hover:text-primary pb-2">Key Benefits</div>
              <div className="cursor-pointer text-gray-600 hover:text-primary pb-2">Applications</div>
            </div>
            {/* Placeholder for Tab Content */}
            <div className="mt-6 text-gray-700">
              <p>
                AKS International FZC provides high-quality Cast Resin Transformers, ensuring superior performance, safety, and reliability. We collaborate with top manufacturers to offer transformers enclosed in robust resin casings, providing excellent insulation and protection against environmental elements. Their compact design makes them ideal for both indoor and outdoor installations, even in challenging conditions.
              </p>
            </div>
          </div>
          {/* Right column */}
          <div className="relative w-full h-full min-h-[300px]">
            <Image
                src="https://placehold.co/600x450.png"
                alt="Cast Resin Transformer"
                data-ai-hint="resin transformer"
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const TransformerAccessoriesTable = () => {
  const [showAll, setShowAll] = useState(false);
  const [elementStyles, setElementStyles] = useState<any[]>([]);

  useEffect(() => {
    const styles = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setElementStyles(styles);
  }, []);

  const visibleAccessories = showAll ? transformerAccessories : transformerAccessories.slice(0, 9);

  return (
    <div className="overflow-x-auto">
      <div className="raining-electrical-elements pointer-events-none absolute inset-0 z-0">
        {elementStyles.map((style, index) => (
          <div key={index} className="electrical-element" style={style}></div>
        ))}
      </div>
      <Table className="border-collapse border border-gray-300">
        <TableHeader>
          <TableRow>
            <TableHead className="border border-gray-300 px-4 py-2">Name</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2">Type</TableHead>
            <TableHead className="border border-gray-300 px-4 py-2">Quality/Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleAccessories.map((accessory) => (
            <TableRow key={accessory.id}>
              <TableCell className="border border-gray-300 px-4 py-2 bg-gray-100 font-medium">lorem ipsum</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2 bg-gray-100">lorem ipsum</TableCell>
              <TableCell className="border border-gray-300 px-4 py-2 bg-gray-100">lorem ipsum</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!showAll && (
        <div className="text-center mt-6"><Button onClick={() => setShowAll(true)}>Read More</Button></div>
      )}
    </div>
  );
};
