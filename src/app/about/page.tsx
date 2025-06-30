import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target } from 'lucide-react';

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://placehold.co/300x300.png",
    hint: "professional portrait"
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "https://placehold.co/300x300.png",
    hint: "professional portrait woman"
  },
  {
    name: "Peter Jones",
    role: "Head of Operations",
    image: "https://placehold.co/300x300.png",
    hint: "male portrait"
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About ARP Electric Solution</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We are pioneers in the electrical solutions industry, dedicated to powering progress with cutting-edge technology and unwavering commitment to quality.
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
            <h2 className="text-3xl font-bold font-headline text-secondary-foreground">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2010, ARP Electric Solution started with a vision to revolutionize the electrical component manufacturing sector. From a small workshop to a state-of-the-art facility, our journey has been fueled by a passion for innovation and a relentless pursuit of excellence. We believe in building lasting relationships with our clients by providing them with products that are not only superior in quality but also contribute to a sustainable future.
            </p>
          </div>
        </div>

        <div className="mt-24 grid lg:grid-cols-3 gap-8 text-center">
          <Card>
            <CardContent className="p-8">
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">To provide high-quality, innovative, and sustainable electrical solutions that empower industries and improve lives, while maintaining the highest standards of integrity and customer service.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <Target className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">To be a global leader in the electrical components industry, recognized for our technological advancements, commitment to quality, and dedication to a greener planet.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-semibold">Our Values</h3>
              <p className="mt-2 text-muted-foreground">Integrity, Innovation, Quality, Customer-Centricity, and Sustainability are the core principles that guide every decision we make and every product we create.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-24">
            <h2 className="text-3xl font-bold font-headline text-center text-primary">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">The driving force behind our success is our team of dedicated and experienced professionals.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map(member => (
                    <Card key={member.name} className="text-center overflow-hidden">
                        <Image src={member.image} data-ai-hint={member.hint} alt={member.name} width={300} height={300} className="w-full h-auto object-cover" />
                        <CardContent className="p-6">
                            <h4 className="text-xl font-semibold">{member.name}</h4>
                            <p className="text-primary">{member.role}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
