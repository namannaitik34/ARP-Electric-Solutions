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
} from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

const featuredServices = [
  {
    title: "Power Transformers",
    description: "Robust and efficient transformers for power distribution networks.",
    icon: CircuitBoard,
    href: "/services#transformers"
  },
  {
    title: "UPS Systems",
    description: "Ensure uninterrupted power for your critical operations with our UPS solutions.",
    icon: Bolt,
    href: "/services#ups-systems"
  },
  {
    title: "Specialty Cores",
    description: "Advanced amorphous and nanocrystalline cores for high-tech applications.",
    icon: Wind,
    href: "/services#amorphous-core"
  },
  {
    title: "Conductive Materials",
    description: "High-grade copper foils and busbars for superior electrical conductivity.",
    icon: Zap,
    href: "/services#copper-foil"
  }
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
              autoPlay={true} // Enable automatic scrolling
              opts={{
                interval: 5000, // Set interval to 5000ms (5 seconds)
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
            <TransformerAccessoriesTable />
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Our Core Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a wide range of products designed to meet the diverse needs of modern industries.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <Link key={service.title} href={service.href} className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <Card className="h-full bg-card group-hover:bg-accent group-hover:shadow-xl transition-all duration-300 ease-in-out group-hover:-translate-y-2">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-full transition-colors duration-300 group-hover:bg-primary">
                      <service.icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
                      Learn more
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const TransformerAccessoriesTable = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleAccessories = showAll ? transformerAccessories : transformerAccessories.slice(0, 9);

  return (
    <div className="overflow-x-auto">
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
