import Link from 'next/link';
import { Logo } from '@/components/site/logo'; // Assuming this is your logo component
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
    <footer className="bg-white text-black">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-black/80">
              Your trusted partner for high-quality electrical components and solutions. We are committed to innovation, reliability, and customer satisfaction.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/arp-electric-solutions" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                {/* Replace with your actual LinkedIn icon component */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.55 0-1.832v5.604h-3v-11h3v1.765c1.396-2.586 7-2.352 7 3.5l-.001 5.735z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/arpelectricsolutions" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                {/* Replace with your actual Instagram icon component */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.714.01 3.657.042 2.667.099 3.668.531 4.345.808a4.913 4.913 0 012.182 1.355c.935.935 1.355 2.182 1.808 4.345.277.677.709 1.678.808 4.345.032.943.042 1.227.042 3.657s-.01 2.714-.042 3.657c-.099 2.667-.531 3.668-.808 4.345a4.913 4.913 0 01-1.355 2.182c-.935.935-2.182 1.355-4.345 1.808-.677.277-1.678.709-4.345.808-.943.032-1.227.042-3.657.042s-2.714-.01-3.657-.042c-2.667-.099-3.668-.531-4.345-.808a4.913 4.913 0 01-2.182-1.355c-.935-.935-1.355-2.182-1.808-4.345-.277-.677-.709-1.678-.808-4.345-.032-.943-.042-1.227-.042-3.657s.01-2.714.042-3.657c.099-2.667.531-3.668.808-4.345a4.913 4.913 0 011.355-2.182c.935-.935 2.182-1.355 4.345-1.808.677-.277 1.678-.709 4.345-.808zm-.01 4.251c-2.73 0-4.943 2.213-4.943 4.943s2.213 4.943 4.943 4.943 4.943-2.213 4.943-4.943-2.213-4.943-4.943-4.943zm0 8.08a3.137 3.137 0 110-6.274 3.137 3.137 0 010 6.274zm6.516-8.08a1.233 1.233 0 100-2.466 1.233 1.233 0 000 2.466z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://wa.me/917000705979" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                {/* Replace with your actual WhatsApp icon component */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 3.028 1.324 5.754 3.452 7.59l-1.181 3.068a.75.75 0 00.934 1.074l3.33-1.898A9.985 9.985 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.288 13.288a.75.75 0 01-1.06 0l-.882-.883a3.75 3.75 0 00-5.303 0l-2.121 2.12a.75.75 0 01-1.061-1.06l2.12-2.12a5.25 5.25 0 017.425 0l.883.883a.75.75 0 010 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
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
                <span>ARP Electric Solutions Pvt. Ltd <br /> DK 2/73 Danish Kunj <br /> Kolar road, Bhopal <br /> 462042, M.P</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 7000705979
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span>Business Center, Sharjah Publishing City Free Zone,
                Sharjah, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +971564716514
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:info@arpelectric.com" className="hover:text-primary transition-colors">
                  contact@arp.net.in
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-dark-blue/60">
          <p>&copy; {new Date().getFullYear()} ARP Electric Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
