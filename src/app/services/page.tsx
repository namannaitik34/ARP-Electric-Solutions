import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bolt, CircuitBoard, Component, Wind, Zap } from "lucide-react";

const allServices = [
    { id: 'transformers', title: 'Transformers', description: 'We design and manufacture a wide range of power and distribution transformers, including custom solutions to meet specific voltage and power requirements. Our transformers are built for reliability and efficiency.', icon: CircuitBoard },
    { id: 'ups-systems', title: 'UPS Systems', description: 'Protect your critical systems from power outages and fluctuations with our robust Uninterruptible Power Supply (UPS) systems. Available in various capacities for industrial and commercial use.', icon: Bolt },
    { id: 'crgo', title: 'CRGO Steel', description: 'We supply high-quality Cold Rolled Grain Oriented (CRGO) steel, the core material for efficient and low-loss transformers. Our CRGO is sourced from leading global mills.', icon: Component },
    { id: 'copper-foil', title: 'Copper Foil', description: 'Our high-conductivity copper foil is ideal for a variety of applications, including printed circuit boards (PCBs), lithium-ion batteries, and electromagnetic shielding.', icon: Zap },
    { id: 'amorphous-core', title: 'Amorphous Cores', description: 'Benefit from superior energy efficiency with our amorphous metal transformer cores. They significantly reduce no-load losses, leading to substantial energy savings over the transformer\'s lifetime.', icon: Wind },
    { id: 'nanocrystalline-core', title: 'Nanocrystalline Cores', description: 'For high-frequency applications, our nanocrystalline cores offer excellent magnetic properties, including high permeability and low core loss. Ideal for chokes, filters, and high-frequency transformers.', icon: CircuitBoard },
    { id: 'rectifiers', title: 'Rectifiers', description: 'We provide industrial-grade rectifiers for efficient AC to DC power conversion. Our products are designed for durability and high performance in demanding environments.', icon: Bolt },
    { id: 'inverters', title: 'Inverters', description: 'Our range of power inverters offers reliable DC to AC conversion. They are suitable for renewable energy systems, backup power, and various industrial applications.', icon: Component },
    { id: 'busbars', title: 'Busbars', description: 'We manufacture custom copper and aluminum busbars for efficient power distribution within switchgear, panel boards, and other electrical apparatuses. Precision-engineered to your specifications.', icon: Zap },
    { id: 'switchgear', title: 'Switchgear', description: 'Our low and medium voltage switchgear assemblies provide centralized control and protection of electrical circuits. Designed for safety, reliability, and ease of maintenance.', icon: Wind },
];

export default function ServicesPage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Services</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Explore our comprehensive range of high-quality electrical components and solutions, engineered for performance and reliability.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map(service => (
                        <Card id={service.id} key={service.id} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <service.icon className="w-10 h-10 text-primary" />
                                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
