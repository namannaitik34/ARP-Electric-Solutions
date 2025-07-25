'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Bolt,
  CircuitBoard,
  Component,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Wind,
  Zap,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Logo } from '@/components/site/logo';
import { MobileNav } from '@/components/site/mobile-nav';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';

const services: { title: string; href: string; description: string, icon: React.ElementType }[] = [
    { title: 'Transformers', href: '/services#transformers', description: 'High-quality power and distribution transformers for various applications.', icon: CircuitBoard },
    { title: 'UPS Systems', href: '/services#ups-systems', description: 'Reliable uninterruptible power supply systems to protect your critical equipment.', icon: Bolt },
    { title: 'CRGO', href: '/services#crgo', description: 'Cold Rolled Grain Oriented steel for efficient transformer cores.', icon: Component },
    { title: 'Copper Foil', href: '/services#copper-foil', description: 'High-conductivity copper foil for electronics and industrial use.', icon: Zap },
    { title: 'Amorphous Core', href: '/services#amorphous-core', description: 'Energy-efficient amorphous metal cores for modern transformers.', icon: Wind },
    { title: 'Nanocrystalline Core', href: '/services#nanocrystalline-core', description: 'Advanced nanocrystalline cores for high-frequency applications.', icon: CircuitBoard },
    { title: 'Rectifiers', href: '/services#rectifiers', description: 'Industrial-grade rectifiers for AC to DC power conversion.', icon: Bolt },
    { title: 'Inverters', href: '/services#inverters', description: 'High-performance inverters for converting DC power to AC.', icon: Component },
    { title: 'Busbars', href: '/services#busbars', description: 'Customized copper and aluminum busbars for power distribution.', icon: Zap },
    { title: 'Switchgear', href: '/services#switchgear', description: 'Low and medium voltage switchgear for circuit protection.', icon: Wind },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-teal-900 text-primary-foreground text-s py-5">
        <div className="container flex items-center justify-between">
            <div className="flex items-center space-x-4 md:space-x-10">
                <span className="font-semibold italic hidden md:block ">Trusted partner in energy</span>
                <div className="flex space-x-8 hidden md:flex">
                    <a href={siteConfig.links.facebook} target="_blank" rel="noreferrer" className="hover:text-primary-foreground/80 transition-colors duration-200">
                        <Facebook className="h-6 w-6" />
                    </a>
                    <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary-foreground/80 transition-colors duration-200">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-primary-foreground/80 transition-colors duration-200">
                        <Instagram className="h-6 w-6" />
                    </a>
                    <a href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-primary-foreground/80 transition-colors duration-200">
                        <FaWhatsapp className="h-6 w-6" />
                    </a>
                </div>
            </div>
            <div className="flex items-center space-x-4 flex-col md:flex-row md:space-x-12">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center space-x-1 hover:text-primary-foreground/80 transition-colors duration-200">
                    <Phone className="h-4 w-4" /><span>{siteConfig.phone}</span></a>    
                <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-1 hover:text-primary-foreground/80 transition-colors duration-200"><Mail className="h-4 w-4" /><span>{siteConfig.email}</span></a>
            </div>
        </div>
      </div>
      <header className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent border-b-transparent"
        )}>
        <div className="container flex h-20 items-center">
            <div className="mr-4 flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                    <span className="font-bold hidden sm:inline-block">{siteConfig.name}</span>
                </Link>
            </div>

            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                          <Link href="/" className={navigationMenuTriggerStyle()}>
                            Home
                          </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                          <Link href="/about" className={navigationMenuTriggerStyle()}>
                            About Us
                          </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                          <Link href="/products" className={navigationMenuTriggerStyle()}>
                            Products
                          </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                          <Link href="/services" className={navigationMenuTriggerStyle()}>
                            Services
                          </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex flex-1 items-center justify-end space-x-2">
                <Button asChild variant="outline" className='hidden md:inline-flex'>
                    <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild className='hidden md:inline-flex'>
                    <Link href="/#request-quote">Get a Quote</Link>
                </Button>
                <ThemeToggle />
                <MobileNav />
            </div>
        </div>
      </header>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || ''}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary" />
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
