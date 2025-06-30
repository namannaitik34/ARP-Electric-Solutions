import Link from 'next/link';
import { Logo } from './logo';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const services = [
    { name: 'Transformers', href: '/services#transformers' },
    { name: 'UPS Systems', href: '/services#ups-systems' },
    { name: 'CRGO', href: '/services#crgo' },
    { name: 'Copper Foil', href: '/services#copper-foil' },
    { name: 'Amorphous Core', href: '/services#amorphous-core' },
  ];

  const usefulLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'All Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-secondary-foreground/80">
              Your trusted partner for high-quality electrical components and solutions. We are committed to innovation, reliability, and customer satisfaction.
            </p>
          </div>

          {/* Column 2: Service Highlights */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Service Highlights</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm hover:text-primary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span>123 Industrial Park, Elec-City, 456789, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:info@arpelectric.com" className="hover:text-primary transition-colors">
                  info@arpelectric.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ARP Electric Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
