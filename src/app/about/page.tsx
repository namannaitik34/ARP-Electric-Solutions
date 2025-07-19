
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Handshake,
  Lightbulb,
  ShieldCheck,
  Star,
  ArrowRight,
  CircuitBoard,
  Globe,
  Wrench,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional portrait',
  },
  {
    name: 'Jane Smith',
    role: 'Chief Technology Officer',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional portrait woman',
  },
  {
    name: 'Peter Jones',
    role: 'Head of Operations',
    image: 'https://placehold.co/400x400.png',
    hint: 'male portrait',
  },
];

const coreValues = [
  {
    title: 'Trust',
    description:
      'We build relationships based on reliability and transparency, ensuring our clients and partners can always depend on us.',
    icon: Handshake,
  },
  {
    title: 'Innovation',
    description:
      'We continuously seek new and better ways to solve challenges, pushing the boundaries of technology to deliver cutting-edge solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Integrity',
    description:
      'We operate with unwavering honesty and ethical standards, holding ourselves accountable in every action we take.',
    icon: ShieldCheck,
  },
  {
    title: 'Excellence',
    description:
      'We are committed to the highest standards of quality and performance, striving for exceptional results in everything we do.',
    icon: Star,
  },
];

const expertiseAreas = [
  {
    title: 'Reliable Transformer Solutions',
    description:
      'Supplying high-quality Oil-Immersed and Cast Resin Transformers that comply with international standards, ensuring efficient power transmission for industrial and commercial applications.',
    icon: CircuitBoard,
    bgColor: 'bg-sky-700',
    href: '/services#transformers',
  },
  {
    title: 'Copper & Aluminium Conductors',
    description:
      'Providing a wide range of conductors, including Copper Foil, Super Enameled Copper, Aluminium Foil, and Paper Insulated Conductors, designed for superior performance in power distributions.',
    icon: Globe,
    bgColor: 'bg-purple-700',
    href: '/products#copper',
  },
  {
    title: 'Transformer Accessories & CRGO',
    description:
      'Offering essential transformer accessories such as tanks, radiators, tap changers, and bushings, along with premium CRGO materials (M4, M5, MOH, ZDKH) for enhanced efficiency and performance.',
    icon: Wrench,
    bgColor: 'bg-teal-600',
    href: '/products#transformer-accessories',
  },
];

const faqItems = [
  {
    question: 'What types of transformers do you manufacture?',
    answer:
      'We manufacture Oil-Immersed Transformers and Cast Resin Transformers. Both are designed to meet international standards (IEC & IS) and are customized to suit specific industrial and commercial applications.',
  },
  {
    question: 'What makes your transformers energy-efficient?',
    answer:
      'We use high-quality materials like Cold Rolled Grain Oriented (CRGO) steel, as well as Amorphous and Nanocrystalline cores. These materials significantly reduce energy losses, leading to lower operating costs and a smaller environmental footprint.',
  },
  {
    question: 'Do you provide custom solutions?',
    answer:
      'Yes, we specialize in providing custom-engineered solutions. Our team works closely with clients to understand their specific requirements and design products that meet their unique needs for voltage, power, and physical dimensions.',
  },
  {
    question: 'What quality standards do your products adhere to?',
    answer:
      'All our products are manufactured in compliance with major international standards, including ANSI, IEC, and BS. We have a rigorous quality control process to ensure every product meets the highest benchmarks for safety, reliability, and performance.',
  },
  {
    question: 'What other services do you offer besides manufacturing?',
    answer:
      'Beyond manufacturing, we provide a comprehensive range of services including the supply of transformer accessories, high-grade copper and aluminum conductors, and advanced power quality solutions like MV/LV APFC systems, harmonic filters, and UPS systems.',
  },
  {
    question: 'How can I get a quote for my project?',
    answer:
      'You can easily request a quote by visiting our Contact Us page and filling out the inquiry form. Our team will review your requirements and get back to you with a personalized quote as soon as possible.',
  },
];

const workspaceImages = [
  { src: 'https://placehold.co/600x400.png', hint: 'office interior', className: 'h-64 md:h-80' },
  { src: 'https://placehold.co/400x500.png', hint: 'team meeting', className: 'h-80 md:h-96' },
  { src: 'https://placehold.co/800x500.png', hint: 'collaborative workspace', className: 'h-64 md:h-80' },
  { src: 'https://placehold.co/400x400.png', hint: 'modern office desk', className: 'h-72 md:h-80' },
  { src: 'https://placehold.co/500x700.png', hint: 'office lounge', className: 'h-80 md:h-96' },
  { src: 'https://placehold.co/600x450.png', hint: 'creative workspace', className: 'h-64 md:h-80' },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-foreground animate-fadeIn">
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            About ARP Electric Solution
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We are pioneers in the electrical solutions industry, dedicated to
            powering progress with cutting-edge technology and unwavering
            commitment to quality.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Modern office space"
              data-ai-hint="modern office"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline text-secondary-foreground">
              Our Story
            </h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2010, ARP Electric Solution started with a vision to
              revolutionize the electrical component manufacturing sector. From a
              small workshop to a state-of-the-art facility, our journey has been
              fueled by a passion for innovation and a relentless pursuit of
              excellence. We believe in building lasting relationships with our
              clients by providing them with products that are not only superior
              in quality but also contribute to a sustainable future.
            </p>
          </div>
        </div>

        {/* Our Workspace Gallery */}
        <div className="mt-24">
           <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">
               Our Workspace
             </h2>
             <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
               A glimpse into our innovative and collaborative environment where ideas come to life.
             </p>
           </div>
           <div className="mt-12">
             <Carousel
               opts={{
                 align: "start",
                 loop: true,
               }}
               className="w-full"
             >
               <CarouselContent className="-ml-4">
                 {workspaceImages.map((image, index) => (
                   <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                     <div className={`relative overflow-hidden rounded-2xl ${image.className}`}>
                       <Image
                         src={image.src}
                         alt={`Workspace image ${index + 1}`}
                         data-ai-hint={image.hint}
                         fill
                         className="object-cover"
                       />
                     </div>
                   </CarouselItem>
                 ))}
               </CarouselContent>
               <div className="mt-8 flex justify-between items-center">
                  <div className='flex gap-2'>
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                  </div>
                  <Link href="#" className="font-semibold text-primary hover:underline flex items-center gap-2">
                    VIEW MORE PHOTOS <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
             </Carousel>
           </div>
         </div>


        {/* Mission Section */}
        <div className="mt-24">
          <Card className="overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[400px] overflow-hidden">
                <Image
                  src="https://placehold.co/800x600.png"
                  alt="Our Mission"
                  data-ai-hint="teamwork success"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
                <p className="mt-4 text-muted-foreground">
                  To provide high-quality, innovative, and sustainable electrical
                  solutions that empower industries and improve lives, while
                  maintaining the highest standards of integrity and customer
                  service.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Vision Section */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-3xl font-bold text-primary">Our Vision</h3>
                <p className="mt-4 text-muted-foreground">
                  To be a global leader in the electrical components industry,
                  recognized for our technological advancements, commitment to
                  quality, and dedication to a greener planet.
                </p>
              </div>
              <div className="relative min-h-[400px] overflow-hidden order-1 md:order-2">
                <Image
                  src="https://placehold.co/800x600.png"
                  alt="Our Vision"
                  data-ai-hint="global network"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Core Values Section */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">
              OUR CORE VALUES
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our core values are the foundation of everything we do at ARP. These
              timeless principles define our conduct, guide our decisions, and
              inspire our teams as we grow across global markets.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <Card
                key={value.title}
                className="group text-center p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:bg-primary/5"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary">
                  {value.title}
                </h4>
                <p className="mt-2 text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className={`group relative p-8 text-white overflow-hidden ${area.bgColor}`}
              >
                <div className="relative z-10 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-white/20 p-4">
                      <area.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <div className="relative h-32 flex items-center justify-center">
                    <p className="absolute opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-4">
                      {area.description}
                    </p>
                    <a
                      href={area.href}
                      className="inline-flex items-center font-semibold opacity-0 transition-all duration-300 ease-in-out transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      READ MORE <ChevronRight className="ml-1 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Have questions? We have answers. If you can't find what you're
              looking for, feel free to contact us directly.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold font-headline text-center text-primary">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            The driving force behind our success is our team of dedicated and
            experienced professionals.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative text-center">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg transition-transform duration-300 transform group-hover:scale-110">
                  <Image
                    src={member.image}
                    data-ai-hint={member.hint}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold">{member.name}</h4>
                  <p className="text-primary">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
