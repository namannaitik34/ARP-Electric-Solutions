'use client';

import Link from 'next/link';
import * as React from 'react';
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
import { Logo } from './logo';
import { MobileNav } from './mobile-nav';
import { Bolt, CircuitBoard, Component, Wind, Zap } from 'lucide-react';

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
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      icon={service.icon}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <MobileNav />
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
