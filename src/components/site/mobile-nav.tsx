'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Logo } from './logo';

interface NavItem {
  href: string;
  label: string;
}

interface ServiceItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
];

const serviceItems: ServiceItem[] = [
    { href: '/services#transformers', label: 'Transformers' },
    { href: '/services#ups-systems', label: 'UPS Systems' },
    { href: '/services#crgo', label: 'CRGO' },
    { href: '/services#copper-foil', label: 'Copper Foil' },
    { href: '/services#amorphous-core', label: 'Amorphous Core' },
    { href: '/services#nanocrystalline-core', label: 'Nanocrystalline Core' },
    { href: '/services#rectifiers', label: 'Rectifiers' },
    { href: '/services#inverters', label: 'Inverters' },
    { href: '/services#busbars', label: 'Busbars' },
    { href: '/services#switchgear', label: 'Switchgear' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[340px]">
        <SheetHeader className="mb-4">
          <Logo />
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
          <Accordion type="single" collapsible>
            <AccordionItem value="services" className="border-b-0">
              <AccordionTrigger className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:no-underline [&[data-state=open]>svg]:rotate-180">
                Services
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                <div className="flex flex-col space-y-2 pt-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="px-3 pt-4">
            <Button asChild className="w-full">
                <Link href="/#request-quote" onClick={() => setIsOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
