import { Bolt } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <img src="https://firebasestorage.googleapis.com/v0/b/arp-electric-solution.firebasestorage.app/o/arp%20elctric%20solution%20logo.png?alt=media&token=8c341eac-e586-4c5c-9ab6-b47d7e1064f0" alt="ARP Electric Solutions Logo" className="h-6 w-6" />
      <div className="flex flex-col">
        <span className="font-headline text-lg font-bold text-primary">
          ARP Electric
        </span>
        <span className="font-body text-xs text-muted-foreground">
          Solutions
        </span>
      </div>
    </Link>
  );
}
