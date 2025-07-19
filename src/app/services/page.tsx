
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CircuitBoard,
  Zap,
  ShieldCheck,
  Cpu,
  Component,
  Wrench,
  ChevronRight,
  Globe,
} from 'lucide-react';

const services = [
  {
    id: 'transformers',
    title: 'Transformer Manufacturing',
    subtitle: 'Engineered for Performance and Reliability',
    description:
      'We specialize in manufacturing high-quality Oil-Immersed and Cast Resin Transformers that adhere to international standards (IEC & IS). Our transformers are designed for optimal efficiency, using premium materials like CRGO steel and amorphous cores to minimize energy loss and deliver reliable power for industrial and commercial applications.',
    image: 'https://placehold.co/800x600.png',
    hint: 'power transformer station',
    points: [
      'Custom designs for specific voltage and power needs.',
      'High-efficiency cores to reduce operational costs.',
      'Robust construction for long-term durability.',
      'Compliance with global safety and performance standards.',
    ],
  },
  {
    id: 'power-quality',
    title: 'Power Quality Solutions',
    subtitle: 'Ensuring Stable and Clean Power',
    description:
      'We provide advanced solutions to improve power quality, including MV/LV APFC systems, harmonic filters, and uninterruptible power supplies (UPS). Our systems are designed to protect sensitive equipment, reduce energy consumption, and ensure a stable power supply for critical operations in data centers, industrial plants, and commercial facilities.',
    image: 'https://placehold.co/800x600.png',
    hint: 'electrical panel',
    points: [
      'Active and passive harmonic filters.',
      'Automatic Power Factor Correction (APFC) panels.',
      'Industrial-grade UPS systems for critical loads.',
      'Comprehensive power quality audits and analysis.',
    ],
  },
];

const expertiseAreas = [
    {
      title: 'Conductors & Core Materials',
      description:
        'Our portfolio includes a wide range of high-conductivity conductors and specialized core materials. We supply Copper Foil, Super Enameled Copper Wire, Aluminium Foil, and Paper Insulated Conductors. Additionally, we provide top-grade CRGO materials (M4, M5, MOH, ZDKH) and advanced amorphous/nanocrystalline cores for high-performance applications.',
      icon: Globe,
      bgColor: 'bg-purple-700',
    },
    {
      title: 'Transformer Accessories & Components',
      description:
        'We offer a complete range of essential transformer accessories to ensure optimal performance, safety, and longevity. From tanks, radiators, and tap changers to protective devices like Buchholz relays and pressure relief valves, we provide high-quality components that meet rigorous quality standards, ensuring your transformers operate flawlessly.',
      icon: Wrench,
      bgColor: 'bg-teal-600',
    },
];

const otherServices = [
    {
        title: 'Ring Main Units (RMU)',
        description: 'Compact and safe switchgear for medium voltage distribution networks.',
        icon: ShieldCheck,
    },
    {
        title: 'MV/LV Switchgear',
        description: 'Reliable solutions for electrical protection and distribution.',
        icon: CircuitBoard,
    },
    {
        title: 'Data Center Solutions',
        description: 'Specialized power solutions for the high demands of modern data centers.',
        icon: Cpu,
    },
     {
        title: 'Busbars & Connectors',
        description: 'Custom-engineered busbars for efficient power distribution.',
        icon: Zap,
    },
     {
        title: 'Industrial Automation',
        description: 'Control systems to enhance productivity and efficiency.',
        icon: Component,
    },
     {
        title: 'Turnkey Projects',
        description: 'End-to-end management of electrical system installation and commissioning.',
        icon: Wrench,
    },
]

export default function ServicesPage() {
  return (
    <div className="bg-white text-foreground animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-primary/10 pt-24 pb-16 md:pt-32 md:pb-24">
         <div className="container text-center">
             <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Our Services
             </h1>
             <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
             ARP Electric Solution delivers reliable, high-quality electrical services tailored for residential, commercial, and industrial needs. Our offerings include system design, installation, maintenance, energy audits, and smart automation solutions. We prioritize safety, efficiency, and long-term performance in every project. Committed to sustainability, we integrate energy-saving technologies and eco-friendly practices to support a greener future. Backed by a skilled team of certified professionals, we ensure every solution is engineered for excellence. At ARP, we don’t just deliver power — we deliver intelligent, future-ready electrical solutions that last.

</p>
         </div>
      </div>

      {/* Main Services Section */}
      <div className="py-16 md:py-24 space-y-24">
        {services.map((service, index) => (
          <div id={service.id} key={service.id} className="container group">
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                 <div className={`relative min-h-[400px] h-full overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <Image
                      src={service.image}
                      alt={service.title}
                      data-ai-hint={service.hint}
                      fill
                      className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold font-headline text-primary">
                      {service.title}
                  </h2>
                  <p className="mt-2 text-base font-semibold text-secondary-foreground">
                      {service.subtitle}
                  </p>
                  <p className="mt-4 text-muted-foreground">
                      {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                      {service.points.map((point) => (
                          <li key={point} className="flex items-start">
                              <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                              <span className="ml-2 text-muted-foreground">{point}</span>
                          </li>
                      ))}
                  </ul>
                </div>
              </div>
          </div>
        ))}
      </div>

      {/* Expertise Area Section */}
       <div className="py-16 md:py-24 container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className={`relative p-12 text-white text-center flex flex-col items-center justify-center ${area.bgColor}`}
              >
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-white/20 p-4">
                      <area.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <p className="max-w-md mx-auto">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      {/* Other Services Section */}
       <div className="py-16 md:py-24 bg-primary/5">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                        Additional Capabilities
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Beyond our core offerings, we provide a wide array of specialized products and services to meet all your electrical needs.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherServices.map((service) => (
                        <Card key={service.title} className="group text-center p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:bg-card">
                             <div className="flex justify-center mb-4">
                                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-accent-foreground">{service.title}</h3>
                            <p className="mt-2 text-muted-foreground">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
       </div>


      {/* CTA Section */}
      <div className="py-20 bg-background">
        <div className="container text-center">
            <h2 className="text-3xl font-bold text-primary">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Let's discuss how our expertise can bring your project to life. Contact our team for a personalized consultation and quote.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Get a Quote</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
