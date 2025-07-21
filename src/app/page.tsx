
'use client';

import React from 'react';

// Product Carousel Data
const productCarousel = [
  { title: "Oil Immersed Transformers", image: "/images/Oil_emmeresed_transformer.png", description: "Durable and efficient transformers for power transmission and distribution." },
  { title: "Cast Resin Transformers", image: "/images/cast-resin-transformer.png", description: "Reliable cast resin transformers for safe and efficient operation." },
  { title: "Copper Foil", image: "/images/Copper_foil.png", description: "High-grade copper foil for superior conductivity." },
  { title: "Super Enameled Copper", image: "/images/Super%20Enameled%20Copper.png", description: "Insulated copper wire for electrical applications." },
  { title: "Copper CTC", image: "/images/Copper_CTC.jpg", description: "CTC copper wire for transformer windings." },
  { title: "Copper PICC", image: "/images/Copper_PICC.png", description: "PICC copper wire for advanced transformer designs." },
  { title: "Aluminium Foil", image: "/images/Aluminium_foil.png", description: "High-quality aluminium foil for conductivity." },
  { title: "Super Enameled Aluminium", image: "/images/Super_Enameled_Aluminium.png", description: "Insulated aluminium wire for electrical applications." },
  { title: "Aluminium CTC", image: "/images/Aluminium_CTC.png", description: "CTC aluminium wire for transformer windings." },
  { title: "Aluminium PIAC", image: "/images/Aluminium_PIAC.jpg", description: "PIAC aluminium wire for advanced transformer designs." },
  { title: "CRGO (Cold Rolled Grain Oriented Steel)", image: "/images/CRGO.png", description: "Premium CRGO steel for transformer cores." },
  { title: "Transformer Accessories", image: "/images/Transformer%20Accessories.png", description: "Comprehensive range of transformer accessories." },
  { title: "Data Center", image: "/images/Data_center.png", description: "Solutions for modern data centers." },
  { title: "MV/LV APFC, Harmonic Filter & UPS", image: "/images/MVLV_APFC, Harmonic_Filter_&_UPS.png", description: "Power factor correction, harmonic filtering, and UPS systems." },
  { title: "Ring Main Unit (RMU)", image: "/images/Ring_man_unit.png", description: "Compact RMU for distribution networks." },
  { title: "Cables", image: "/images/Cable.png", description: "High-quality cables for various applications." },
  { title: "Beverage Solutions", image: "/images/Beverage_solution.png", description: "Innovative solutions for the beverage industry." },
  { title: "IT Solutions", image: "/images/IT_Solution.png", description: "Comprehensive IT solutions for businesses." },
  { title: "Surveillance Systems", image: "/images/Surveillance.png", description: "Advanced surveillance systems for security." },
];

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, CircuitBoard, Bolt, Zap, Wind, Network, Cpu, Shield, Tool, Cog, Wrench, Thermometer, RadioTower, Power, Users, Layers, Rss } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from 'recharts';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InteractiveCard from "@/components/InteractiveCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SkewedCubeStack from '@/components/SkewedCubeStack';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const ProductCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const visibleCount = 4;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth transition logic with pause on hover
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setStartIndex((prev) => (prev + 1) % productCarousel.length);
          setIsAnimating(false);
        }, 500); // transition duration
      }, 1500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev - 1 + productCarousel.length) % productCarousel.length);
      setIsAnimating(false);
    }, 500);
  };
  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % productCarousel.length);
      setIsAnimating(false);
    }, 500);
  };

  // Get visible cards (looping)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (startIndex + i) % productCarousel.length;
      cards.push(productCarousel[idx]);
    }
    return cards;
  };

  // For smooth sliding effect
  const slideWidth = 354; // 360px card + 24px margin
  const containerStyle = {
    width: `${slideWidth * visibleCount}px`,
    display: 'flex',
    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
    transform: `translateX(-${startIndex * slideWidth}px)`,
    willChange: 'transform',
  };

  // Pause/resume autoplay on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative w-full flex items-center justify-center"
      style={{ overflow: 'hidden' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 shadow hover:scale-110 transition"
        onClick={handlePrev}
        aria-label="Previous"
        disabled={isAnimating}
      >
        <ChevronLeft size={24} />
      </button>
      <div style={{ overflow: 'hidden', width: `${slideWidth * visibleCount}px`, margin: '0 auto' }}>
        <div style={containerStyle}>
          {productCarousel.map((product, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 22px' }}>
              <div
                className="relative group transition-transform duration-300 hover:scale-105"
                style={{ width: 360, height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div className="overflow-hidden rounded-xl shadow-lg bg-white flex flex-col items-center" style={{ width: 360, height: 260, position: 'relative' }}>
                  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={360}
                      height={260}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-xl"
                      style={{ aspectRatio: '1 / 1', width: '100%', height: '120%' }}
                    />
                    <div className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <span className="p-4 text-center text-sm md:text-base">{product.description}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full text-center mt-2">
                <h3 className="font-bold text-base md:text-lg text-primary mb-1">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 shadow hover:scale-110 transition"
        onClick={handleNext}
        aria-label="Next"
        disabled={isAnimating}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};


const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((observerEntries) => {
      setEntries(observerEntries);
    }, options);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [options]);

  const observe = (element: Element) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  };

  const unobserve = (element: Element) => {
    if (observer.current) {
      observer.current.unobserve(element);
    }
  };

  return { observe, unobserve, entries };
};


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const featuredServices = [
  {
    title: "Power Transformers",
    description: "Robust and efficient transformers for power distribution networks.",
    icon: CircuitBoard,
    href: "/services#transformers",
  },
  {
    title: "UPS Systems",
    description: "Uninterrupted power for your critical operations.",
    icon: Bolt,
    href: "/services#ups-systems",
  },
  {
    title: "Specialty Cores",
    description: "Advanced amorphous and nanocrystalline cores.",
    icon: Wind,
    href: "/services#amorphous-core",
  },
  {
    title: "Conductive Materials",
    description: "High-grade copper foils and busbars for conductivity.",
    icon: Zap,
    href: "/services#copper-foil"
  },
];

const productCategories = [
  { name: "Power Distribution", value: 400, description: "Reliable power transmission and distribution solutions." },
  { name: "Industrial Automation", value: 300, description: "Advanced automation for industrial efficiency." },
  { name: "Renewable Energy", value: 300, description: "Sustainable energy solutions for a greener future." },
  { name: "Safety & Protection", value: 200, description: "Ensuring operational safety with protective systems." },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];


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

const detailedTransformerAccessories = [
  { name: 'Pressure Relief Valve (PRV)', type: 'Safety', description: 'Critical safety valve designed to release excess pressure and protect the transformer.' },
  { name: 'Buchholz Relay', type: 'Safety', description: 'Protective relay that detects gas accumulation or oil flow issues in transformers.' },
  { name: 'Oil Level Indicator (MOG)', type: 'Monitoring', description: 'Reliable indicator to monitor the oil levels and ensure transformer operation.' },
  { name: 'Silica Gel Breather', type: 'Desiccant', description: 'Absorbs moisture from the air, protecting transformer oil and maintaining insulation integrity.' },
  { name: 'Aircell (Flexi Separator)', type: 'Separation', description: 'Flexible separator used to maintain air pressure and prevent transformer oil contamination.' },
  { name: 'Rapid Pressure Rise Relay', type: 'Safety', description: 'Prevents transformer damage by detecting rapid pressure changes and triggering protection mechanisms.' },
  { name: 'Transformer Valve', type: 'Safety', description: 'Valve designed to regulate and manage transformer oil pressure to ensure safe operation.' },
  { name: 'Transformer Oil', type: 'Insulation', description: 'High-quality transformer oil used for insulation and cooling of electrical components.' },
  { name: 'RTCC Panel & Equipment', type: 'Control', description: 'Remote Tap Changer Control panel for effective voltage regulation and control of transformer operations.' },
  { name: 'Wheels (Roller)', type: 'Transportation', description: 'Durable rollers designed to facilitate easy transportation and installation of transformers.' },
  { name: 'Bushing & Accessories', type: 'Insulation', description: 'Essential bushing components and accessories for safe and efficient electrical connections in transformers.' },
  { name: 'Flow Indicators', type: 'Monitoring', description: 'Devices used to monitor the flow of transformer oil for better operational control.' },
  { name: 'O-Ring & Gasket', type: 'Sealing', description: 'High-quality sealing components that prevent oil leaks and maintain transformer integrity.' },
  { name: 'Current Transformer', type: 'Measurement', description: 'Measurement device used to monitor and control current flow within transformer circuits.' }
];

const heroSlides = [
  {
    src: "https://placehold.co/1920x1080.png",
    hint: "electrical components",
    alt: "Electrical components background"
  },
  {
    src: "https://placehold.co/1920x1080.png",
    hint: "power lines sunset",
    alt: "High-voltage power lines at sunset"
  },
  {
    src: "https://placehold.co/1920x1080.png",
    hint: "modern factory",
    alt: "Interior of a modern manufacturing facility"
  },
  {
    src: "https://placehold.co/1920x1080.png",
    hint: "transformer station",
    alt: "A large electrical transformer station"
  },
  {
    src: "https://placehold.co/1920x1080.png",
    hint: "circuit board closeup",
    alt: "Closeup of a complex circuit board"
  },
]

const technicalData = [
  { parameter: "Transformer Type", description: "Three Phase, Oil Immersed Distribution Transformers (Indoor or Outdoor Installation)", icon: Layers },
  { parameter: "Type of Breathing", description: "Hermetically Sealed / Radiator", icon: Wind },
  { parameter: "Standard", description: "IEC60076", icon: Shield },
  { parameter: "Rated Frequency", description: "50Hz or 60Hz", icon: Rss },
  { parameter: "Connection and Vector Group", description: "Dyn11", icon: Network },
  { parameter: "Ambient Temperature", description: "Ambient=50, Oil=50, Winding=55", icon: Thermometer },
  { parameter: "Winding", description: "CU or AL", icon: CircuitBoard },
  { parameter: "Type of Cooling", description: "ONAN", icon: Power },
  { parameter: "HV Tapping", description: "Off-circuit tap changer, 5 positions ± 2×2.5%", icon: RadioTower },
];

const FadeInSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className, 'fade-in-section', { 'is-visible': isVisible })}
    >
      {children}
    </div>
  );
};


export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Value ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
    alert("Quote request submitted!");
    form.reset();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-secondary text-secondary-foreground">
        <Carousel
          plugins={[plugin.current]}
          className="absolute inset-0 w-full h-full"
          opts={{ loop: true }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-full h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  data-ai-hint={slide.hint}
                  fill
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/70 to-transparent"></div>
        <div className="container relative text-center animate-fadeIn">
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
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <FadeInSection className="py-16 md:py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">About ARP Electric Solution</h2>
            <p className="mt-4 text-muted-foreground">
              With over 20 years of experience, ARP Electric Solution is a trusted product solution provider in the fields of power transmission, distribution, and transformer technologies. Our expertise spans across raw materials, transformer accessories, CRGO, copper foil, CTC, PICC, super enameled wire, MV/LV APFC systems, harmonic filters, UPS and data centers, ring main units (RMU), and MV/LV switchgear.
              <br /> We strictly adhere to ANSI, IEC, and BS standards, delivering cost-effective, reliable, and innovative solutions tailored to meet the evolving demands of clients worldwide.
              <br />At ARP Electric Solution, we are committed to providing superior service in a dynamic, market-driven environment. Our divisions are dedicated to delivering tailored, comprehensive, and technology-driven solutions in the electrical sector. We take pride in our forward-thinking approach and continuously strive to stay ahead through technological innovations and process expertise, offering one-stop solutions that ensure quality, efficiency, and customer satisfaction.

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
      </FadeInSection>

      {/* Featured Services Section */}
      <FadeInSection className="bg-primary/5 py-16 md:py-24 overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="md:pr-8 lg:pr-16 z-10">
              <h2 className="font-headline text-3xl font-bold text-primary">
                Our Core Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                We offer a wide range of products designed to meet the diverse needs of modern industries, from robust power transformers to high-grade conductive materials.
              </p>
            </div>
            {/* Right Column: Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredServices.map((service) => (
                <Link key={service.title} href={service.href} className="group block">
                  <Card className="h-full bg-background p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-md bg-primary/10 text-primary">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-accent-foreground">{service.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>


      {/* Product Showcase Intro Section */}
      <section className="py-20 md:py-28 bg-teal-950 text-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center relative">
          {/* Design Element */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-px bg-white h-24 opacity-50 hidden md:block"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-24 bg-primary hidden md:block"></div>

          <div>
            <p className="text-sm uppercase tracking-wider text-primary">We are ARP Electric Solution</p>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mt-2">
              Our Products
              <br />
              For the Power
              <br />
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
        {/* Product Carousel Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mt-12 relative">
              <ProductCarousel />
            </div>
          </div>
        </section>

      </section>



      {/* Solutions by Category Section */}
      <FadeInSection className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">
              Solutions by Category
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We provide tailored solutions across various industrial sectors to meet your specific needs.
            </p>
          </div>
          <div className="mt-12">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          activeIndex={activeIndex}
                          activeShape={renderActiveShape}
                          data={productCategories}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={100}
                          fill="hsl(var(--primary))"
                          dataKey="value"
                          onMouseEnter={onPieEnter}
                          padAngle={5}
                        >
                          {productCategories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'hsl(var(--background))',
                            borderColor: 'hsl(var(--border))'
                          }}
                          formatter={(value, name) => [value, productCategories.find(p => p.name === name)?.name]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <p className="text-lg font-semibold text-center md:text-left text-accent-foreground">Our Expertise Breakdown</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {productCategories.map((category, index) => (
                        <div key={category.name} className="flex items-start gap-3">
                          <div
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            className="w-3 h-3 rounded-full shrink-0 mt-1.5"
                          ></div>
                          <div>
                            <p className="font-medium">{category.name}</p>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeInSection>


      {/* Product Categories Section (Cards) */}
      <FadeInSection className="py-16 md:py-24 bg-white">
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
      </FadeInSection>
      {/*Transformer Accessories Grid Section */}
      <FadeInSection className="py-16 md:py-24 bg-white">
        <div className="container">

          <div className="text-start">
            <h2 className="text-3xl font-bold font-headline text-primary text-decoration-line: underline">Transformer Accessories</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedTransformerAccessories.map((accessory, index) => (
              <Card key={index} className="flex flex-col transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{accessory.name}</span>
                    <Badge variant="secondary">{accessory.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{accessory.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </FadeInSection>
      {/* Technical Data Section */}
      <FadeInSection className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">Transformer Technical Data</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Key specifications for our High Efficiency Three Phase, Oil Immersed Distribution Transformers.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/800x600.png"
                alt="Transformer technical illustration"
                data-ai-hint="transformer schematic"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <ul className="space-y-6">
                {technicalData.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-accent-foreground">{item.parameter}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 max-w-4xl mx-auto text-center text-sm text-muted-foreground">
            <p><strong>Note:</strong> These all data are subject to change according to customer requirements.</p>
            <p className="mt-4">
              High Efficiency Transformers offer the best ratio between initial cost and operating cost for sensitive applications. Lowering the energy consumption results in reduced operating costs and less harmful emissions for the customer's operations.
            </p>
          </div>
        </div>
      </FadeInSection>




      {/* Oil-Immersed Transformers Section */}
      <FadeInSection className="py-16 md:py-24 bg-primary text-primary-foreground" id="oil-immersed-transformers-section">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary-foreground">Oil-Immersed Transformers</h2>
            <p className="mt-4 text-primary-foreground/80">
              Our oil-immersed transformers are designed for exceptional performance and reliability in a wide range of applications. Built with high-quality materials and advanced manufacturing techniques, they provide efficient power transmission and distribution. Ideal for both utility and industrial use, these transformers ensure stable and safe operation even in demanding environments.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-primary-foreground/50">
              <li>Rigorous quality checks for durability and efficiency</li>
              <li>Customizable designs to meet specific requirements</li>
              <li>Compliance with international safety and performance standards</li>
              <li>Low maintenance and long service life</li>
              <li>Environmentally friendly options available</li>
            </ul>
          </div>
          <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Oil-Immersed Transformer"
              data-ai-hint="oil transformer"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </FadeInSection>

      {/* Cast Resin Transformers Section */}
      <FadeInSection className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900" id="cast-resin-transformers">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-primary">WE ARE ARP Electric Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mt-2 text-foreground">
              Cast Resin Transformers: Reliable, Efficient, and Safe Power Solutions
            </h2>
            <Tabs defaultValue="overview" className="mt-8">
              <TabsList className="bg-transparent p-0">
                <TabsTrigger value="overview" className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 rounded-none text-muted-foreground">Overview</TabsTrigger>
                <TabsTrigger value="benefits" className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 rounded-none text-muted-foreground">Key Benefits</TabsTrigger>
                <TabsTrigger value="applications" className="data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent pb-2 rounded-none text-muted-foreground">Applications</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6 text-muted-foreground">
                <p>
                  AKS International FZC provides high-quality Cast Resin Transformers, ensuring superior performance, safety, and reliability. We collaborate with top manufacturers to offer transformers enclosed in robust resin casings, providing excellent insulation and protection against environmental elements. Their compact design makes them ideal for both indoor and outdoor installations, even in challenging conditions.
                </p>
              </TabsContent>
              <TabsContent value="benefits" className="mt-6 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Enhanced Safety:</strong> Self-extinguishing and fire-resistant properties minimize fire hazards.</li>
                  <li><strong>Eco-Friendly:</strong> No risk of oil leakage, making them ideal for environmentally sensitive areas.</li>
                  <li><strong>Low Maintenance:</strong> Requires minimal upkeep compared to oil-filled transformers.</li>
                  <li><strong>High Reliability:</strong> Excellent resistance to short circuits and impulse voltages.</li>
                  <li><strong>Compact Design:</strong> Smaller footprint allows for flexible installation in confined spaces.</li>
                </ul>
              </TabsContent>
              <TabsContent value="applications" className="mt-6 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Public Infrastructure:</strong> Airports, hospitals, subways, and high-rise buildings.</li>
                  <li><strong>Industrial Sector:</strong> Chemical plants, steel mills, and manufacturing facilities.</li>
                  <li><strong>Critical Power:</strong> Data centers, telecommunication hubs, and research labs.</li>
                  <li><strong>Renewable Energy:</strong> Wind farms, solar power plants, and biomass facilities.</li>
                  <li><strong>Specialized Environments:</strong> Marine vessels, offshore platforms, and underground mines.</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
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
      </FadeInSection>
      {/* Parallax Section */}
      <section
        className="relative py-20 md:py-32 text-white bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/arp-electric-solution.firebasestorage.app/o/Untitled%20design%20(1).png?alt=media&token=75d7abd2-a22c-4b27-be3e-2abd7cc48132') " }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container relative text-center z-10">
          <h2 className="text-4xl font-bold font-headline">Excellence in Engineering</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            Our commitment to international standards like IEC ensures every product meets global benchmarks for safety, reliability, and performance.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-primary font-bold hover:bg-teal-950 hover:text-white">
            <Link href="/about">Discover Our Quality Promise</Link>
          </Button>
        </div>
        {/* ANSI Standard Compliance Section */}
        <FadeInSection className="py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-300 ">Global Standards Compliance</p>
              <h2 className="text-3xl font-bold font-headline text-gray-100 mt-2">
                ANSI Standard
              </h2>
              {/* Visual Separator Placeholder */}
              <div className="w-16 h-1 bg-primary mt-4"></div>
              <p className="mt-6 text-gray-200">
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
              <Image
                src="https://placehold.co/400x256.png"
                alt="ANSI Standard Compliance"
                data-ai-hint="compliance certificate"
                width={400}
                height={256}
                className="w-full max-w-sm h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </FadeInSection>
        {/* IEC Standard Compliance Section */}
        <FadeInSection className="py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="flex justify-center items-center">
              <Image
                src="https://placehold.co/400x256.png"
                alt="IEC Standard Compliance"
                data-ai-hint="engineering blueprint"
                width={400}
                height={256}
                className="w-full max-w-sm h-auto object-cover rounded-lg"
              />
            </div>

            {/* Right Column (Image Placeholder) */}
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-300">Precision Engineering</p>
              <h2 className="text-3xl font-bold font-headline text-gray-100 mt-2">
                IEC Standard
              </h2>
              {/* Visual Separator Placeholder */}
              <div className="w-16 h-1 bg-primary mt-4"></div>
              <p className="mt-6 text-gray-200">
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

          </div>
        </FadeInSection>

        {/* BS Standard Compliance Section */}
        <FadeInSection className="py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-300">Quality and Reliability</p>
              <h2 className="text-3xl font-bold font-headline text-gray-200 mt-2">
                BS Standard
              </h2>
              {/* Visual Separator Placeholder */}
              <div className="w-16 h-1 bg-primary mt-4"></div>
              <p className="mt-6 text-gray-100">
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
              <Image
                src="https://placehold.co/400x256.png"
                alt="BS Standard Compliance"
                data-ai-hint="quality control"
                width={400}
                height={256}
                className="w-full max-w-sm h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </FadeInSection>


      </section>

      {/* Request a Quote Section */}
      <section className="relative py-16 md:py-24" id="request-quote">
        <Image
            src="https://placehold.co/1920x800.png"
            data-ai-hint="factory worker"
            alt="Request a quote background"
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/70 to-transparent"></div>
        <div className="container relative z-10" id="request-quote-form-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="md:max-w-md">
                     <h2 className="text-3xl font-bold font-headline text-primary-foreground">Request a Free Quote</h2>
                    <p className="mt-4 text-primary-foreground/80">
                        Get in touch with us to discuss your project requirements and receive a personalized quote.
                    </p>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-lg">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="fullName">Full Name</FormLabel>
                                        <FormControl>
                                            <Input id="fullName" placeholder="Your Full Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="email">Email Address</FormLabel>
                                        <FormControl>
                                            <Input id="email" type="email" placeholder="Your Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="phone">Phone Number (Optional)</FormLabel>
                                        <FormControl>
                                            <Input id="phone" type="tel" placeholder="Your Phone Number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="message">Message</FormLabel>
                                        <FormControl>
                                            <Textarea id="message" rows={4} placeholder="Tell us about your project and requirements..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg transition-colors duration-300 ease-in-out transform hover:scale-105">Submit Request</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="relative py-20">
        <Image
          src="https://placehold.co/1920x480.png"
          data-ai-hint="electrical circuit board"
          alt="Subscription background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/70 to-transparent"></div>
        <div className="container relative z-0 flex flex-col items-start justify-center text-left md:w-1/2">
          <h2 className="text-4xl font-bold font-headline text-primary-foreground">Subscribe for weekly updates</h2>
          <p className="mt-4 max-w-lg text-lg text-primary-foreground/80">
            Stay informed with the latest industry news, product updates, and exclusive offers from ARP Electric Solution.
          </p>
          <form className="mt-8 flex w-full max-w-md">
            <Input
              type="email"
              id="subscribe-email"
              className="flex-grow bg-white/90 border-primary text-primary placeholder:text-primary rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Enter your email address"
            />
            <Button
              type="submit"
              className="bg-primary text-white font-bold hover:bg-primary/90 rounded-l-none"
            >
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-sm text-primary-foreground/70">
            We respect your privacy. No spam.
          </p>
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleAccessories.map((accessory) => (
            <TableRow key={accessory.id}>
              <TableCell className="font-medium">{accessory.id}</TableCell>
              <TableCell>{accessory.name}</TableCell>
              <TableCell>{accessory.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!showAll && transformerAccessories.length > 9 && (
        <div className="text-center mt-6">
          <Button onClick={() => setShowAll(true)}>Read More</Button>
        </div>
      )}
    </div>
  );
};








    