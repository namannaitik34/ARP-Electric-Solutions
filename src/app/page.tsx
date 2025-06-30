import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircuitBoard, Bolt, Zap, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              For over a decade, ARP Electric Solution has been a leader in providing high-quality electrical components. Our commitment to excellence, innovation, and customer satisfaction drives us to deliver products that meet the highest industry standards. We specialize in creating solutions that are not only reliable but also energy-efficient, helping our clients reduce their operational costs and environmental footprint.
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
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Our Core Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a wide range of products designed to meet the diverse needs of modern industries.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.title} className="bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>{service.description}</p>
                   <Button asChild variant="link" className="mt-4 text-primary">
                    <Link href={service.href}>Learn more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
