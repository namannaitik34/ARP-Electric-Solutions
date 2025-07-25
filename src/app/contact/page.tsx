'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Building, LandPlot, Phone, Share2, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { siteConfig } from '@/config/site';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Message Sent!",
            description: "Thank you for contacting us. We will get back to you shortly.",
        });
        form.reset();
    }

    const socialLinks = [
        { name: 'Facebook', href: siteConfig.links.facebook, icon: Facebook },
        { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
        { name: 'Instagram', href: siteConfig.links.instagram, icon: Instagram },
        { name: 'WhatsApp', href: `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`, icon: FaWhatsapp },
    ];

    return (
        <div className="bg-white text-foreground animate-fadeIn">
            {/* Top Section */}
            <div className="bg-gradient-to-br from-teal-800 to-teal-950bg-gradient-to-br from-teal-800 to-teal-950bg-gradient-to-br from-teal-800 to-teal-950 text-primary-foreground py-20 md:py-28">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline">Get in Touch</h1>
                        <p className="text-lg text-primary-foreground/80">
                            Have a question or a project in mind? We'd love to hear from you. Fill out the form or use the contact details below to reach our team.
                        </p>
                    </div>
                    <div>
                        <Card className="shadow-2xl">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h2>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="firstName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>First Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="John" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="lastName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Last Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Doe" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                         <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                                                    <FormLabel>Phone Number (Optional)</FormLabel>
                                                    <FormControl>
                                                        <Input type="tel" placeholder="Your phone number" {...field} />
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
                                                    <FormLabel>Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="How can we help you?" rows={5} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit" className="w-full text-lg py-6">Submit</Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-primary/5 py-20 md:py-24">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                         <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">We're here for you.</h2>
                         <p className="mt-4 text-muted-foreground">Find our office locations and contact information below. We look forward to connecting with you.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* India Office Card */}
                        <Card className="p-6 text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                           <div className="flex justify-center mb-4">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Building className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                           <h3 className="text-xl font-semibold text-accent-foreground">India Office</h3>
                           <p className="mt-2 text-muted-foreground">DK 2/73 Danish Kunj, Kolar road, Bhopal, 462042, M.P</p>
                        </Card>
                        
                        {/* UAE Office Card */}
                        <Card className="p-6 text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                           <div className="flex justify-center mb-4">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <LandPlot className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                           <h3 className="text-xl font-semibold text-accent-foreground">UAE Office</h3>
                           <p className="mt-2 text-muted-foreground">Business Center, Sharjah Publishing City Free Zone, Sharjah</p>
                        </Card>

                        {/* Contact Info Card */}
                        <Card className="p-6 text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                             <div className="flex justify-center mb-4">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Phone className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-accent-foreground">Contact Info</h3>
                            <div className="mt-2 text-muted-foreground space-y-2">
                               <a href={`mailto:${siteConfig.email}`} className="block hover:text-primary transition-colors">
                                 {siteConfig.email}
                               </a>
                               <a href={`tel:${siteConfig.phone}`} className="block hover:text-primary transition-colors">
                                 {siteConfig.phone} (India)
                               </a>
                               <a href="tel:+971564716514" className="block hover:text-primary transition-colors">
                                 +971 56 471 6514 (UAE)
                               </a>
                            </div>
                        </Card>

                        {/* Social Media Card */}
                        <Card className="p-6 text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                             <div className="flex justify-center mb-4">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Share2 className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-accent-foreground">Follow Us</h3>
                            <div className="mt-4 flex justify-center space-x-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                        <social.icon className="h-5 w-5" />
                                        <span className="sr-only">{social.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
