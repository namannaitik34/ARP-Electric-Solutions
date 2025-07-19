import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

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

const coreValues = ['Trust', 'Innovation', 'Integrity', 'Excellence'];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground animate-fadeIn">
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

        <div className="mt-24 space-y-20">
          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Team collaborating on a project"
                data-ai-hint="team business"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
              <p className="mt-4 text-muted-foreground">
                To provide high-quality, innovative, and sustainable electrical
                solutions that empower industries and improve lives, while
                maintaining the highest standards of integrity and customer
                service.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative rounded-lg overflow-hidden shadow-lg aspect-square">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Global network connections"
                data-ai-hint="global network"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-3xl font-bold text-primary">Our Vision</h3>
              <p className="mt-4 text-muted-foreground">
                To be a global leader in the electrical components industry,
                recognized for our technological advancements, commitment to
                quality, and dedication to a greener planet.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Handshake sealing a deal"
                data-ai-hint="handshake business"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">Our Values</h3>
              <p className="mt-4 text-muted-foreground">
                Integrity, Innovation, Quality, Customer-Centricity, and
                Sustainability are the core principles that guide every decision
                we make and every product we create.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-24">
           <Card className="overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">OUR CORE VALUES</h2>
                        <p className="mt-4 text-muted-foreground">
                            Our core values are the foundation of everything we do at ARP. These timeless principles define our conduct, guide our decisions, and inspire our teams as we grow across global markets.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {coreValues.map((value) => (
                                <div key={value} className="
                                    flex items-center justify-center p-4 rounded-full
                                    bg-gradient-to-r from-teal-400 to-green-400 
                                    text-white font-semibold shadow-md
                                    transition-all duration-300 ease-in-out
                                    hover:scale-105 hover:shadow-xl cursor-pointer">
                                    {value}
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="relative w-full h-64 md:h-full min-h-[300px]">
                        <Image
                            src="https://placehold.co/600x600.png"
                            data-ai-hint="core values business"
                            alt="Core Values"
                            fill
                            className="object-cover"
                        />
                         <div className="absolute inset-0 bg-primary/20"></div>
                    </div>
                </div>
            </Card>
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
