
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake, Lightbulb, ShieldCheck, Star } from 'lucide-react';

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
    description: 'We build relationships based on reliability and transparency, ensuring our clients and partners can always depend on us.',
    icon: Handshake,
  },
  {
    title: 'Innovation',
    description: 'We continuously seek new and better ways to solve challenges, pushing the boundaries of technology to deliver cutting-edge solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Integrity',
    description: 'We operate with unwavering honesty and ethical standards, holding ourselves accountable in every action we take.',
    icon: ShieldCheck,
  },
  {
    title: 'Excellence',
    description: 'We are committed to the highest standards of quality and performance, striving for exceptional results in everything we do.',
    icon: Star,
  },
];

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
             <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground">OUR CORE VALUES</h2>
             <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Our core values are the foundation of everything we do at ARP. These timeless principles define our conduct, guide our decisions, and inspire our teams as we grow across global markets.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value) => (
                  <Card key={value.title} className="group text-center p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:bg-primary/5">
                      <div className="flex justify-center mb-4">
                          <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                             <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                          </div>
                      </div>
                      <h4 className="text-xl font-bold text-primary">{value.title}</h4>
                      <p className="mt-2 text-muted-foreground">{value.description}</p>
                  </Card>
              ))}
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
