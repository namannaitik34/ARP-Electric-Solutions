import Link from 'next/link';
import { Logo } from '@/components/site/logo';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  const services = [
    { name: 'Transformers', href: '/services#transformers' },
    { name: 'UPS Systems', href: '/services#ups-systems' },
    { name: 'CRGO', href: '/services#crgo' },
    { name: 'Copper Foil', href: '/services#copper-foil' },
    { name: 'Amorphous Core', href: '/services#amorphous-core' },
    { name: 'Switchgear', href: '/services#switchgear' },
  ];

  const usefulLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'All Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
      { name: 'Facebook', href: siteConfig.links.facebook, icon: Facebook },
      { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
      { name: 'Instagram', href: siteConfig.links.instagram, icon: Instagram },
      { name: 'WhatsApp', href: `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`, icon: FaWhatsapp },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info & Socials */}
          <div className="space-y-6">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for high-quality electrical components and solutions. We are committed to innovation, reliability, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                    >
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                    </a>
                ))}
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-primary-foreground">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-primary-foreground">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-primary-foreground">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className='space-y-2'>
                  <h5 className='font-medium text-primary-foreground/90'>India Office</h5>
                  <div className="flex items-start gap-3 text-primary-foreground/80">
                    <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                    <span>DK 2/73 Danish Kunj, Kolar road, Bhopal, 462042, M.P</span>
                  </div>
                   <div className="flex items-center gap-3 text-primary-foreground/80">
                    <Phone className="h-5 w-5 shrink-0" />
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-primary-foreground transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
              </li>
             
              <li className='space-y-2'>
                <h5 className='font-medium text-primary-foreground/90'>UAE Office</h5>
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>Business Center, Sharjah Publishing City Free Zone, Sharjah</span>
                </div>
                 <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Phone className="h-5 w-5 shrink-0" />
                  <a href="tel:+971564716514" className="hover:text-primary-foreground transition-colors">
                    +971 56 471 6514
                  </a>
                </div>
              </li>

               <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="h-5 w-5 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-foreground transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}