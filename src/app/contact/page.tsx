'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
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

    return (
        <div className="bg-background text-foreground animate-fadeIn">
            <div className="container py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Contact Us</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We're here to help. Reach out to us with your questions, inquiries, or project requirements.
                    </p>
                </div>

                <div className="mt-16 grid lg:grid-cols-2 gap-16">
                    <Card>
                        <CardContent className="p-8">
                            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
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
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john.doe@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Subject</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Inquiry about Transformers" {...field} />
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
                                                    <Textarea placeholder="Your message here..." rows={6} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full">Send Message</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold">Contact Information</h2>
                        <p className="text-muted-foreground">
                            You can also reach us through the following channels. Our team is available to assist you from Monday to Friday, 9 AM to 6 PM.
                        </p>
                         <ul className="space-y-6 text-lg">
                            <li className="flex items-start gap-4">
                                <MapPin className="h-8 w-8 mt-1 shrink-0 text-primary" />
                                <div>
                                    <h4 className="font-semibold">Our Office</h4>
                                    <p className="text-muted-foreground text-base">123 Industrial Park, Elec-City, 456789, India</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="h-8 w-8 shrink-0 text-primary" />
                                <div>
                                    <h4 className="font-semibold">Email Us</h4>
                                    <a href="mailto:info@arpelectric.com" className="text-muted-foreground text-base hover:text-primary transition-colors">
                                    info@arpelectric.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone className="h-8 w-8 shrink-0 text-primary" />
                                <div>
                                    <h4 className="font-semibold">Call Us</h4>
                                    <a href="tel:+911234567890" className="text-muted-foreground text-base hover:text-primary transition-colors">
                                    +91 123 456 7890
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
